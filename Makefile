install:
	npm i
brain-games:
	node bin/brain-games.js
publish: install
	npm publish --dry-run
lint:
	npx eslint .