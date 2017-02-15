'use-strict';

const fs = require('fs');

const fileReader = module.exports = function(file, callback) {
  fs.readFile(file, function(err, data) {
    if(err) return callback(err);
    var buffer = new Buffer(data);
    var hexData = buffer.toString('hex', 0, 8);

    return callback(null, hexData);
  });
};
