# pngout-bin ![GitHub Actions Status](https://github.com/imagemin/pngout-bin/workflows/test/badge.svg?branch=master)

> [pngout](http://advsys.net/ken/util/pngout.htm) optimizes the size of PNG files losslessly

You probably want [`imagemin-pngout`](https://github.com/imagemin/imagemin-pngout) instead.


## Install

```
$ npm install --save pngout-bin
```


## Usage

```js
const {execFile} = require('child_process');
const pngout = require('pngout-bin');

execFile(pngout, ['input.png', 'output.png', '-s0', '-k0', '-f0'], err => {
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
