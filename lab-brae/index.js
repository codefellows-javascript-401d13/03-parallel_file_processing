'use strict';

var buffs = [];

const textReader = require('../lib/text-reader.js');

textReader('./data/one.txt', function(err, data) {
  var buffer1 = Buffer.from(data).toString('hex').substring(0, 7);
  console.log(buffer1, data);
  buffs.push(buffer1);

  textReader('./data/two.txt', function(err, data) {
    var buffer2 = Buffer.from(data).toString('hex').substring(0, 7);
    console.log(buffer2, data);
    buffs.push(buffer2);

    textReader('./data/three.txt', function(err, data) {
      var buffer3 = Buffer.from(data).toString('hex').substring(0, 7);
      console.log(buffer3, data);
      buffs.push(buffer3);
    });
  });
});
