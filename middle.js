const exEmoji = String.fromCodePoint(0x274C);
const checkEmoji = String.fromCodePoint(0x2705);

const eqArrays = function(firstArray, secondArray) {
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] === secondArray[i]) {
      return true;
    } else return false;
  }
};


const assertArrayEqual = function(actual, expected) {
  let same = eqArrays(actual, expected);
  if (same) {
    console.log(`${checkEmoji}${checkEmoji} These two arrays, ${actual} and ${expected} are the same.`);
  } else {
    console.log(`${exEmoji}${exEmoji} This first array ${actual} is not the same as the second array ${expected}.`);
  }
};

const isOdd = function(someArray) {
  if (someArray.length % 2 !== 0) {
    return true;
  } else return false;
};

const isEven = function(someArray) {
  if (someArray.length % 2 === 0) {
    return true;
  } else return false;
};

const middle = function(someArray) {
  let arrayLength = someArray.length;
  let middleIndex = [];

  if (arrayLength < 3) {
    return [];
  } else if (isOdd(someArray)) {
    middleIndex.push(Math.floor((arrayLength / 2) + 1));
  } else if (isEven(someArray)) {
    let firstMiddle = Math.floor(arrayLength / 2);
    for (let i = firstMiddle - 1; i <= firstMiddle; i++) {
      middleIndex.push(someArray[i]);
    }
  }
  return middleIndex;
};

//Test Code
// console.log(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]));

assertArrayEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]), [5]);
assertArrayEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]);