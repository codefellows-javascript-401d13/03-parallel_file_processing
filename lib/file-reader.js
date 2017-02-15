'use strict';

const fs = require('fs');

module.exports = exports = {};

exports.fileReader = function(file, callback) {
  fs.readFile(file, function(err, data) {
    if (err) return callback(err);
    let binary = data.slice(0, 16);
    console.log(binary.toString());
    return callback(null, binary.string());
  });
};
