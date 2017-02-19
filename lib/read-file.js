'use strict';

const fs = require('fs');
const resultsArray = [];



module.exports = function(file1, file2, file3, callback){

  fs.readFile(`${__dirname}/../data/${file1}`, function(err,data){
    if (err) return callback(err);

    var first = data.toString('hex').substring(0,8);
    resultsArray.push(first);
    fs.readFile(`${__dirname}/../data/${file2}`, function(err,data){
      if (err) return callback(err);
      var second = data.toString('hex').substring(0,8);
      resultsArray.push(second);
      fs.readFile(`${__dirname}/../data/${file3}`, function(err,data){
        if (err) return callback(err);
        var third = data.toString('hex').substring(0,8);
        resultsArray.push(third);
        return callback(null, resultsArray);
      });
    });
  });
};
