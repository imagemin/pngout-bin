'use strict';
const path = require('path');
const test = require('ava');
const execa = require('execa');
const tempy = require('tempy');
const compareSize = require('compare-size');
const pngout = require('..');

test('minify a PNG', async t => {
	const tmp = tempy.directory();
	const src = path.join(__dirname, 'fixtures/test.png');
	const dest = path.join(tmp, 'test.png');
	const args = [
		src,
		dest,
		'-s4',
		'-c6',
		'-y'
	];

	await execa(pngout, args);
	const res = await compareSize(src, dest);

	t.true(res[dest] < res[src]);
});
