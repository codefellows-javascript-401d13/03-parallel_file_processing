const fs = require('fs');

const printOut = module.exports = function(filesPaths, callback) {

  var f1 = '';
  var f2 = '';
  var f3 = '';

  fs.readFile(filesPaths[0], function(err, data) {
    if (err) return callback (err);
    f1 = data.slice(0, 8).toString('hex')

    fs.readFile(filesPaths[1], function(err, data) {
      if (err) return callback (err);
      f2 = data.slice(0, 8).toString('hex')

      fs.readFile(filesPaths[2], function(err, data) {
        if (err) return callback (err);
        f3 = data.slice(0, 8).toString('hex')

        var files = `1 - ${f1}\n2 - ${f2}\n3 - ${f3}\n`

        return callback(null, files);
      });
    });
  });

};
