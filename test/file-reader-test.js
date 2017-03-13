'use strict';

const expect = require('chai').expect;
const readFile = require('../lib/file-reader.js');

describe('Read File Helper Module', () =>{
  describe('with bad file paths', () =>{
    it('should return an error', () =>{
      readFile([`${__dirname}/.txt`], (err) =>{
      });
    });
  });
describe('with good file paths', () =>{
  before((done) => {
    this.paths = [
      `${__dirname}/../data/one.txt`,
      `${__dirname}/../data/two.txt`,
      `${__dirname}/../data/three.txt`
    ];
    done();
  });
  it('should have correct order of hex strings', (done) => {
    var dataNum = ['48656c6c6f207468', '48656c6c6f207468', '48656c6c6f207468'];
    readFile(this.paths, (err, data) =>{
      expect(err).to.equal(null);
      expect(data[0]).to.equal(dataNum[0]);
      expect(data[1]).to.equal(dataNum[1]);
      expect(data[2]).to.equal(dataNum[2]);
      console.log('data', data);
      done();
    });
  });
});
});
