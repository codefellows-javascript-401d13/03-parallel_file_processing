'use strict';

const expect = require('chai').expect;
const readFile = require('../lib/file-reader.js');

describe('Read File Helper Module', function(){
  describe('with bad file paths', function(){
    it('should return an error', function(){
      readFile([`${__dirname}/dont-exist.txt`], function(err){
        expect(!!err).to.equal(true);
      });
    });
  });

describe('with file good file paths', function(){
  before((done) => {
    this.paths = [
      `${__dirname}/../data/one.txt`,
      `${__dirname}/../data/two.txt`,
      `${__dirname}/../data/three.txt`
    ];
    done();
  });
  it('should have correct order of hex strings', (done) => {
    var expectedResult = ['3166696c65206e75', '3366696c65206e75', '3266696c65206e75'];
    readFile(this.paths, function(err, data){
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
