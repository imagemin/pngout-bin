# [node-pngout-bin](https://npmjs.org/package/pngout-bin)

[PNGOUT](http://pmt.sourceforge.net/pngout/) Node.js wrapper that optimize PNG images.

> PNGOUT optimizes the size of .PNG files losslessly. It uses the same deflate compressor I wrote for KZIP.EXE (see below). With the right options, it can often beat other programs by 5-10%.

[![Build Status](https://travis-ci.org/1000ch/node-pngout-bin.svg?branch=master)](https://travis-ci.org/1000ch/node-pngout-bin)
[![NPM version](https://badge.fury.io/js/pngout-bin.svg)](http://badge.fury.io/js/pngout-bin)
[![Dependency Status](https://david-dm.org/1000ch/node-pngout-bin.svg)](https://david-dm.org/1000ch/node-pngout-bin)
[![devDependency Status](https://david-dm.org/1000ch/node-pngout-bin/dev-status.svg)](https://david-dm.org/1000ch/node-pngout-bin#info=devDependencies)

## Install

```sh
$ npm install --save pngout-bin
```

## Usage

```js
var execFile = require('child_process').execFile;
var pngout = require('pngout-bin').path;

execFile(pngout, ['input.png', 'output.png', '-s0', '-k0', '-f0'], function (error) {
  if (error) {
    throw error;
  }

  console.log('Image minified');
});
```

## License

This is licensed under BSD.

PNGOUT license is [here](http://advsys.net/ken/utils.htm#pngoutkziplicense).
