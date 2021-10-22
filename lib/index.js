import fs from 'node:fs';
import process from 'node:process';
import {fileURLToPath} from 'node:url';
import BinWrapper from 'bin-wrapper';

const pkg = JSON.parse(fs.readFileSync(new URL('../package.json', import.meta.url)));
const url = `https://raw.github.com/imagemin/pngout-bin/v${pkg.version}/vendor/`;

const binWrapper = new BinWrapper()
	.src(`${url}osx/pngout`, 'darwin')
	.src(`${url}linux/x86/pngout`, 'linux', 'x86')
	.src(`${url}linux/x64/pngout`, 'linux', 'x64')
	.src(`${url}freebsd/x86/pngout`, 'freebsd', 'x86')
	.src(`${url}freebsd/x64/pngout`, 'freebsd', 'x64')
	.src(`${url}win32/pngout.exe`, 'win32')
	.dest(fileURLToPath(new URL('../vendor', import.meta.url)))
	.use(process.platform === 'win32' ? 'pngout.exe' : 'pngout');

export default binWrapper;
