const fs = require('fs');

// module.exports = exports = {};


const printOut = module.exports = function(textFiles, callback) {
  // const textFiles = [`${__dirname}/../data/one.txt`, `${__dirname}/../data/two.txt`, `${__dirname}/../data/three.txt`];

  var f1 = '';
  var f2 = '';
  var f3 = '';

  var logArray = [];
  fs.readFile(textFiles[0], function(err, data) {
    if (err) return callback(err);
    f1 = data.slice(0, 8).toString()
    logArray.push(f1);
    console.log(f1);
    fs.readFile(textFiles[1], function(err, data) {
      if (err) return callback(err);
      f2 = data.slice(0, 8).toString()
      logArray.push(f2);
      console.log(f2);
      fs.readFile(textFiles[2], function(err, data) {
        if (err) return callback(err);
        f3 = data.slice(0, 8).toString()
        logArray.push(f3);
        console.log(f3);
        return callback(null, logArray);
      });
    });
  });

};
