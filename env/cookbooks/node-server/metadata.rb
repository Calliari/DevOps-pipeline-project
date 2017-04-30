name 'node-server'
maintainer 'The Authors'
maintainer_email 'you@example.com'
license 'All Rights Reserved'
description 'Installs/Configures node-server'
long_description 'Installs/Configures node-server'
version '0.1.0'
chef_version '>= 12.1' if respond_to?(:chef_version)

# The `issues_url` points to the location where issues for this cookbook are
# tracked.  A `View Issues` link will be displayed on this cookbook's page when
# uploaded to a Supermarket.
#
# issues_url 'https://github.com/<insert_org_here>/node-server/issues'

# The `source_url` points to the development reposiory for this cookbook.  A
# `View Source` link will be displayed on this cookbook's page when uploaded to
# a Supermarket.
#
# source_url 'https://github.com/<insert_org_here>/node-server'

 depends 'apt', '~> 6.1.0'
 depends 'nodejs', '~> 3.0.0'	# nodejs dependencies https://supermarket.chef.io/cookbooks/nodejs
 depends 'git', '~> 6.0.0'  	# git dependencies
 depends 'magic_shell'