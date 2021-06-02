#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m 'New Deployment'
git push -f git@gitlab.com:vardan777/sv.git master:dev

cd -