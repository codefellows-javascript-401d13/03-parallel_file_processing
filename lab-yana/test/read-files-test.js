'use strict';

const fs = require('fs');
const expect = require('chai').expect;
const readFiles = require('../lib/read-files.js');

describe('File Reader Module', function() {
  describe('with an improper file path', function() {
    it('should return error', function(done) {
      readFiles.fileReader(`${__dirname}/bad-file-path.txt`, function(err) {
        expect(err).to.be.an('error');
        done();
      });
    });
  });
  describe('with a proper file path', function() {
    it('should not return an error', function(done) {
      readFiles.fileReader(`${__dirname}/../data/one.txt`, function (err) {
        expect(err).to.equal(null);
        done();
      });
    });
  });
  describe('#logFiles', function() {
    it('should log in order one, two, three', function(done) {
      const logFiles = require('../index.js');
      done();
    });
  });
});
