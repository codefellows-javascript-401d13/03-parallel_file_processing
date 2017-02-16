'use strict';

const fs = require('fs');

module.exports = function fileLogger(files, callback) {
  let resultArray = files.map(function(file){
    return {
      path: file,
    };
  });

  let filterBufferHex = function(bufferObj) {
    return bufferObj.toString('hex', 0, 8);
  };

  for(let i=0; i < files.length; i++) {
    let readFile = files[i];
    fs.readFile(readFile, function(err, data) {
      if (err) return callback(err);
      resultArray[files.indexOf(readFile)].result = filterBufferHex(data);
      if (resultArray.filter(function(file){
        return Object.keys(file).includes('result');
      }).length === files.length) {
        return callback(null, resultArray);
      }
    });
  }
};
