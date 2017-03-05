'use strict';

const expect = require('chai').expect;
const readFileHelper = require('../lib/file-reader.js');

describe('File Reader Module', function() {
  describe('with bad file paths', function() {
    if('should return an error',function() {
      readFileHelper([`${__dirname}/bad-file.txt`], function(err) {
        expect(err).to.equal('true');
      });
    });
  });
  describe('with good file paths', function() {
    before( (done) => {
      this.paths = [
        `${__dirname}/../data/one.txt`,
        `${__dirname}/../data/two.txt`,
        `${__dirname}/../data/three.txt`
      ];
      done();
    });

    it('should have correct order of hex strings', (done) => {
      var expectedResult = ['3361626562623365', '0931616334306361', '6266393632333032'];
      readFileHelper(this.paths, function(err, data) {
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
