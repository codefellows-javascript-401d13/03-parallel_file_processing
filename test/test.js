'use strict';

const reader = require('../lib/read.js');
const expect = require('chai').expect;

describe('Main File', function(){
  describe('#filePath', function(){
    it('should return an error!!!', function(done){
      let badPath = 'derp/gross.txt';
      reader.readInOrder(badPath, function(err){
        expect(err).to.be.an('error');
      });
      done();
    });
  });
  describe('#properOrder', function(){
    it('should check the tests run in correct order', function(done){
      var outcome = reader.readInOrder(reader.returnHex);
      expect(outcome).to.equal();
      done();
    });//end it
  });//end #firstTxt
});
