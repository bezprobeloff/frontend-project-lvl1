install:
	npm i
brain-games:
	node bin/brain-games.js
brain-even:
	node bin/brain-even.js
publish: install
	npm publish --dry-run
lint:
	npx eslint .