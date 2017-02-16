'use strict';

const fs = require('fs');
const readFiles = require('./lib/file-reader.js')
// const filesToBeRead =[`${__dirname}/data/one.txt`, `${__dirname}/data/two.txt`, `${__dirname}/data/three.txt`];


//   filesToBeRead.forEach(function(files){
//     fs.readFile(files, function(err, data){
//       if (err) throw err;
//       var contents = data.toString('hex', 0, 8);
//       console.log(contents);
//     });
//   });
// };

readFiles.readEveryFile();
