'use strict';

const fs = require('fs');

const fileReader = require('./lib/file-reader.js')

fileReader(`${__dirname}/./data/one.txt`, function(err, data) {
  if (err) throw err;
  console.log('one:', data.toString('hex', 0, 8));
});

fileReader(`${__dirname}/./data/two.txt`, function(err, data) {
  if (err) throw err;
  console.log('two:', data.toString('hex', 0, 8));
});

fileReader(`${__dirname}/./data/two.txt`, function(err, data) {
  if (err) throw err;
  console.log('three:', data.toString('hex', 0, 8));
});
