'use strict';

// const dir = require('./lib/dir-reader.js').dataFiles;
const reader = require('./lib/file-reader.js').readFiles;
const handler = require('./lib/file-reader.js').handleData;

reader(['one.txt', 'two.txt', 'three.txt'], handler);
