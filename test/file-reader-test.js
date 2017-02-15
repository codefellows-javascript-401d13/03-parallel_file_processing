'use strict';

const expect = require('chai').expect;
const fileReader = require('../lib/file-reader.js');

describe('File Reader Thing', function(){
  describe('with an improper file', function(){
    it('should return an error', function(done){
      fileReader(`${__dirname}/not-a-file.txt`, function(err){
        expect(err).to.be.an('error');
        done();
      });
    });
  });
  describe('with a proper file path', function() {
    it('should return the contents of file one', function(done) {
      fileReader(`${__dirname}/../data/one.txt`, function(err, data) {
        expect(err).to.equal(null);
        expect(data).to.be.a('string');
        expect(data).to.equal('file number one\n');
        done();
      });
    });
  });
  describe('with a proper file path', function() {
    it('should return the contents of file two', function(done) {
      fileReader(`${__dirname}/../data/two.txt`, function(err, data) {
        expect(err).to.equal(null);
        expect(data).to.be.a('string');
        expect(data).to.equal('file number two\n');
        done();
      });
    });
  });
  describe('with a proper file path', function() {
    it('should return the contents of file three', function(done) {
      fileReader(`${__dirname}/../data/three.txt`, function(err, data) {
        expect(err).to.equal(null);
        expect(data).to.be.a('string');
        expect(data).to.equal('file number three\n');
        done();
      });
    });
  });

});
