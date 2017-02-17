'use strict';

const fs = require('fs');

const fileReader = module.exports = function(pathArray, callback) {
  var fileArray = [];

  fs.readFile(pathArray[0], function(err, data) {
    if(err) return callback(err);
    fileArray.push(data.toString('hex', 0, 8));
    fs.readFile(pathArray[1], function(err, data) {
      if(err) return callback(err);
      fileArray.push(data.toString('hex', 0, 8));
      fs.readFile(pathArray[2], function(err, data) {
        if(err) return callback(err);
        fileArray.push(data.toString('hex', 0, 8));
        console.log('my read file result:', fileArray);
        return callback(null, fileArray);
      });
    });
  });
};
