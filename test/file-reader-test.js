'use strict'

const expect = require('chai').expect;
const fileReader = require('../lib/read-file.js');

describe('File Reader Module', function() {
  describe('with an improper file path', function() {
    it('should return an error', function() {
      fileReader([`${__dirname}/not-a-file.txt`], function(err) {
        expect(err).to.equal(true);
      });
    });
  });

  describe('with a proper file path', function() {
    before((done) => {
      this.paths = [
        `${__dirname}/../data/one.txt`,
        `${__dirname}/../data/two.txt`,
        `${__dirname}/../data/three.txt`
      ];
      done();
    });

    it ('should have correct order of hex strings', (done) => {
      var expectedResult = ['41682c20596f7520','596f75277665206d', '492077617320626f'];
      fileReader(this.paths, function(err, data){
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
