'use strict';

var execFile = require('child_process').execFile;
var path = require('path');
var compareSize = require('compare-size');
var test = require('ava');
var tmp = path.join(__dirname, 'tmp');

test('minify a PNG', function (t) {
	t.plan(3);

	var src = path.join(__dirname, 'fixtures/test.png');
	var dest = path.join(tmp, 'test.png');
	var args = [
		src,
		dest,
		'-s4',
		'-c6',
		'-y'
	];

	execFile(require('../').path, args, function (err) {
		t.assert(!err, err);

		compareSize(src, dest, function (err, res) {
			t.assert(!err, err);
			t.assert(res[dest] < res[src]);
		});
	});
});
