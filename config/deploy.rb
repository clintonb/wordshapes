set :application, 'wordshapes'

set :scm, :git
set :repository, 'ssh://git@git.assembla.com/wordshapes.git'
set :branch, 'master'
set :branch, tag if exists?(:tag) # Deploy tag if it is passed on command line
set :deploy_via, :remote_cache
set :scm_verbose, true

set :user, 'ec2-user'
set :use_sudo, false
set :ssh_options, { :forward_agent => true }

role :web, 'wordshapes.clintonblackburn.com'
role :app, 'wordshapes.clintonblackburn.com'

after 'deploy:restart', 'deploy:cleanup'
