
cd web-portfolio-2023

npm run build
cp "404.html" "dist"

git add dist -f
git commit -m "build"

cd ..
git subtree push --prefix web-portfolio-2023/dist origin gh-pages
