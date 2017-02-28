'use strict';

const fs = require('fs');
const expect = require('chai').expect;
const fileReader = require('../lib/file-reader.js');

describe('Reading all three files', function(){


  it('should rad the files in order, and provide the first 8 bytes of each file', function(done){
    fileReader(`${__dirname}/../data/one.txt`, function(err, data){
      expect(err).to.equal(err);
      expect(data).to.equal('48656c6c6f207468');
      expect(data).to.have.length.above(8);
      fileReader(`${__dirname}/../data/two.txt`, function(err, data){
        expect(err).to.equal(err);
        expect(data).to.equal('48656c6c6f207468');
        expect(data).to.have.length.above(8);
        fileReader(`${__dirname}/../data/three.txt`, function(err, data){
          expect(err).to.equal(err);
          expect(data).to.equal('48656c6c6f207468');
          expect(data).to.have.length.above(8);
          done();
        });
      });
    });
  });
  it('File not found.', function(done) {
    fileReader('', function(err, data) {
      expect(err).to.exist;
      expect(data).to.not.exist;
      done();
    });
  });
});
