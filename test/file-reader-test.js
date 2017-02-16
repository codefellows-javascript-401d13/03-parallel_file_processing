'use strict';

const expect = require('chai').expect;
const fileReader = require('../lib/file-reader.js');
const box = require('box');

describe('File Reader Module', function(){
  describe('with an impropper filepath', function(){
    it('should return an error', function(done){
      fileReader(`${__dirname}/not-a-file.txt`, function(err){
        expect(err).to.be.an('error');
        done();
      });
    });
    it('should log the hex values in order', function(done){
      // TODO: test for logs in correct order
      // expect(box).to.equal([]);
      //
      done();
    });
  });
  describe('with a propper file path', function(){
    it('should return the contents of the file', function(done){
      fileReader(`${__dirname}/../data/one.txt`, function(err, data){
        expect(err).to.equal(null);
        expect(data).to.equal('this is the first file\r\n');
        done();
      });
    });
  });
});
