'use strict';

const fileReader = require('./lib/file-reader.js');

fileReader([`${__dirname}/data/one.txt`, `${__dirname}/data/two.txt`, `${__dirname}/data/three.txt`], function (err, result){
  if (err) throw err;
  console.log(result);
});
