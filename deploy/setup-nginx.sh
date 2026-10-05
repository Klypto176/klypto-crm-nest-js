#!/usr/bin/env bash
# Adds the CRM's Nginx route: a dedicated server block matched by the
# "crm.<ip>.sslip.io" hostname, routed to the backend on :4000 and the
# frontend's static files served directly from klypto-crm/dist.
#
# This writes only /etc/nginx/sites-available/klypto-crm -- it does not
# edit, replace, or remove bimdesign or bimdesign-staging. Both keep
# routing by their own hostnames/default_server exactly as before.
#
#   bash deploy/setup-nginx.sh ~/klypto-crm
set -Eeuo pipefail

if [[ $# -ne 1 ]]; then
  echo "Usage: bash deploy/setup-nginx.sh /path/to/klypto-crm"
  exit 1
fi

FRONTEND_DIR="$(cd "$1" && pwd)"
if [[ ! -d "$FRONTEND_DIR/dist" ]]; then
  echo "No dist/ under $FRONTEND_DIR -- build the frontend first (npm run build)."
  exit 1
fi

IMDS_TOKEN="$(curl -fsS --max-time 5 -X PUT \
  'http://169.254.169.254/latest/api/token' \
  -H 'X-aws-ec2-metadata-token-ttl-seconds: 120' 2>/dev/null || echo '')"
PUBLIC_IP=""
if [[ -n "$IMDS_TOKEN" ]]; then
  PUBLIC_IP="$(curl -fsS --max-time 5 \
    -H "X-aws-ec2-metadata-token: $IMDS_TOKEN" \
    http://169.254.169.254/latest/meta-data/public-ipv4 2>/dev/null || echo '')"
fi
if [[ -z "$PUBLIC_IP" ]]; then
  echo "Could not read this instance's public IP from metadata."
  echo "Pass it as a second argument if you need to override: not supported yet, edit CRM_HOST below."
  exit 1
fi
CRM_HOST="crm.${PUBLIC_IP}.sslip.io"

echo "==> Writing /etc/nginx/sites-available/klypto-crm for $CRM_HOST"
NGINX_TEMP="$(mktemp)"
trap 'rm -f "$NGINX_TEMP"' EXIT
cat > "$NGINX_TEMP" <<NGINXCONF
server {
    listen 80;
    listen [::]:80;
    server_name $CRM_HOST;

    client_max_body_size 50M;
    proxy_connect_timeout 60s;
    proxy_send_timeout 120s;
    proxy_read_timeout 120s;

    # Static SPA build. try_files falls back to index.html so client-side
    # routing (react-router) resolves deep links correctly.
    root $FRONTEND_DIR/dist;
    index index.html;

    location /api/ {
        proxy_pass http://127.0.0.1:4000/api/;
        proxy_http_version 1.1;
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
    }

    # ZKTeco biometric devices hit /iclock directly (no /api prefix) -- see
    # main.ts's setGlobalPrefix exclude list.
    location /iclock {
        proxy_pass http://127.0.0.1:4000;
        proxy_http_version 1.1;
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
    }

    location /uploads/ {
        proxy_pass http://127.0.0.1:4000/uploads/;
        proxy_http_version 1.1;
    }

    # Socket.IO (realtime module) needs the Upgrade headers for the
    # WebSocket handshake; everything else is a plain proxy.
    location /socket.io/ {
        proxy_pass http://127.0.0.1:4000/socket.io/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host \$host;
    }

    location / {
        try_files \$uri \$uri/ /index.html;
    }
}
NGINXCONF
sudo install -m 0644 "$NGINX_TEMP" /etc/nginx/sites-available/klypto-crm
sudo ln -sfn /etc/nginx/sites-available/klypto-crm /etc/nginx/sites-enabled/klypto-crm
sudo nginx -t
sudo systemctl reload nginx

echo
echo "============================================================"
echo "  CRM is routed at: http://$CRM_HOST"
echo "  Existing BIM sites (bimdesign, bimdesign-staging) are untouched."
echo "============================================================"
