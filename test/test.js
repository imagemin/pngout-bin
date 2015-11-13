/* eslint-env mocha */
'use strict';

var assert = require('assert');
var execFile = require('child_process').execFile;
var path = require('path');
var compareSize = require('compare-size');
var mkdirp = require('mkdirp');
var rimraf = require('rimraf');
var tmp = path.join(__dirname, 'tmp');

beforeEach(function (cb) {
	mkdirp(tmp, cb);
});

afterEach(function (cb) {
	rimraf(tmp, cb);
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
		if (err) {
			cb(err);
			return;
		}

		compareSize(src, dest, function (err, res) {
			if (err) {
				cb(err);
				return;
			}

			assert(res[dest] < res[src]);
			cb();
		});
	});
});
