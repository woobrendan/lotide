const tail = require('../tail');
const { assert } = require('chai');


describe("#Tail", () => {
  it("returns [2, 3, 4] for [1, 2, 3, 4]", () => {
    assert.deepEqual(tail([1, 2, 3, 4]), [2, 3, 4])
  });
  it("returns undefined for []", () => {
    assert.deepEqual(tail([]), undefined);
  });
});