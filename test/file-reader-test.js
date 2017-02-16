'use strict';

const expect = require('chai').expect;
const fileReader = require('../lib/file-reader.js');

describe('File Reader Module', function(){
  describe('with an improper set of filepaths', function(){
    it('should return an error', function(done){
      fileReader('bad/path1', 'bad/path2', 'bad/path3', function(err){
        expect(err).to.be.an('error');
        done();
      });
    });
  });
  describe('with an improper 2nd & 3rd filepath', function(){
    it('should return an error', function(done){
      fileReader(`${__dirname}/data/one.txt`, 'bad/path2', 'bad/path3', function(err){
        expect(err).to.be.an('error');
        done();
      });
    });
  });
  describe('with an improper 3rd filepath', function(){
    it('should return an error', function(done){
      fileReader(`${__dirname}/../data/one.txt`, `${__dirname}/../data/two.txt`, 'bad/path3', function(err){
        expect(err).to.be.an('error');
        done();
      });
    });
  });
  describe('with all of the correct file paths', function(){
    it('should return all of the correct data', function(done){
      fileReader(`${__dirname}/../data/one.txt`, `${__dirname}/../data/two.txt`, `${__dirname}/../data/three.txt`, function(err, data){
        expect(data.length).to.equal(3);
        expect(data[0]).to.equal('427269616e206973');
        expect(data[1]).to.equal('546f6f2062616420');
        expect(data[2]).to.equal('486f706566756c6c');
        done();
      });
    });
  });
});
