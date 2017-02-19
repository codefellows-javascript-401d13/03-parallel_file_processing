'use-strict';

const fs = require('fs');

module.exports = exports = {};

exports.readSingleFile = function(file, callback) {
  fs.readFile(file, function(err, data) {
    if(err) return callback(err);
    var buffer = new Buffer(data);
    var hexData = buffer.toString('hex', 0, 8);

    return callback(null, hexData);
  });
};

var paths = [
  `${__dirname}/../data/one.txt`,
  `${__dirname}/../data/two.txt`,
  `${__dirname}/../data/three.txt`
];

exports.readAllFiles = function(pathArray, callback) {
  var results = [];
  fs.readFile(pathArray[0], function(err, data){
    if(err) return callback(err);
    results.push(data.toString('hex', 0, 8));

    fs.readFile(pathArray[1], function(err, data){
      if(err) return callback(err);
      results.push(data.toString('hex', 0, 8));

      fs.readFile(pathArray[2], function(err, data){
        if(err) return callback(err);
        results.push(data.toString('hex', 0, 8));
        callback(null, results);
      });
    });
  });
};

// exports.readAllFiles(paths, function(err, data){
//   console.log('data', data);
// });
