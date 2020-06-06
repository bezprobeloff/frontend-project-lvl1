install:
	npm i
brain-games:
	node bin/brain-games.js
publish:
	npm publish --dry-run
eslint:
	npx eslint bin/*