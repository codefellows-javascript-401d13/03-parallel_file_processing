'use strict';

const expect = require('chai').expect;
const textReader = require('../lib/text-reader.js');
const buffs = require('buffs');

describe('File Reader Module', function() {
  describe('with an improper file path', function() {
    it('should return an error', function(done) {
      textReader(`${__dirname}/nothing.txt`, function(err) {
        expect(err).to.be.an('error');
        done();
      });
    });
  });

  describe('one.txt', function() {
    it('should return the contents of one.txt', function(done) {
      textReader(`${__dirname}/../data/one.txt`, function(err, data) {
        expect(err).to.equal(null);
        expect(data).to.be.a('string');
        expect(data).to.equal('first');
        done();
      });
    });
  });
  
  describe('two.txt', function() {
    it('should return the contents of two.txt', function(done) {
      textReader(`${__dirname}/../data/two.txt`, function(err, data) {
        expect(err).to.equal(null);
        expect(data).to.be.a('string');
        expect(data).to.equal('second');
      });
    });
  });
  describe('three.txt', function() {
    it('should return the contents of three.txt', function(done) {
      textReader(`${__dirname}/../data/three.txt`, function(err, data) {
        expect(err).to.equal(null);
        expect(data).to.be.a('string');
        expect(data).to.equal('third');
      });
    });
  });
});
