'use strict';

const reader = require(`${__dirname}/lib/read-files.js`);

reader.fetchFiles(reader.files, reader.readFiles, reader.logThem);
