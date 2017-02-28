'use strict';

const reader = require('../lib/read.js');
const expect = require('chai').expect;

describe('Main File', function(){

require('../index.js');

  describe('#wrongFilePath', function(){
    it('should return an error', function(done){
      let badPath = 'derp/wrong.txt';
      reader.readInOrder(badPath, function(err){
        expect(err).to.be.an('error');
      });
      done();
    });
  });

  describe('#properAmountOfFiles', function(){
    it('check number of files in array', function(done){
      expect(reader.dataHolder.length).to.equal(3);
      done();
    });
  });

  describe('#filesMatchUp', function(){
    it('check file order', function(done){
      expect(reader.fileHolder[0]).to.equal('one.txt');
      expect(reader.fileHolder[1]).to.equal('two.txt');
      expect(reader.fileHolder[2]).to.equal('three.txt');
      done();
    });
  });



});
