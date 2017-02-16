'use strict';

const expect = require('chai').expect;
const fileReader = require('../lib/file-reader.js');

describe('testing this file reader', function(){
  describe('These hex values should be in order', function() {
    it('the first one should be 3166696c65206e75', function(done){
      fileReader.readOneFile(`${__dirname}/..data/one.txt`, function(err, data){
        expect(err).to.equal(err);
        expect(data).to.equal('3166696c65206e75');
        done();
      });
    });

    it('the second one should be 3366696c65206e75', function(done){
      fileReader.readOneFile(`${__dirname}/..data/two.txt`, function(err, data){
        expect(err).to.equal(err);
        expect(data).to.equal('3366696c65206e75');
        done();
      });
    });

    it('the third one should be 3266696c65206e75', function(done){
      fileReader.readOneFile(`${__dirname}/..data/three.txt`, function(err, data){
        expect(err).to.equal(err);
        expect(data).to.equal('3266696c65206e75');
        done();
      });
    });
  });
});


describe('File Reader Thing', function(){
  describe('with an improper file', function(){
    it('should return an error', function(done){
      fileReader(`${__dirname}/not-a-file.txt`, function(err){
        expect(err).to.be.an('error');
        done();
      });
    });
  });
});
