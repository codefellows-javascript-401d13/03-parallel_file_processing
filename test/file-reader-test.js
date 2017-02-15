'use strict';

const expect = require('chai').expect;
const readFile = require('../lib/file-reader.js').fileReader;

describe('File Reader Module', function() {
  describe('test false file path', function() {
    it('should return an error message', function(done) {
      readFile(`${__dirname}/imaginary-file.txt`, function(err) {
        expect(err).to.be.an('error');
        done();
      });
    });
  });
});
