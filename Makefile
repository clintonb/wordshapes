requirements:
	bundle install
	yarn install

deploy:
	bundle exec cap production deploy

test:
	./node_modules/karma/bin/karma start --single-run
