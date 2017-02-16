'use strict';

const fs = require('fs');

const files = ['one', 'two', 'three'];

var readFiles = function () {
  var test = [];
  for (var k = 0; k < files.length; k++) {
    fs.readFile(`${__dirname}/../data/${files[k]}.txt`, function(err, data) {
      if(err) throw err;
      var hexArray = [];
      for (var i = 0; i < 8; i++) {
        var str = data.readUInt8(i);
        // console.log(str.toString(16));
        hexArray[i] = str.toString(16);
      }
      console.log(hexArray);
      console.log('==================================================');

    })
  }
}

readFiles();
