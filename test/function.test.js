const assert = require('assert');
const add = require('../src/functions/math.test');

describe('it tests function import and test setup', () => {
  
  it('tests add function', () => {
    const total = add(4, 3);
    assert.equal(total, 7);

  });
});