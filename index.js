'use-strict';

const fileReader = require('./lib/file-reader.js');

fileReader(`${__dirname}/data/one.txt`, function(err, data) {
  if(err) throw err;
  console.log('This is one.txt: ', data);

  fileReader(`${__dirname}/data/two.txt`, function(err, data) {
    if(err) throw err;
    console.log('This is two.txt: ', data);

    fileReader(`${__dirname}/data/three.txt`, function(err, data) {
      if(err) throw err;
      console.log('This is three.txt: ', data);
    });
  });
});
