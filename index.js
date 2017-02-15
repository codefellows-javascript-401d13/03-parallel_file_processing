'use strict';

const fs = require('fs');
const filesToBeRead =[`${__dirname}/data/one.txt`, `${__dirname}/data/two.txt`, `${__dirname}/data/three.txt`];

module.exports = function readFiles(){
  filesToBeRead.forEach(function(files){
    fs.readFile(files, function(err, data){
      if (err) throw err;
      return data.toString('utf8', 0, 8);
    });
  });
};
