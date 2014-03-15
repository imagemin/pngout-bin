'use strict';

var Bin = require('bin-wrapper');
var path = require('path');

var options = {
  name: 'pngout',
  bin: 'pngout',
  path: path.join(__dirname, '../vendor'),
  url: 'https://raw.github.com/1000ch/node-out-bin/master/vendor/pngout',
  src: 'http://static.jonof.id.au/dl/kenutils/pngout-20130221-darwin.tar.gz',
  buildScript: 'mv ./pngout ' + path.join(__dirname, '../vendor'),
  platform: {
    osx: {
      url: 'https://raw.github.com/1000ch/node-pngout-bin/master/vendor/osx/pngout'
    },
    linux: {
      url: 'https://raw.github.com/1000ch/node-pngout-bin/master/vendor/linux/pngout'
    }
  }
};
var bin = new Bin(options);

exports.bin = bin;
exports.options = options;
exports.path = bin.path;