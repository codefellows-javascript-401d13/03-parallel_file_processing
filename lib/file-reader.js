'use strict';

const fs = require('fs');

const readFiles = module.exports = function(file, callback) {
  if (file instanceof Array) {
    let results = [];
    file.forEach(function(ele, index, array) {
      fs.readFile(`${__dirname}/../data/${ele}`, function(err, data) {
        if (err) callback(err);
        let string = data.toString('hex', 0, 8);
        results.push(string);
        if (index == (array.length - 1)) callback(null, results);
      })
    });
  } else {
    callback(new Error('file array not found'));
  }
};
