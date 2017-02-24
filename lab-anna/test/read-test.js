'use strict';

const expect = require('chai').expect;
const reader = require('../lib/read.js');

// const textFiles = [`${__dirname}/../data/one.txt`, `${__dirname}/../data/two.txt`, `${__dirname}/../data/three.txt`];


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
        expect(data).to.be.a('string');
        expect(data).to.equal('1 - 53616d6520616e20\n2 - 446f206772656174\n3 - 556e77696c6c696e\n');
        done();
      });
    });
  });
});
