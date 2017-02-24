'use strict';

const files = require('./lib/read.js');
const filesPaths = [`${__dirname}/data/one.txt`, `${__dirname}/data/two.txt`, `${__dirname}/data/three.txt`]

var printOut = function(err, files) {
  console.log(files)
};


files(filesPaths, printOut);
