'use strict';

var binCheck = require('bin-check');
var execFile = require('child_process').execFile;
var fs = require('fs');
var mkdir = require('mkdirp');
var path = require('path');
var rm = require('rimraf');
var test = require('ava');
var tmp = path.join(__dirname, 'tmp');

test('minify a PNG', function (t) {
	t.plan(6);

	var args = [
		path.join(__dirname, 'fixtures/test.png'),
		path.join(__dirname, 'tmp/test.png'),
		'-s0'
	];

	mkdir(tmp, function (err) {
		t.assert(!err);

		execFile(require('../').path, args, function (err) {
			t.assert(!err);

			fs.stat(path.join(__dirname, 'fixtures/test.png'), function (err, a) {
				t.assert(!err);

				fs.stat(path.join(tmp, 'test.png'), function (err, b) {
					t.assert(!err);
					t.assert(b.size < a.size);

					rm(tmp, function (err) {
						t.assert(!err);
					});
				});
			});
		});
	});
});

test('return path to binary and verify that it is working', function (t) {
	t.plan(4);

	var args = [
		path.join(__dirname, 'fixtures/test.png'),
		path.join(__dirname, 'tmp/test.png'),
		'-s0'
	];

	mkdir(tmp, function (err) {
		t.assert(!err);

		binCheck(require('../').path, args, function (err, works) {
			t.assert(!err);
			t.assert(works);

			rm(tmp, function (err) {
				t.assert(!err);
			});
		});
	});
});
