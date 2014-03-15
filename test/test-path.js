'use strict';

var assert = require('assert');
var execFile = require('child_process').execFile;
var exec = require('child_process').exec;
var fs = require('fs');
var path = require('path');

describe('pngout()', function () {
  this.timeout(0);

  after(function () {
    fs.unlinkSync('test/fixtures/minified.png');
  });

  it('should return path to pngout binary', function (callback) {
    var binPath = require('../lib/pngout').path;

    execFile(binPath, ['-v'], function (err, stdout, stderr) {
      assert(stdout.toString().indexOf('pngout') !== -1);
      callback();
    });
  });

  it('should successfully proxy pngout', function (callback) {
    var binPath = path.join(__dirname, '../bin/pngout.js');

    execFile('node', [binPath, '-v'], function (err, stdout, stderr) {
      assert(stdout.toString().indexOf('pngout') !== -1);
      callback();
    });
  });

  it('should minify a .png', function (callback) {
    var binPath = path.join(__dirname, '../bin/pngout.js');
    var args = [
      '-s0',
      '-k0',
      '-f0',
      path.join(__dirname, 'fixtures', 'test.png'),
      path.join(__dirname, 'fixtures', 'minified.png')
    ];

    exec('node ' + [binPath].concat(args).join(' '), function () {
      var actual = fs.statSync('test/fixtures/minified.png').size;
      var original = fs.statSync('test/fixtures/test.png').size;
      assert(actual < original);
      callback();
    });
  });
});