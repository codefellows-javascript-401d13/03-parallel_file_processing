'use strict';

const fs = require('fs');

const fileReader = module.exports = function(pathArray, callback) {

var dataNum = [];

    fs.readFile(pathArray[0], function(err, data) {
      if (err) callback(err);
      dataNum.push(data.toString('hex', 0, 8));
      fs.readFile(pathArray[1], function(err, data) {
        if (err) callback(err);
        dataNum.push(data.toString('hex', 0, 8));
        fs.readFile(pathArray[2], function(err, data) {
          if (err) callback(err);
          dataNum.push(data.toString('hex', 0, 8));
          console.log(dataNum);
          callback(null, dataNum);

        });
      });
    });
  };
