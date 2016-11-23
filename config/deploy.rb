set :application, 'wordshapes'
set :repo_url, 'https://github.com/clintonb/wordshapes.git'

branch = ENV['BRANCH'] || ENV['TAG'] || ENV['REVISION'] || :master
set :branch, branch


namespace :deploy do

  desc 'Restart application'
  task :restart do
    on roles(:app), in: :sequence, wait: 5 do
      # Your restart mechanism here, for example:
      # execute :touch, release_path.join('tmp/restart.txt')
    end
  end

  after :finishing, 'deploy:cleanup'

end
