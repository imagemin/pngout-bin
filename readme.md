# pngout-bin [![Build Status](http://img.shields.io/travis/imagemin/pngout-bin.svg?style=flat)](https://travis-ci.org/imagemin/pngout-bin)

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
