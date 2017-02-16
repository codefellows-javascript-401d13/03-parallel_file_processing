'use strict';

const expect = require('chai').expect;
const fileReader = require('../lib/file-reader.js');

describe('File Reader Module' function() {
  describe('with an improper file path', function() {
    it('should return an error', function(err) {
      fileReader(`${__dirname}/not-a-file.txt`, function(err) {
        expect(err).to.be.an('error');
        done();
      })
    })
  })

  describe('with a propper file path', function() {
    is('should return the contents of the file', function(done) {
      fileReader(`${__dirname}/../data/one.txt`, function(err, data) {
        expect(err).to.equal(null);
        expect(data).to.be.a('string');
        expect(data).to.equal()
      })
    })
  })
})
