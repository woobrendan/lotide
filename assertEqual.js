const assertEqual = function(actual, expected) {
  if (expected === actual) {
    console.log(`✅✅ Assertaion Passes: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌ Assertaion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;
