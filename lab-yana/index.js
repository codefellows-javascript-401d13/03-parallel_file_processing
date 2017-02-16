'use strict';

const fs = require('fs');
module.exports = exports = {};
exports.files = [`${__dirname}/data/one.txt`, `${__dirname}/data/two.txt`, `${__dirname}/data/three.txt`];

exports.fetchFiles = function(files, iterator) {
    var resultsArray = [];
    var doneCount = 0;
    function isComplete(err, data) {
      if (err) throw err;
      doneCount += 1;
      if(doneCount === files.length) {
        console.log(data);
      }
    }
    for (let i = 0; i < files.length; i++) {
      iterator(files[i], resultsArray, isComplete);
    }
  }

exports.readFiles = function(file, resultsArray, cb) {
  fs.readFile(file, function(err, data) {
    if (err) return cb(err);
    let filename = file.slice(file.lastIndexOf('/') + 1 , file.length + 1);
    let fileorder = exports.files.indexOf(file);
    resultsArray[fileorder] = `first eight bytes of ${filename}: ${data.toString('hex', 0, 8)}`;
    cb(null, resultsArray);
  });
}

exports.fetchFiles(exports.files, exports.readFiles);
