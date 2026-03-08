#!/usr/bin/env bash
set -e
cd "$(dirname "$0")/.."
git add -A
if git diff --staged --quiet; then
  echo "Nothing to commit."
  exit 0
fi
msg="${1:-Update site}"
git commit -m "$msg"
git push
echo "Done. Deployment should trigger if connected to Vercel/Netlify."
