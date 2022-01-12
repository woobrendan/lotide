const exEmoji = String.fromCodePoint(0x274C);
const checkEmoji = String.fromCodePoint(0x2705);

const assertEqual = function(actual, expected) {
  if (expected === actual) {
    console.log(`${checkEmoji}${checkEmoji} Assertaion Passes: ${actual} === ${expected}`);
  } else {
    console.log(`${exEmoji}${exEmoji} Assertaion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(someString) {
  const letterCount = {};
  let noSpaceString = someString.split(' ').join('');
  for (let letter of noSpaceString) {
    if (letterCount[letter]) {
      letterCount[letter] += 1;
    } else {
      letterCount[letter] = 1;
    }
  }
  return letterCount;
};
console.log(countLetters("this is a string"));
console.log(countLetters("lighthouse in the house"));
console.log(countLetters(""));
