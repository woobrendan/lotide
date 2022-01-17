const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`✅✅ These two arrays, ${arrayOne} and ${arrayTwo} are the same.`);
  } else {
    console.log(`❌❌ This first array ${arrayOne} is not the same as the second array ${arrayTwo}.`);
  }
};

module.exports = assertArraysEqual;