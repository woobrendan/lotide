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

const without = function(source, itemsToRemove) {
  let newArray = source.filter(item => !itemsToRemove.includes(item));
  return newArray;
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); 

assertArraysEqual(words, ["hello", "world", "lighthouse"]);

// console.log(without([1, 2, 3], [1]));
// console.log(without(["11", "2", "3"], [1, 2, "3"]));
// console.log(without([20, "18", "hello", "world"], [1, 2, "hello"]));