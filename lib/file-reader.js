'use strict';

const fs = require('fs');

module.exports = exports = {};

exports.readFiles = function(file, callback) {
  if (file instanceof Array) {//linter wouldn't let me use (! instanceof)
    file.map(function(ele) {
      fs.readFile(`${__dirname}/../data/${ele}`, function(err, data) {
        if (err) return callback(err);
        let string = data.toString('hex').substring(0, 8);
        console.log(string);
        return callback(null, string);
      });
    });
  } else {
    throw new Error('file name array not found');
  }
};

// exports.readFiles = function(file, callback) {
//   if (file instanceof Array) {//linter wouldn't let me use (! instanceof)
//     let fileResults = file.reduce(function(acc, ele) {
//       fs.readFile(`${__dirname}/../data/${ele}`, function(err, data) {
//         if (err) throw err;
//         let string = data.toString('hex').substring(0, 8);
//         acc.push(string);
//         return acc;
//       });
//     }, []);
//     // callback(null, fileResults);
//     console.log(fileResults);
//   } else {
//     throw new Error('file name array not found');
//   }
// };
