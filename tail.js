const exEmoji = String.fromCodePoint(0x274C);
const checkEmoji = String.fromCodePoint(0x2705);
const assertEqual = function(actual, expected) {
  if (expected === actual) {
    console.log(`${checkEmoji}${checkEmoji} Assertaion Passes: ${actual} === ${expected}`);
  } else {
    console.log(`${exEmoji}${exEmoji} Assertaion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(Array) {
  return Array.slice(1);
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
let tailArray = tail(words);
console.log(tailArray);
assertEqual(words.length, 3);