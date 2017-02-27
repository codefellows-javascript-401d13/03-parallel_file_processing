'use strict';

const fs = require('fs');

module.exports = exports = {};

// exports.readFiles = function(file, callback) {
//   if (file instanceof Array) {//linter wouldn't let me use (! instanceof)
//     let results = [];
//     file.map(function(ele) {
//       fs.readFile(`${__dirname}/../data/${ele}`, function(err, data) {
//         if (err) return callback(err);
//         let string = data.toString('hex').substring(0, 8);
//         results.push(string);
//         console.log('inside readfile', results);
//       });
//       console.log('inside map:', results);
//     });
//     console.log('inside if:', results);
//     return callback(null, results);
//   } else {
//     throw new Error('file name array not found');
//   }
// };

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

exports.readFiles = function(file, callback) {
  if (file instanceof Array) {
    let results = [];
    file.forEach(function(ele, index, array) {
      fs.readFile(`${__dirname}/../data/${ele}`, function(err, data) {
        if (err) callback(err);
        let string = data.toString('hex').substring(0, 8);
        results.push(string);
        if (index == (array.length - 1)) callback(null, results);
      })
    });
  } else {
    callback(new Error('file array not found'));
  }
};
