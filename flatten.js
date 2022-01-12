const exEmoji = String.fromCodePoint(0x274C);
const checkEmoji = String.fromCodePoint(0x2705);

const eqArrays = function(firstArray, secondArray) {
  for (let i = 0; i < secondArray.length; i++) {
    if (firstArray[i] === secondArray[i]) {
      return true;
    } else return false;
  }
};


const assertArraysEqual = function(arrayOne, arrayTwo) {
  let same = eqArrays(arrayOne, arrayTwo);
  if (same) {
    console.log(`${checkEmoji}${checkEmoji} These two arrays, ${arrayOne} and ${arrayTwo} are the same.`)
  } else {
    console.log(`${exEmoji}${exEmoji} This first array ${arrayOne} is not the same as the second array ${arrayTwo}.`)
  }
};

const flatten = function(someArray) {
  let cleanArray = [];
  for (let i = 0; i < someArray.length; i++) {
    if (!Array.isArray(someArray[i])) {
      cleanArray.push(someArray[i]);
    } else {
        for (let j = 0; j < someArray[i].length; j++) {
          cleanArray.push(someArray[i][j]);
      }
    }
  }
  // let cleanArray = someArray.flat();
  return cleanArray;
}

console.log(flatten([1, 2, [3, 4], 5, [6]]));
console.log(flatten([1, 2, [3, 4], 5, [6, 7, 8], 9, [10, 11, 12, 13]]));