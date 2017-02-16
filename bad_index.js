'use strict';

const fs = require('fs');

var firstTxt = fs.readFileSync(`${__dirname}/data/one.txt`);
// fs.readFileSync(`${__dirname}/data/one.txt`);
//   , function(err, data){
//   if (err) throw err;
//   console.log('one.txt:',data.toString('hex').substring(0,8));
// });
var secondTxt = fs.readFileSync(`${__dirname}/data/two.txt`);
// fs.readFileSync(`${__dirname}/data/two.txt`);
//   , function(err, data){
//   if (err) throw err;
//   console.log('two.txt: ', data.toString('hex').substring(0,8));
// });
var thirdTxt = fs.readFileSync(`${__dirname}/data/three.txt`);
// fs.readFileSync(`${__dirname}/data/three.txt`);
//   , function(err, data){
//   if (err) throw err;
//   console.log('three.txt:', data.toString('hex').substring(0,8));
// });
console.log(firstTxt.toString('hex').substring(0,8));
console.log(secondTxt.toString('hex').substring(0,8));
console.log(thirdTxt.toString('hex').substring(0,8));
