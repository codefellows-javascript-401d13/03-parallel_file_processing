'use strict';

const fs = require('fs');

const readFile = module.exports = function(file, callback) {
  fs.readFile(file, function(err, data) {
    if(err) throw callback(err);
    console.log(data.toString('hex', 0, 8));
    return callback(null, data.toString());
  });
};
