const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

eqArrays([10, 21, 33], [10, 21, 33, 42]);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays([10, 21, 33], [10, 21, 33]), false);