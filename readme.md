# pngout-bin ![GitHub Actions Status](https://github.com/imagemin/pngout-bin/workflows/test/badge.svg?branch=main)

> [pngout](http://advsys.net/ken/util/pngout.htm) optimizes the size of PNG files losslessly

You probably want [`imagemin-pngout`](https://github.com/imagemin/imagemin-pngout) instead.


## Install

```
$ npm install --save pngout-bin
```


## Usage

```js
import {execFile} from 'node:child_process';
import pngout from 'pngout-bin';

execFile(pngout, ['input.png', 'output.png', '-s0', '-k0', '-f0'], error => {
	console.log('Image minified!');
});
```


## CLI

```
$ npm install --global pngout-bin
```

```
$ pngout --help
```


## License

MIT © [Imagemin](https://github.com/imagemin)
