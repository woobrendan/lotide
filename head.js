const exEmoji = String.fromCodePoint(0x274C);
const checkEmoji = String.fromCodePoint(0x2705);

const assertEqual = function(actual, expected) {
  if (expected === actual) {
    console.log(`${checkEmoji}${checkEmoji} Assertaion Passes: ${actual} === ${expected}`);
  } else {
    console.log(`${exEmoji}${exEmoji} Assertaion Failed: ${actual} !== ${expected}`);
  }
};
const head = function(Array) {
  return Array[0];
};


assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");