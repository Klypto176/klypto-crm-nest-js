#!/usr/bin/env bash
# Writes a production .env for the Klypto CRM backend.
#
# Does not reuse the committed .env's placeholder secrets
# ("your-access-token-secret-hey-klypto", "your-app-password") -- those would
# let anyone forge a login token. Generates real ones; only the Neon
# connection string is carried over, since that is already a real credential.
#
#   bash deploy/make-env.sh http://crm.YOUR_IP.sslip.io
set -Eeuo pipefail

if [[ $# -ne 1 ]]; then
  echo "Usage: bash deploy/make-env.sh http://crm.YOUR_IP.sslip.io"
  exit 1
fi

CRM_ORIGIN="${1%/}"
REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
ENV_FILE="$REPO_DIR/.env"

if [[ -f "$ENV_FILE" ]]; then
  echo "$ENV_FILE already exists."
  read -r -p "Overwrite it? A backup is kept. [y/N] " reply
  [[ "$reply" =~ ^[Yy]$ ]] || { echo "Keeping the existing file."; exit 0; }
  cp "$ENV_FILE" "$ENV_FILE.backup.$(date +%Y%m%d%H%M%S)"
fi

echo
echo "Neon Postgres connection string."
echo "Neon console -> your project -> Connect -> keep 'Pooled connection' on."
echo "Starts with postgresql://"
read -r -p "> " DATABASE_URL
if [[ ! "$DATABASE_URL" =~ ^postgresql:// ]]; then
  echo "That does not look like a Postgres connection string."
  exit 1
fi

echo
echo "Email settings (optional -- press Enter to skip; the app still runs,"
echo "only outgoing mail -- invites, notifications -- is disabled)."
read -r -p "Gmail address: " SMTP_USER
SMTP_PASS=""
if [[ -n "$SMTP_USER" ]]; then
  echo "Gmail APP password (not your normal password; input is hidden):"
  read -r -s SMTP_PASS
  echo
fi

JWT_ACCESS_SECRET="$(openssl rand -hex 32)"
JWT_REFRESH_SECRET="$(openssl rand -hex 32)"

umask 077
cat > "$ENV_FILE" <<ENVFILE
# Database
DATABASE_URL="$DATABASE_URL"

# Only this CRM's own origin may call the API in production -- cors-origin.util.ts
# skips its localhost/LAN dev-pattern fallback once NODE_ENV=production.
CORS_ORIGIN=$CRM_ORIGIN

# JWT
JWT_ACCESS_SECRET="$JWT_ACCESS_SECRET"
JWT_REFRESH_SECRET="$JWT_REFRESH_SECRET"

# SMTP (Email)
SMTP_HOST="smtp.gmail.com"
SMTP_PORT=587
SMTP_USER="$SMTP_USER"
SMTP_PASS="$SMTP_PASS"

# App
# 3000 is the BIM frontend's port on this box -- this backend must not share it.
PORT=4000
NODE_ENV=production
BIOMETRIC_SYNC_FROM=$(date +%Y-%m-%d)
ENVFILE

chmod 600 "$ENV_FILE"

echo
echo "Wrote $ENV_FILE (permissions 600)"
echo "  CORS origin: $CRM_ORIGIN"
echo "  port:        4000"
echo "  JWT secrets: generated"
echo "  email:       ${SMTP_USER:-disabled}"
echo
if pm2 describe crm-backend >/dev/null 2>&1; then
  echo "Restarting crm-backend..."
  pm2 restart crm-backend --update-env
  sleep 4
  if curl -fsS http://127.0.0.1:4000/api >/dev/null 2>&1; then
    echo "Backend responded on :4000."
  else
    echo "No response yet on :4000 -- check: pm2 logs crm-backend --lines 50"
  fi
fi
