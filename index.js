'use strict';

const fileLogger = require('./lib/filelogger.js');

fileLogger([`${__dirname}/data/one.txt`, `${__dirname}/data/two.txt`, `${__dirname}/data/three.txt`], function(result) {
  console.log(result);
});
