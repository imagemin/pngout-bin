#!/usr/bin/env node
'use strict';
const {spawn} = require('child_process');
const pngout = require('.');

const input = process.argv.slice(2);

spawn(pngout, input, {stdio: 'inherit'})
	.on('exit', process.exit);
