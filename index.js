'use strict';

const fs = require('fs');
const fileReader = require('./lib/file-reader.js');


fileReader('./data/one.txt', callback);

 // TODO: I want this to send my file reader the first path and start it reading my text files, then get a array of results and log them here. 
