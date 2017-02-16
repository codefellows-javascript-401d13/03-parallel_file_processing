'use strict';

const fs = require('fs');
const files = [`${__dirname}/data/one.txt`, `${__dirname}/data/two.txt`, `${__dirname}/data/three.txt`];
var resultsArray = [];

const logThem = module.exports = function() {
  function fetchFiles(files, iterator) {
    var doneCount = 0;
    function isComplete() {
      doneCount += 1;
      if(doneCount === files.length) {
        console.log(resultsArray);
      }
    }
    for (let i = 0; i < files.length; i++) {
      iterator(files[i], isComplete);
    }
  }

  function readFiles(file, cb) {
    fs.readFile(file, function(err, data) {
      if (err) return err;
      let filename = file.slice(file.lastIndexOf('/') + 1 , file.length + 1);
      let fileorder = files.indexOf(file);
      resultsArray[fileorder] = `first eight bytes of ${filename}: ${data.toString('hex', 0, 8)}`;
      cb();
    });
  }

  fetchFiles(files, readFiles);
}
