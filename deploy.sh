#!/bin/bash
NOW=$(date +"%d-%m-%y")
todayCommit="Update at $NOW"

# Backup data
git checkout deploy
git pull origin deploy
mkdir -p ~/Project/vuepress_backup/backup_$NOW
cp -R ./docs/.vuepress/dist/ ~/Project/vuepress_backup/backup_$NOW

# Fetch lastest version of website
git checkout master
git pull origin master

# Remove dist/
rm -rf docs/.vuepress/dist/

# Checkout deploy branch
git checkout deploy

# Build to /dist
npm install
npm run build

# Push to github to deploy
git add .
git commit -m "$todayCommit"
git push origin deploy

# Remove dist/
rm -rf docs/.vuepress/dist/

# Checkout master
git checkout master
