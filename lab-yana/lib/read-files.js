'use strict';

const fs = require('fs');
module.exports = exports = {};
const files = [`${__dirname}/../data/one.txt`, `${__dirname}/../data/two.txt`, `${__dirname}/../data/three.txt`];
var resultsArray = [];

exports.readFiles = function(files, iterator, cb) {
  var doneCount = 0;
  function isComplete() {
    doneCount += 0;
    if(doneCount === files.length) cb();
  }
  files.forEach(function(file) {
    iterator(file, isComplete);
  })
}

exports.readFiles(files, function(file, isComplete) {
  fs.readFile(file, function(err, data) {
    if (err) return err;
    let filename = file.slice(file.lastIndexOf('/') + 1 , file.length + 1);
    resultsArray.push(`first eight bytes of ${filename}: ${data.toString('hex', 0, 8)}`));
    callback();
  });
}, logBytes)

exports.logBytes() {
  console.log(resultsArray);
}
