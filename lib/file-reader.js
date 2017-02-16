'use strict';

const fs = require('fs');

const fileReader = module.exports = function(file1, file2, file3, callback){
  let resArr = [];
  fs.readFile(file1, function(err, data){
    if(err) return callback(err);
    var eightHexes = data.toString('hex')
                    .match(/.{1,2}/g)
                    .filter(function(ele, index){
                      return index <= 7;
                    }).join('');
    resArr.push(eightHexes);
    console.log(eightHexes);
    fs.readFile(file2, function(err, data){
      if(err) return callback(err);
      eightHexes = data.toString('hex')
                  .match(/.{1,2}/g)
                  .filter(function(ele, index){
                    return index <= 7;
                  }).join('');
      resArr.push(eightHexes);
      console.log(eightHexes);
      fs.readFile(file3, function(err, data){
        if(err) return callback(err);
        eightHexes = data.toString('hex')
                    .match(/.{1,2}/g)
                    .filter(function(ele, index){
                      return index <= 7;
                    }).join('');
        resArr.push(eightHexes);
        console.log(eightHexes);
        return callback(null, resArr);
      });
    });
  });
};
