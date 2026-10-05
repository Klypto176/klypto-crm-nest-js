#!/usr/bin/env bash
# One-time EC2 setup for the Klypto CRM backend (NestJS + Prisma/Neon Postgres).
#
# Runs entirely separately from the BIM design software on this same box:
# own directory (~/klypto-crm-nest-js), own PM2 process name (crm-backend),
# own port (4000), own Nginx site file. Nothing here touches
# ~/bimdesignsoftware, its PM2 apps, or its Nginx sites.
#
#   bash deploy/setup-server.sh
set -Eeuo pipefail

REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
RUN_USER="$(id -un)"

if [[ ! -f "$REPO_DIR/package.json" ]] || ! grep -q '"klypto-crm-nest-js"' "$REPO_DIR/package.json"; then
  echo "Run this from a complete klypto-crm-nest-js clone."
  exit 1
fi

echo
echo "==> [1/5] Checking Node.js and PM2 (installed already for the BIM app on this box)"
NODE_MAJOR="$(node --version 2>/dev/null | sed -E 's/^v([0-9]+).*/\1/' || echo 0)"
if (( NODE_MAJOR < 20 )); then
  echo "Node $NODE_MAJOR found; this app needs Node 20+. Install Node 22 first, same as the BIM app did."
  exit 1
fi
command -v pm2 >/dev/null 2>&1 || sudo npm install -g pm2
echo "    node $(node --version), pm2 $(pm2 --version)"

echo
echo "==> [2/5] Installing dependencies and the Prisma client"
cd "$REPO_DIR"
npm ci
npx prisma generate

echo
echo "==> [3/5] Building the backend"
npm run build
if [[ ! -f "$REPO_DIR/dist/apps/klypto-crm-nest-js/main.js" ]]; then
  echo "Build did not produce dist/apps/klypto-crm-nest-js/main.js -- check the nest build output above."
  exit 1
fi

echo
if [[ ! -f "$REPO_DIR/.env" ]]; then
  echo "==> [4/5] backend/.env does not exist yet"
  echo "    Create it with deploy/make-env.sh before starting the service."
else
  echo "==> [4/5] .env already present, leaving it alone"
fi

echo
echo "==> [5/5] Registering with PM2"
cd "$REPO_DIR"
if [[ -f "$REPO_DIR/.env" ]]; then
  pm2 startOrReload deploy/ecosystem.config.cjs --update-env
  pm2 save
else
  echo "    skipped -- no .env yet. Run deploy/make-env.sh, then:"
  echo "    pm2 start deploy/ecosystem.config.cjs --update-env && pm2 save"
fi

echo
echo "============================================================"
echo "  CRM backend setup step complete."
echo "  Next: run deploy/setup-nginx.sh to add the public route,"
echo "  and klypto-crm's deploy script to ship the frontend."
echo "============================================================"
