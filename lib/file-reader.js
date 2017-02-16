'use strict';

const fs = require('fs');


module.exports = exports = {};

exports.readOneFile = function(file, callback) {
  fs.readFile(file, function(err, data) {
    if(err) return callback(err);
    var buffer = new Buffer(data);
    var hexStuff = buffer.toString('hex', 0, 8);

    return callback(null, hexStuff);
  });
};

exports.readEveryFile = function () {
  exports.readOneFile(`${__dirname}/../data/one.txt`, function (err, data){
    if (err) throw err;
    console.log('this is number one:', data);

    exports.readOneFile(`${__dirname}/../data/two.txt`, function (err, data){
      if (err) throw err;

      exports.readOneFile(`${__dirname}/../data/three.txt`, function (err, data){
        if (err) throw err;
      });
    });
  });
};
