'use strict';

const expect = require('chai').expect;
const readFile = require('../lib/read-file.js');

describe('Reading the data files', function(){

  describe('inproper file path', function(){
    it('should return an error', function(done) {
      readFile(`${__dirname}/fake-file.txt`, function(err){
        expect(err).to.be.an('error');
        done();
      });
    });
  });

  describe('one.txt', function() {
    it('should return content from one.txt', function(done) {
      readFile(`${__dirname}/../data/one.txt`, function(err, data) {
        expect(err).to.equal(null);
        expect(data).to.be.a('string');
        expect(data).to.be.equal('The words in the one file\n')
        done();
      });
    });
  });

  describe('two.txt', function(){
    it('should return content from two.txt', function(done){
      readFile(`${__dirname}/../data/two.txt`, function(err, data){
        expect(err).to.equal(null);
        expect(data).to.be.a('string');
        expect(data).to.be.equal('The words in the two file\n')
        done();
      });
    });
  });

  describe('three.txt', function() {
    it('should return the content from three.txt', function(done){
      readFile(`${__dirname}/../data/three.txt`, function(err, data){
        expect(err).to.equal(null);
        expect(data).to.be.a('string');
        expect(data).to.be.equal('The words in the three file\n')
        done();
      });
    });
  });

});
