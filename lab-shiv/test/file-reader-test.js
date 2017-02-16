'use strict';

const expect = require('chai').expect;
const fileReader = require('../lib/file-reader.js');

describe('File Testing Module', function() {
  describe('with an improper file path', function() {
    it ('should return an error', function(done) {
      fileReader(`${__dirname}/falsefile.txt`, function(err) {
        expect(err).to.be.an('error');
        done();
      });
    });
  });
  describe('for first data file', function() {
    it('should return contents of the file', function(done) {
      fileReader(`${__dirname}/../data/one.txt`, function (err, data) {
        expect(err).to.equal(null);
        // expect(data).to.be.a('string');
        console.log(data.slice(0, 7));
        expect(data.toString()).to.equal('this is the first content\n');
        done();
      });
    });
  });
  describe('for second data file', function() {
    it ('should return the contents of the file', function(done) {
      fileReader(`${__dirname}/../data/t2wo.txt`, function(err, data) {
        expect(err).to.equal(null);
        // expect(data).to.be.a('string');
        console.log(data.slice(0, 7));
        expect(data.toString()).to.equal('The guitar is an ancient and noble instrument\r\n');
        done();
      });
    });
  });
  describe('for last file', function() {
    it('should return file contents', function(done) {
      fileReader(`${__dirname}/../data/t3hree.txt`, function(err, data) {
        expect(err).to.equal(null);
        // expect(data).to.be.a('string');
        console.log(data.slice(0, 7));
        expect(data.toString()).to.equal('The drums are pretty sweet\n');
        done();
      });
    });
  });
});
