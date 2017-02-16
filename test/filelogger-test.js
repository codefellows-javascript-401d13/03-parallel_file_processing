'use strict';

const fileLogger = require('../lib/fileLogger.js');
const expect = require('chai').expect;

describe('FileLogger Module', function() {
  describe('with an improper file path', function(){
    it('should return an error', function(done) {
      let badFilePath = 'badfile/sobad';
      fileLogger([badFilePath], function(err) {
        expect(err).to.be.an('error');
        done();
      });
    });
  });

  describe('with one proper file path passed in an array', function() {
    let input = [`${__dirname}/../data/one.txt`];
    it('should return an array of the same length as the input array', function(done) {
      fileLogger(input , function(err, data) {
        expect(err).to.equal(null);
        expect(data).to.be.an('array');
        expect(data.length).to.equal(input.length);
        done();
      });
    });

    it('returned array should have a result property that has value of the first 8 bits in hex', function(done) {
      fileLogger(input , function(err, data) {
        expect(data[0]).to.have.property('result');
        expect(data[0].result.length).to.equal(16);
        expect(data[0].result).to.equal('41696e2774206e6f');
        done();
      });
    });
  });

  describe('with three files passed in array', function(){
    let input = [`${__dirname}/../data/one.txt`, `${__dirname}/../data/two.txt`, `${__dirname}/../data/three.txt`];
    it('should return an array of the same length as the input array', function(done){
      fileLogger(input, function(err, data) {
        expect(err).to.equal(null);
        expect(data).to.be.an('array');
        expect(data.length).to.equal(input.length);
        done();
      });
    });

    it('returned array should be in the same order as the input array', function(done){
      fileLogger(input, function(err, data) {
        expect(data[0].path).to.equal(input[0]);
        expect(data[1].path).to.equal(input[1]);
        expect(data[2].path).to.equal(input[2]);
        done();
      });

      let inputDiff = [ `${__dirname}/../data/three.txt`,`${__dirname}/../data/one.txt`, `${__dirname}/../data/two.txt`];
      fileLogger(inputDiff, function(err, data) {
        expect(data[0].path).to.equal(input[0]);
        expect(data[1].path).to.equal(input[1]);
        expect(data[2].path).to.equal(input[2]);
        done();
      });
    });

    it('returned array should have a result property that has value of the first 8 bits in hex', function(done) {
      fileLogger(input , function(err, data) {
        expect(data[0]).to.have.property('result');
        expect(data[1]).to.have.property('result');
        expect(data[2]).to.have.property('result');
        expect(data[0].result.length).to.equal(16);
        expect(data[1].result.length).to.equal(16);
        expect(data[2].result.length).to.equal(16);
        expect(data[0].result).to.equal('41696e2774206e6f');
        expect(data[1].result).to.equal('54686520646f7070');
        expect(data[2].result).to.equal('416c6c206861696c');
        done();
      });
    });
  });
});
