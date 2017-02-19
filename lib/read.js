'use strict';

const fs = require('fs');

module.exports = exports = {};

exports.returnHex = function(data){
  console.log(data);
  return data;
};

exports.readInOrder = function(callback){
  var getHexxed = [];
  fs.readFile(`${__dirname}/../data/one.txt`, function(err, data){
    if (err) throw err;
    var firstHex = data.toString('hex').substring(0,8);
    getHexxed.push(firstHex);

    fs.readFile(`${__dirname}/../data/two.txt`, function(err, data){
      if (err) throw err;
      var secondHex = data.toString('hex').substring(0,8);
      getHexxed.push(secondHex);

      fs.readFile(`${__dirname}/../data/three.txt`, function(err, data){
        if (err) throw err;
        var thirdHex = data.toString('hex').substring(0,8);
        getHexxed.push(thirdHex);
        callback(getHexxed);
      });
    });//end second enclosing readfile
  }); //end first enclosing readfile
};
