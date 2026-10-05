# Deploy the Klypto CRM backend to EC2.
#
# Separate from bimdesignsoftware's deploy-now.ps1/deploy-staging.ps1 in every
# way that matters: different repo, different server directory
# (~/klypto-crm-nest-js), different PM2 process name (crm-backend), different
# port (4000). Nothing here reads from or writes to ~/bimdesignsoftware.
#
# Unlike the BIM frontend, this backend is small enough to build directly on
# the server rather than needing a 16 GB build machine -- so this script
# ships source, not a prebuilt bundle, and builds remotely.
#
#   powershell -ExecutionPolicy Bypass -File .\deploy-crm-backend.ps1
param([string]$EC2_IP = "3.108.132.233")
$ErrorActionPreference = "Stop"

$KEY  = "D:\WORK\bimsoftware-key.pem"
$REPO = "D:\WORK\klypto-crm-nest-js"
$REMOTE_DIR = "/home/ubuntu/klypto-crm-nest-js"
$TARBALL = "crm-backend-src.tar.gz"

Write-Host ""
Write-Host "==> [1/4] Packing source (excluding node_modules, dist, .git)" -ForegroundColor Cyan
Set-Location $REPO
if (Test-Path $TARBALL) { Remove-Item -Force $TARBALL }
# Bare filename, not a full "D:\...\..." path: tar reads a colon in the
# destination as remote host:path syntax and silently fails before anything
# reaches the server -- bit the BIM deploy scripts twice for this reason.
tar -czf $TARBALL `
  --exclude=node_modules --exclude=dist --exclude=.git --exclude=uploads `
  --exclude="*.log" --exclude="deploy-crm-backend.ps1" `
  -C $REPO .
# tar exits 1 (not 0) when a file changed while it was being read -- a
# warning, not corruption; the archive it produced is still complete. Only
# a missing/empty output or a harder failure (2+) is treated as fatal.
if ($LASTEXITCODE -ge 2 -or -not (Test-Path $TARBALL) -or (Get-Item $TARBALL).Length -eq 0) {
    throw "Packing source failed (tar exit $LASTEXITCODE)."
}
$sizeMb = [math]::Round((Get-Item $TARBALL).Length / 1MB, 1)
Write-Host "    package: $sizeMb MB"

Write-Host ""
Write-Host "==> [2/4] Uploading to $EC2_IP" -ForegroundColor Cyan
$uploaded = $false
foreach ($attempt in 1..3) {
    if ($attempt -gt 1) { Write-Host "    retry $attempt of 3..." -ForegroundColor Yellow }
    scp -o ServerAliveInterval=20 -o ServerAliveCountMax=10 -o ConnectTimeout=30 -C `
        -i $KEY $TARBALL "ubuntu@${EC2_IP}:/home/ubuntu/$TARBALL"
    if ($LASTEXITCODE -eq 0) { $uploaded = $true; break }
    Start-Sleep -Seconds 3
}
Remove-Item -Force $TARBALL
if (-not $uploaded) { throw "Upload failed after 3 attempts." }

Write-Host ""
Write-Host "==> [3/4] Building and releasing on the server" -ForegroundColor Cyan
# Unpack to a staging dir and swap only once the build succeeds, so a failed
# build never touches the currently-running release.
$remote = @'
set -e
mkdir -p ~/klypto-crm-nest-js-staging
rm -rf ~/klypto-crm-nest-js-staging/*
tar -xzf ~/crm-backend-src.tar.gz -C ~/klypto-crm-nest-js-staging
rm -f ~/crm-backend-src.tar.gz

cd ~/klypto-crm-nest-js-staging
if [ -f ~/klypto-crm-nest-js/.env ]; then
  cp ~/klypto-crm-nest-js/.env .env
fi
npm ci
npx prisma generate
npm run build
test -f dist/apps/klypto-crm-nest-js/main.js

if [ -d ~/klypto-crm-nest-js/uploads ]; then
  rm -rf uploads
  cp -r ~/klypto-crm-nest-js/uploads uploads
fi

rm -rf ~/klypto-crm-nest-js-previous
if [ -d ~/klypto-crm-nest-js ]; then
  mv ~/klypto-crm-nest-js ~/klypto-crm-nest-js-previous
fi
mv ~/klypto-crm-nest-js-staging ~/klypto-crm-nest-js

cd ~/klypto-crm-nest-js
pm2 delete crm-backend 2>/dev/null || true
pm2 start deploy/ecosystem.config.cjs --update-env
pm2 save
'@
# PowerShell writes the piped string with CRLF line endings; bash on the
# server reads that literally ("set -e" becomes "set -e\r") and the whole
# release fails. Strip \r before sending -- same bug the BIM deploy scripts
# hit twice.
# Strip any bare \r too, not just \r\n pairs -- the frontend deploy script
# hit a stray orphan \r on its last heredoc line that survived a \r\n-only
# replace and broke that line.
($remote -replace "`r`n", "`n" -replace "`r", "") | ssh -i $KEY "ubuntu@$EC2_IP" 'bash -s'
if ($LASTEXITCODE -ne 0) { throw "Build/release failed on the server. The previous release is kept at ~/klypto-crm-nest-js-previous if a rollback is needed." }

Write-Host ""
Write-Host "==> [4/4] Health check" -ForegroundColor Cyan
Start-Sleep -Seconds 6
ssh -i $KEY "ubuntu@$EC2_IP" "pm2 list; echo; echo -n 'crm-backend : '; curl -s -o /dev/null -w '%{http_code}\n' --max-time 10 http://127.0.0.1:4000/api"

Write-Host ""
Write-Host "Done." -ForegroundColor Green
