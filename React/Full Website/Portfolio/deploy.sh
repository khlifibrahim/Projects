echo "Swithcing branch to master"
git checkout master

echo "Building app..."
npm run build

echo "Deploy files to server..."
scp -r dist/* brahim@khlifibrahim.me:/www/wwwroot/khlifibrahim.me/

echo "Done!"