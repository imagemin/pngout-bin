/*global afterEach,beforeEach,it*/
'use strict';

var assert = require('assert');
var execFile = require('child_process').execFile;
var path = require('path');
var compareSize = require('compare-size');
var mkdirp = require('mkdirp');
var rimraf = require('rimraf');
var tmp = path.join(__dirname, 'tmp');

beforeEach(function () {
	mkdirp.sync(tmp);
});

afterEach(function () {
	rimraf.sync(tmp);
});

it('minify a PNG', function (cb) {
	var src = path.join(__dirname, 'fixtures/test.png');
	var dest = path.join(tmp, 'test.png');
	var args = [
		src,
		dest,
		'-s4',
		'-c6',
		'-y'
	];

	execFile(require('../'), args, function (err) {
		assert(!err);

		compareSize(src, dest, function (err, res) {
			assert(!err);
			assert(res[dest] < res[src]);
			cb();
		});
	});
});
