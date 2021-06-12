'use strict';
const path = require('path');
const bin = require('.');

const args = [
	path.join(__dirname, '../test/fixtures/test.png'),
	path.join(__dirname, '../test/fixtures/test-optimized.png'),
	'-s4',
	'-c6',
	'-y'
];

bin.run(args).then(() => {
	console.log('pngout pre-build test passed successfully');
}).catch(error => {
	console.error(error.stack);
});
