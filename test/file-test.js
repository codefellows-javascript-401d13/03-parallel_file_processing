'use strict';

const expect = require('chai').expect;
const fileReader = require('../lib/file-reader.js');

describe('File reading module', function() {
  describe('with improper paths', function() {
    it('should return with an error', function() {
      fileReader(`${__dirname}/dont-exit.text`, function() {
        expect(err).to.equal(true);
      });
    });
  });
  describe('with a proper paths', function() {
    before((done) => {
      this.paths = [
        `${__dirname}/../data/one.txt`,
        `${__dirname}/../data/two.txt`,
        `${__dirname}/../data/three.txt`,
      ];
    });
    it('should have the correct order of hex strings read in', (done) => {
      var expectedResult = [];
      readFile(this.paths, function(err, data) {
        expect(err).to.equal(null);
        expect(data[0]).to.equal(expectedResult[0]);
        expect(data[1]).to.equal(expectedResult[1]);
        expect(data[2]).to.equal(expectedResult[2]);
        console.log('data', data);
        done();
      });
    });
  });
});
