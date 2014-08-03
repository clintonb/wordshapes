requirements:
	bundle install
	npm install

deploy: requirements
	bundle exec cap production deploy

test: requirements
	./node_modules/karma/bin/karma start --single-run
