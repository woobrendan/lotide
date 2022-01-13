const exEmoji = String.fromCodePoint(0x274C);
const checkEmoji = String.fromCodePoint(0x2705);

const checkIfIsArray = function(value) {
  if (value.constructor === Array) {
    return true;
  } else {
    return false;
  }
};

const eqArrays = function(firstArray, secondArray) {
  let checker;
  let masterArray = [firstArray, secondArray];
  let longestArrayLength = firstArray.length;
  for (let array of masterArray) {
    if (array.length > longestArrayLength) {
      longestArrayLength = array.length;
    }
  }
  for (let i = 0; i < longestArrayLength; i++) {
    if (firstArray[i] === secondArray[i]) {
      checker = true;
    } else return false;
  }
  return checker;
};

const eqObjects = function(object1, object2) {
  const keyOne = Object.keys(object1);
  const keyTwo = Object.keys(object2);
  if (keyOne.length !== keyTwo.length) {
    return false;
  }
  for (let key in object1) {
    if (object1[key] !== object2[key]) {
      if (checkIfIsArray(object1[key]) && checkIfIsArray(object2[key])) {
        if (eqArrays(object1[key], object2[key])) {
          return true;
        }
      }
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`${checkEmoji}${checkEmoji} These two objects, ${inspect(actual)} and ${inspect(expected)} are the same.`);
  } else {
    console.log(`${exEmoji}${exEmoji} This first array ${inspect(actual)} is not the same as the second array ${inspect(expected)}.`);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, ba);
assertObjectsEqual(ab, abc);