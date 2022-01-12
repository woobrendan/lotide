const exEmoji = String.fromCodePoint(0x274C);
const checkEmoji = String.fromCodePoint(0x2705);

const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`${checkEmoji}${checkEmoji} These two arrays, ${arrayOne} and ${arrayTwo} are the same.`);
  } else {
    console.log(`${exEmoji}${exEmoji} This first array ${arrayOne} is not the same as the second array ${arrayTwo}.`);
  }
};

const eqArrays = function(firstArray, secondArray) {
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] === secondArray[i]) {
      return true;
    } else return false;
  }
};
const letterPositions = function(sentence) {
  const results = {};
  let noSpaceString = sentence.split(' ').join('');
  for (let i = 0; i < noSpaceString.length; i++) {
    if (results[noSpaceString[i]]) {
      results[noSpaceString[i]].push(i);
    } else {
      results[noSpaceString[i]] = [i];
    }
  }
  return results;
};
console.log(letterPositions("hello"));
console.log(letterPositions("this is a string"));
assertArraysEqual(letterPositions("hello").e, [1]);
