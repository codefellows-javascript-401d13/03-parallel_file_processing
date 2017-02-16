'use strict';

const fs = require('fs');

const fileLogger = module.exports = function(files, callback) {
  let resultArray = files.map(function(file){
    return {
      path: file,
    };
  });

  let filterBufferHex = function(file) {
    return file.toString('hex', 0, 8);
  };

  for(let i=0; i < files.length; i++) {
    let readFile = files[i];
    fs.readFile(readFile, function(err, data) {
      if (err) throw err;
      resultArray[files.indexOf(readFile)].result = data;
      if (resultArray.filter(function(file){
        return Object.keys(file).includes('result');
      }).length === files.length) {
        resultArray.forEach(function(file) {
          callback(`File '${file.path.substr(file.path.lastIndexOf('/') + 1)}': ${filterBufferHex(file.result)}`);
        });
      }
    });
  }
};
