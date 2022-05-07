import path from 'node:path';
import {fileURLToPath} from 'node:url';
import test from 'ava';
import {execa} from 'execa';
import {temporaryDirectory} from 'tempy';
import compareSize from 'compare-size';
import pngout from '../index.js';

test('minify a PNG', async t => {
	const temporary = temporaryDirectory();
	const src = fileURLToPath(new URL('fixtures/test.png', import.meta.url));
	const dest = path.join(temporary, 'test.png');
	const args = [
		src,
		dest,
		'-s4',
		'-c6',
		'-y',
	];

	await execa(pngout, args);
	const result = await compareSize(src, dest);

	t.true(result[dest] < result[src]);
});
