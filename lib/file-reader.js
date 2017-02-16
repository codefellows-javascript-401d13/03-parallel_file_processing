'use strict';

const fs = require('fs');
var fileArray = [];


const fileReader = module.exports = function(file, callback) {
  fs.readFile(file, function(err, data) {
    if(err) throw err;
    fileArray.push(data.toString('hex', 0, 8));
    fs.readFile(`${__dirname}/../data/two.txt`, function(err, data) {
      if(err) throw err;
      fileArray.push(data.toString('hex', 0, 8));
      fs.readFile(`${__dirname}/../data/three.txt`, function(err, data) {
        if(err) throw err;
        fileArray.push(data.toString('hex', 0, 8));
        return (null, fileArray);
      });
    });
  });
};
