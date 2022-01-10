const exEmoji = String.fromCodePoint(0x274C);
const checkEmoji = String.fromCodePoint(0x2705);
const assertEqual = function(actual, expected) {
  if (expected === actual) {
    console.log(checkEmoji + checkEmoji + " Assertaion Passes: " + actual + " === " + expected);
  } else {
    console.log(exEmoji + exEmoji + " Assertaion Failed: " + actual + " !== " + expected);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("hello", "hello");
assertEqual("Hello", "hello");
assertEqual(1, 5);
assertEqual(55, 55);