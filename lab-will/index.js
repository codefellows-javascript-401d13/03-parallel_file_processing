'use strict';

const fs = require('fs');

const files = ['one', 'two', 'three'];

for (var i = 0; i < files.length; i++) {

  fs.readFile(`${__dirname}/data/${files[i]}.txt`, function(err, data) {
    if(err) throw err;
    var hexArray = data.toJSON().data;
    console.log('===============');
    for (var i = 0; i < 8; i++) {
      var str = data.readUInt8(i);
      console.log(str.toString(16));
    }
  })
}
