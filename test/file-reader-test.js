'use strict';

const expect = require('chai').expect;
const readFile = require('../lib/file-reader.js').readFiles;

describe('File Reader Module', function() {
  describe('test false file path', function() {
    it('should return an error message', function(done) {
      readFile(['imaginary-file.txt'], function(err) {
        expect(err).to.be.an('error');
        done();
      });
    });
  });

  describe('test actual file paths', function() {
    it('should return the first 8 hex digits', function(done) {
      readFile(['one.txt', 'two.txt', 'three.txt'], function(err, data) {
        expect(err).to.equal(null);
        expect(data).to.be.a('string');
        done();
      });
    });
  });
});
