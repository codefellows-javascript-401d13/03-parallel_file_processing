'use strict';

const fs = require('fs');

module.exports = exports = {};

exports.fileReader = function() {
  fs.readFile(`${__dirname}/../data/one.txt`, function(err, data) {
    if (err) throw err;
    let binary = data.slice(0, 16);
    console.log(binary.toString());
    // return callback(null, binary.string());
  });
};
