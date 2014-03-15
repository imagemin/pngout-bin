'use strict';

var assert = require('assert');
var Bin = require('bin-wrapper');
var fs = require('fs');
var options = require('../lib/pngout').options;
var path = require('path');

describe('pngout.build()', function () {
  it('should rebuild the pngout binaries', function (callback) {
    this.timeout(false);
    var bin = new Bin(options);

    bin.path = path.join(__dirname, '../vendor', bin.bin);
    bin.buildScript = 'mv ./pngout ' + path.join(__dirname, '../vendor');

    bin.build(function () {
      var origCTime = fs.statSync(bin.path).ctime;
      var actualCTime = fs.statSync(bin.path).ctime;

      assert(actualCTime !== origCTime);
      callback();
    });
  });
});