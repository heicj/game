const assert = require('assert');
const should = require('chai').should();

const add = require('../src/functions/math.js');
const quote = require('../src/functions/quote.js');

describe('it tests function import and test setup', () => {
  
  it('tests add function', () => {
    const total = add(4, 3);
    assert.equal(total, 7);

  });

});

describe('tests random quote function', () => {
  it('tests random answer', () => {
    const ans = quote();
    ans.should.be.a('string');
  });
});