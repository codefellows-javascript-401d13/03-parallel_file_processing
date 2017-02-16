'use strict';

const fs = require('fs');

module.exports = exports = {};

exports.readFiles = function(file, callback) {
  file.map(function(ele) {
    fs.readFile(`${__dirname}/../data/${ele}`, function(err, data) {
      if (err) return callback(err);
      return callback(null, data);
    });
  });
};

exports.handleData = function(err, data) {
  if (err) throw err;
  let binary = data.slice(0, 15);
  let string = binary.toString();
  console.log(string);
  return string;
};
