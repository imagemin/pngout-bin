'use strict';
const path = require('path');
const log = require('logalot');
const bin = require('.');

const args = [
	path.join(__dirname, '../test/fixtures/test.png'),
	path.join(__dirname, '../test/fixtures/test-optimized.png'),
	'-s4',
	'-c6',
	'-y'
];

bin.run(args).then(() => {
	log.success('pngout pre-build test passed successfully');
}).catch(error => {
	log.error(error.stack);
});
