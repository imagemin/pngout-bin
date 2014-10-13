'use strict';

var execFile = require('child_process').execFile;
var fs = require('fs');
var path = require('path');
var test = require('ava');
var tmp = path.join(__dirname, 'tmp');

test('minify a PNG', function (t) {
	t.plan(4);

	var args = [
		path.join(__dirname, 'fixtures/test.png'),
		path.join(tmp, 'test.png'),
		'-s4',
		'-c6',
		'-y'
	];

	execFile(require('../').path, args, function (err) {
		t.assert(!err);

		fs.stat(path.join(__dirname, 'fixtures/test.png'), function (err, a) {
			t.assert(!err);

			fs.stat(path.join(tmp, 'test.png'), function (err, b) {
				t.assert(!err);
				t.assert(b.size < a.size);
			});
		});
	});
});
