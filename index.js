'use strict';

var BinWrapper = require('bin-wrapper');
var chalk = require('chalk');
var fs = require('fs');
var path = require('path');

/**
 * Initialize a new BinWrapper
 */

var bin = new BinWrapper()
  .src('https://raw.github.com/1000ch/node-pngout-bin/master/vendor/osx/pngout', 'darwin')
  .src('https://raw.github.com/1000ch/node-pngout-bin/master/vendor/linux/pngout', 'linux')
  .src('https://raw.github.com/1000ch/node-pngout-bin/master/vendor/freebsd/x86/pngout', 'freebsd', 'x86')
  .src('https://raw.github.com/1000ch/node-pngout-bin/master/vendor/freebsd/x64/pngout', 'freebsd', 'x64')
  .dest(path.join(__dirname, 'vendor'))
  .use(process.platform === 'win32' ? 'pngout.exe' : 'pngout');

/**
 * Only run check if binary doesn't already exist
 */

fs.exists(bin.use(), function (exists) {
  if (!exists) {
    var args = [
      path.join(__dirname, 'test/fixtures/test.png'),
      path.join(__dirname, 'test/fixtures/test-optimized.png')
    ];

    bin.run(args, function (err) {
      if (err) {
        return console.log(chalk.red('✗ pre-build test failed'));
      }

      console.log(chalk.green('✓ pre-build test passed successfully'));
    });
  }
});

/**
 * Module exports
 */

module.exports.path = bin.use();
