# [node-pngout-bin](https://npmjs.org/package/pngout-bin)

## About

[PNGOUT](http://pmt.sourceforge.net/pngout/) Node.js wrapper that optimize PNG images.

> PNGOUT optimizes the size of .PNG files losslessly. It uses the same deflate compressor I wrote for KZIP.EXE (see below). With the right options, it can often beat other programs by 5-10%.

[![Build Status](https://travis-ci.org/1000ch/node-pngout-bin.png?branch=master)](https://travis-ci.org/1000ch/node-pngout-bin)
[![NPM version](https://badge.fury.io/js/pngout-bin.png)](http://badge.fury.io/js/pngout-bin)
[![Dependency Status](https://david-dm.org/1000ch/node-pngout-bin.png)](https://david-dm.org/1000ch/node-pngout-bin)
[![devDependency Status](https://david-dm.org/1000ch/node-pngout-bin/dev-status.png)](https://david-dm.org/1000ch/node-pngout-bin#info=devDependencies)

[![NPM](https://nodei.co/npm/pngout-bin.png)](https://nodei.co/npm/pngout-bin/)

## Install

```sh
$ npm install -g pngout-bin
```

## Usage with Node.js

```js
var execFile = require('child_process').execFile;
var pngoutPath = require('pngout-bin').path;

execFile(pngoutPath, ['-reduce', '-brute', 'dest.png'], function() {
  console.log('Image minified');
});
```

## License

This is licensed under BSD.
PNGOUT license is [here](http://advsys.net/ken/utils.htm#pngoutkziplicense).