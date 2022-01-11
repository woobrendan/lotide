const exEmoji = String.fromCodePoint(0x274C);
const checkEmoji = String.fromCodePoint(0x2705);
const assertEqual = function(actual, expected) {
  if (expected === actual) {
    console.log(`${checkEmoji}${checkEmoji} Assertaion Passes: ${actual} === ${expected}`);
  } else {
    console.log(`${exEmoji}${exEmoji} Assertaion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(firstArray, secondArray) {
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] === secondArray[i]) {
      return true;
    } else return false;
  }
};


const assertArrayEqual = function(arrayOne, arrayTwo) {
  
  let same = eqArrays(arrayOne, arrayTwo);
  if (same) {
    console.log(`${checkEmoji}${checkEmoji} These two arrays, ${arrayOne} and ${arrayTwo} are the same.`)
  } else {
    console.log(`${exEmoji}${exEmoji} This first array ${arrayOne} is not the same as the second array ${arrayTwo}.`)
  }
};

assertArrayEqual([1, 2, 3], [1, 2, 3]);
assertArrayEqual([1, 2, 3], [3, 2, 1]);


