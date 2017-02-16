'use strict';
var box = [];

exports.box = box;
// const fs = require('fs');
const fileReader = require('./lib/file-reader.js');

fileReader('./data/one.txt', function(err, data) {
  var buff1 = Buffer.from(data).toString('hex').substring(0,8);
  console.log(buff1, data);
  box.push(buff1);
  fileReader('./data/two.txt', function(err, data) {
    var buff2 = Buffer.from(data).toString('hex').substring(0,8);
    console.log(buff2, data);
    box.push(buff2);
    fileReader('./data/three.txt', function(err, data) {
      var buff3 = Buffer.from(data).toString('hex').substring(0,8);
      console.log(buff3, data);
      box.push(buff3);
      console.log(box );
    });
  });
});
