'use-strict';

const expect = require('chai').expect;
const fileReader = require('../lib/file-reader.js');





describe('File Reader', function() {
  describe('Hex values should display in order.', function() {
    before((done) => {
      this.paths = [
        `${__dirname}/../data/one.txt`,
        `${__dirname}/../data/two.txt`,
        `${__dirname}/../data/three.txt`
      ];
      done();
    });
    it('should test pathArray and correctly log each result', (done) => {
      var expectedResults = ['5468697320697320', '6c61682064656520', '4c6f72656d206970'];
      fileReader.readAllFiles(this.paths, function(err, data) {
        expect(err).to.equal(null);
        expect(data[0]).to.equal(expectedResults[0]);
        expect(data[1]).to.equal(expectedResults[1]);
        expect(data[2]).to.equal(expectedResults[2]);
        console.log('data', data);
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
