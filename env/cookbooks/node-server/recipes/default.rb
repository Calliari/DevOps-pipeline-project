# 
#
# Cookbook:: node-server
# Recipe:: default
#
# Copyright:: 2017, The Authors, All Rights Reserved.

include_recipe 'git'
include_recipe 'apt'
include_recipe 'nodejs'
nodejs_npm 'pm2'
nodejs_npm 'bower'


package 'nginx'


package 'nginx' do 
	action :install
end

service 'nginx' do 
	supports status: true, restart: true, reload: true
	action [:enable, :start]
end

template '/etc/nginx/sites-available/default' do
	source 'nginx.default.erb'
	notifies :reload, "service[nginx]"
end

# https://github.com/customink-webops/magic_shell
magic_shell_environment 'MONGODB_URI' do
  value 'mongodb://192.168.10.102/outliners'
end






execute 'nodejs-sources' do
  command 'curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -'
end

# package 'nodejs' do
#   # version '6.10.0'
# end

execute 'npm install pm2' do
  command 'sudo npm install pm2 -g'
end

