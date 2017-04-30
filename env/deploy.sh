#pull down new code

cd ~/digital_outline_environment
git pull
berks vendor cookbooks
sudo chef-client --local-mode --runlist 'recipe[node-server]'


cd ~/digital_outlineApp
git pull
npm install
bower install


cd ~/digital_outline_environment
pm2 kill
pm2 start production.json
