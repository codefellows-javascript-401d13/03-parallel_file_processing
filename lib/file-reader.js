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

exports.readAllFiles = function() {
  exports.readSingleFile(`${__dirname}/../data/one.txt`, function(err, data) {
    if(err) throw err;
    console.log('This is one.txt: ', data);

    exports.readSingleFile(`${__dirname}/../data/two.txt`, function(err, data) {
      if(err) throw err;
      console.log('This is two.txt: ', data);

      exports.readSingleFile(`${__dirname}/../data/three.txt`, function(err, data) {
        if(err) throw err;
        console.log('This is three.txt: ', data);
      });
    });
  });
};
