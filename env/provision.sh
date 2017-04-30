# #!/bin/bash

 # vagrant destroy -f && vagrant up && vagrant ssh

# Install the mongo db
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
echo "deb http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.0.list
echo 'installing mogodb DATABASE *******************... '

 # Update the souces list
 sudo apt-get update -y
 echo 'updating packages and software dependencies *********************...'

 # Upgrade any packages available
 sudo apt-get upgrade -y
 echo 'upgrading  *********************...'

 sudo apt-get install -y --allow-unauthenticated mongodb-org
 echo ' authenticated ok'

# # creating new mongo path to start use mongo 
mongod --dbpath /var/lib/mongodb/data/db
#  # echo 'creating new mongo path to start use mongo *****************......'

# starting mongo server mongod
# mongod

# ############# database installed up and running ######################

# # Install the package for nginx
 sudo apt-get install nginx -y
# echo 'installing nginx *****************...'

# # install node.js  version 6
 curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
 sudo apt-get install -y nodejs
# echo 'install nodejs ******************...'

#  Install git 
sudo apt-get install git -y
echo 'installing git ********************...'

# # remove default file from nginx 
# sudo rm -r /etc/nginx/sites-available/default 
# echo 'removing default nginx file **************************...'

# # cd /home/ubuntu/digital_outline
# # cd /home/ubuntu

# # restart the server
# sudo service nginx restart
# echo 'starting service nginx *************************...'



# # cd digital_outline
# # sudo chmod +x app.js package.json
# # sudo npm install

# # node app.js
# # echo 'lanching app.js in digital_outline directory ************....'


# # copy new nginx.default to /etc/nginx/sites-available/
# sudo cp /home/ubuntu/digital_outline_environment/nginx.default /etc/nginx/sites-available/
# echo 'coping nginx.default file into /etc/nginx/sites-available/ ****************...'

# # rename nginx.default to default 
# sudo mv /etc/nginx/sites-available/nginx.default /etc/nginx/sites-available/default
# echo 'renaming nginx.default file to default in directory --> /etc/nginx/sites-available/ ***************...'



# # # install aws cli
# # sudo apt-get --assume-yes install python-pip
# # apt-get install python-pip
# # pip install awscli
# # sudo apt-get install awscli


# # sudo npm install -g bower
# # bower install
# # npm install -g mocha
# # npm install request --save
# # npm install chai


# # sudo npm install npm@latest
# # echo 'installing npm *********************...'

# # npm install pm2 -g
# # echo 'installing pm2 *************************...'



# ############## CHEF dk in the instances digital_outline ###############
# https://kuldeeparya.wordpress.com/2015/10/25/how-to-set-up-install-chef-dk-on-ubuntu/
cd /home/ubuntu
sudo mkdir chef_DK && cd chef_DK && sudo wget https://packages.chef.io/files/stable/chefdk/1.3.40/ubuntu/16.04/chefdk_1.3.40-1_amd64.deb
sudo dpkg -i chefdk_1.3.40-1_amd64.deb

# ############## ENV CHEF vendor in the instances digital_outline_environment ###############

# sudo git clone https://github.com/Calliari/digital_outline_environment.git
# pull down new code
cd /home/ubuntu/digital_outline_environment
git pull
berks vendor cookbooks
sudo chef-client --local-mode --runlist 'recipe[node-server]'
sudo npm install pm2 -g

# ############## APP- UAT instances digital_outline ###############

sudo git clone https://github.com/Calliari/digital_outline.git
cd /home/ubuntu/digital_outline
git pull
sudo npm install
node app.js
echo 'lanching app.js in digital_outline directory ************....'

# ################ test in module digital_outline ###############
interactions with the users should get a single user on a /GET:
interactions with individual courses should show all courses of a type on /GET:

. /node_modules/.bin/mocha ./test/test-server.js 

# ################ test in module digital_outline ###############


