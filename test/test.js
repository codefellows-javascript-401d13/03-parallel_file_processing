'use strict';

const reader = require('../lib/read.js').readInOrder;
const expect = require('chai').expect;


describe('Main File', function(){
  describe('#filePath', function(){
    it('should return an error!!!', function(done){
      let badPath = 'derp/gross.txt';
      reader(badPath, function(err){
        expect(err).to.be.an('error');
      });
      done();
    });
  });
  describe('#properOrder', function(){
    it('should check the tests run in correct order', function(done){
      var outcome = reader.readInOrder(reader.returnHex(exports.getHexxed));
      expect(outcome).to.equal([ '66697273', '7365636f', '74686972' ]);
      done();
    });//end it
  });//end #firstTxt
});
