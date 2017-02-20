'use strict';

const fs = require('fs');
const expect = require('chai').expect;
const reader = require('../lib/read-files.js');

describe('File Reader Module', function() {
  describe('with an improper file path', function() {
    it('should return error', function(done) {
      let resArray = [];
      reader.readFiles(`${__dirname}/../data/not-valid-path.txt`, resArray, function(err) {
        expect(err).to.be.an('error');
        done();
      });
    });
  });
  describe('with a proper file path', function() {
    it('should not return an error', function(done) {
      let resArray = [];
      reader.readFiles(`${__dirname}/../data/one.txt`, resArray, function(err, data) {
        expect(err).to.equal(null);
        done();
      });
    });
  });
  describe('#fetchFiles', function() {
    it('should log in order one, two, three', function(done) {
      reader.fetchFiles(reader.files, reader.readFiles, function(data) {
        expect(data.length).to.equal(3);
        expect(data[0]).to.include('one');
        expect(data[1]).to.include('two');
        expect(data[2]).to.include('three');
        done();
      });
    });
  });
});
