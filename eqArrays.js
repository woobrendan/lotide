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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays([10, 21, 33], [10, 21, 33]), false);

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual("hello", "hello");
// assertEqual("Hello", "hello");
// assertEqual(1, 5);
// assertEqual(55, 55);