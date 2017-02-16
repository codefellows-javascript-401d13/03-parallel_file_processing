'use strict';

const expect = require('chai').expect;
const reader = require('../lib/read.js');

describe('Read Module', function() {
  describe('with an improper file path', function() {
    it('should return an error', function(done) {
      reader([`${__dirname}/../data/noone.txt`, `${__dirname}/../data/two.txt`, `${__dirname}/../data/three.txt`], function(err) {
        expect(err).to.be.an('error');
        done();
      });
    });
  });

  describe('with a proper file path', function() {
    it('should return the contents of the file', function(done) {
      reader([`${__dirname}/../data/one.txt`, `${__dirname}/../data/two.txt`, `${__dirname}/../data/three.txt`], function(err, data) {
        expect(err).to.equal(null);
        expect(data[0]).to.be.a('string');
        expect(data[0]).to.equal('Same an ');
        done();
      });
    });

  });
  describe('with a proper file path', function() {
    it('should return the contents of the file', function(done) {
      reader([`${__dirname}/../data/one.txt`, `${__dirname}/../data/two.txt`, `${__dirname}/../data/three.txt`], function(err, data) {
        expect(err).to.equal(null);
        expect(data[1]).to.be.a('string');
        expect(data[1]).to.equal('Do great');
        done();
      });
    });
  });

  describe('with a proper file path', function() {
    it('should return the contents of the file', function(done) {
      reader([`${__dirname}/../data/one.txt`, `${__dirname}/../data/two.txt`, `${__dirname}/../data/three.txt`], function(err, data) {
        expect(err).to.equal(null);
        expect(data[2]).to.be.a('string');
        expect(data[2]).to.equal('Do great');
        done();
      });
    });

  });
});
