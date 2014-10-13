'use strict';

var bin = require('./');
var logSymbols = require('log-symbols');
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
		console.log(logSymbols.error, err.message);
		return;
	}

	console.log(logSymbols.success + ' pre-build test passed successfully!');
});
