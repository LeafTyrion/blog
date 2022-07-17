#!/usr/bin/env sh
set -e
yarn build
cd .vuepress/dist
git init
git add -A
git commit -m 'deploy'
git push -f https://github.com/LeafTyrion/blog.git master:gh-pages
cd -