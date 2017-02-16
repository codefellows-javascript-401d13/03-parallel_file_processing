'use-strict';

const expect = require('chai').expect;
const fileReader = require('../lib/file-reader.js');

describe('File Reader', function() {
  describe('Hex values should display in order.', function() {
    it('first output should be: 5468697320697320', function(done) {
      fileReader.readSingleFile(`${__dirname}/../data/one.txt`, function(err, data) {
        expect(err).to.equal(null);
        expect(data).to.equal('5468697320697320');
        done();
      });
    });
    it('second output should be: 6c61682064656520', function(done) {
      fileReader.readSingleFile(`${__dirname}/../data/two.txt`, function(err, data) {
        expect(err).to.equal(null);
        expect(data).to.equal('6c61682064656520');
        done();
      });
    });
    it('third output should be: 4c6f72656d206970', function(done) {
      fileReader.readSingleFile(`${__dirname}/../data/three.txt`, function(err, data) {
        expect(err).to.equal(null);
        expect(data).to.equal('4c6f72656d206970');
        done();
      });
    });
  });
  describe('An incorrect file-path should fail', function() {
    it('should throw an error', function(done) {
      fileReader.readSingleFile(`${__dirname}/../data/bullshit.txt`, function(err, data) {
        expect(err).to.be.an('error');
        done();
      });
    });
  });
});
