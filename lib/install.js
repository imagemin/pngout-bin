'use strict';

var bin = require('./');
var log = require('imagemin-log');
var path = require('path');

/**
 * Install binary and check whether it works
 * If the test fails, try to build it
 */

var args = [
	path.join(__dirname, '../test/fixtures/test.png'),
	path.join(__dirname, '../test/fixtures/test-optimized.png'),
	'-s4',
	'-c6',
	'-y',
];

bin.run(args, function (err) {
	if (err) {
		log.error(err.stack);
		return;
	}

	log.success('pngout pre-build test passed successfully');
});
