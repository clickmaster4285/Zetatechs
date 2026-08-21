#!/usr/bin/env bash
set -euo pipefail

APP_DIR="/var/www/zetatechs"
APP_NAME="zetatechs"
PORT="7002"
ECOSYSTEM="$APP_DIR/ecosystem.config.cjs"

cd "$APP_DIR"

# Load nvm (Node via NVM)
export NVM_DIR="${NVM_DIR:-$HOME/.nvm}"
# shellcheck disable=SC1091
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"

echo "==> Node: $(node -v)"
echo "==> npm:  $(npm -v)"

echo "==> Installing dependencies (npm)"
npm install

echo "==> Building with node-server preset (npm run build)"
export NITRO_PRESET=node-server
npm run build

if [ ! -f "$APP_DIR/.output/server/index.mjs" ]; then
  echo "ERROR: Build output missing at $APP_DIR/.output/server/index.mjs" >&2
  exit 1
fi

echo "==> PM2: inspect current zetatechs process (if any)"
if pm2 describe "$APP_NAME" >/dev/null 2>&1; then
  pm2 describe "$APP_NAME" | head -40
else
  echo "No existing PM2 process named $APP_NAME"
fi

echo "==> PM2: recreate ONLY $APP_NAME"
pm2 delete "$APP_NAME" 2>/dev/null || true
pm2 start "$ECOSYSTEM" --only "$APP_NAME"
pm2 save

echo "==> Verify port $PORT is listening"
ss -ltnp | grep ":$PORT" || netstat -ltnp 2>/dev/null | grep ":$PORT" || true

echo "==> curl localhost:$PORT"
curl -fsS -o /dev/null -w "HTTP %{http_code}\n" "http://127.0.0.1:$PORT/"

echo "==> nginx -t"
nginx -t

echo "==> Reload nginx (only if test passed above)"
systemctl reload nginx

echo "==> PM2 status for $APP_NAME"
pm2 describe "$APP_NAME" | egrep 'status|script path|exec cwd|node env|PORT|HOST' || pm2 describe "$APP_NAME"

echo "==> Done"
