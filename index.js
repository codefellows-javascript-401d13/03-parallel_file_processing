'use strict';

const reader = require('./lib/file-reader.js').readFiles;

reader(['one.txt', 'two.txt', 'three.txt'], function(err, data) {
	if (err) console.error(err);
	console.log('index.js', data);
});
