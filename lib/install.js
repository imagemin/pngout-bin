import {fileURLToPath} from 'node:url';
import bin from './index.js';

const args = [
	fileURLToPath(new URL('../test/fixtures/test.png', import.meta.url)),
	fileURLToPath(new URL('../test/fixtures/test-optimized.png', import.meta.url)),
	'-s4',
	'-c6',
	'-y',
];

bin.run(args).then(() => {
	console.log('pngout pre-build test passed successfully');
}).catch(error => {
	console.error(error.stack);
});
