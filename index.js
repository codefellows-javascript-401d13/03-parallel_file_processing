'use strict';

const fileReader = require('./lib/read-file.js');

fileReader('one.txt', 'two.txt', 'three.txt', waitForIt);

function waitForIt(err, data){
  if(err) throw err;
  data.forEach(logArrayElements);
  function logArrayElements(element, i) {
    console.log(`file ${i} ${element}`);
  }
}



