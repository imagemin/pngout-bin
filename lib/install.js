'use strict';

var bin = require('./');
var logSymbols = require('log-symbols');
var path = require('path');

/**
 * Install binary and check whether it works.
 * If the test fails, try to build it.
 */

var args = [
  path.join(__dirname, '../test/fixtures/test.png'),
  path.join(__dirname, '../test/fixtures/test-optimized.png')
];

bin.run(args, function (error) {
  if (error) {
    return console.log(logSymbols.warning + ' pre-build test failed');
  }

  console.log(logSymbols.success + ' pre-build test passed successfully!');
});
