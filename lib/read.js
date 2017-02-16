'use strict';

const fs = require('fs');

module.exports = exports = {};

exports.getHexxed = [];

exports.returnHex = function(data){
  data.forEach(function(thing){
    console.log(thing);
  });
  //just added this...seems to be working but I'll need to run some tests
  console.log(exports.getHexxed);
  return exports.getHexxed;
};


exports.readInOrder = function(callback){
  fs.readFile(`${__dirname}/../data/one.txt`, function(err, data){
    if (err) throw err;
    var firstHex = data.toString('hex').substring(0,8);
    exports.getHexxed.push(firstHex);

    fs.readFile(`${__dirname}/../data/two.txt`, function(err, data){
      if (err) throw err;
      var secondHex = data.toString('hex').substring(0,8);
      exports.getHexxed.push(secondHex);

      fs.readFile(`${__dirname}/../data/three.txt`, function(err, data){
        if (err) throw err;
        var thirdHex = data.toString('hex').substring(0,8);
        exports.getHexxed.push(thirdHex);
        // console.log(exports.getHexxed);
        //this runs last!
        // callback(exports.getHexxed);
        exports.returnHex(exports.getHexxed);
      });
    });//end second enclosing readfile
  }); //end first enclosing readfile
};
