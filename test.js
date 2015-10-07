import * as ez from "./ez.js"
const should = require('chai').should();

describe('EZ Module', () => {
  it('should be an object', () => {
    ez.should.be.an.object
  });
  it('should have length of 30', () => {
    Object.keys(ez).should.have.length(30)
  });
});

describe('Ez Props', () => {
  for (let key of Object.keys(ez)) {
    it(`${key} should return a number`, () => {
      ez[key](100, 0, 10, 1000).should.be.a.number
    });
  }
});
