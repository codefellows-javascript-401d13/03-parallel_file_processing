'use strict';

const expect = require('chai').expect;
const readFile = require('../lib/file-reader.js');

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
    let files = ['one.txt', 'two.txt', 'three.txt'];
    let expected = ['456e616d656c2070', '536c6f772d636172', '53756363756c656e'];
    it('should return the first 8 hex digits in order', function(done) {
      readFile(files, function(err, data) {
        expect(err).to.equal(null);
        expect(data[0]).to.be.a('string');
        expect(data[0]).to.equal(expected[0]);
        expect(data[1]).to.be.a('string');
        expect(data[1]).to.equal(expected[1]);
        expect(data[2]).to.be.a('string');
        expect(data[2]).to.equal(expected[2]);
        done();
      });
    });
  });
});
