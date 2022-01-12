const exEmoji = String.fromCodePoint(0x274C);
const checkEmoji = String.fromCodePoint(0x2705);

const assertEqual = function(actual, expected) {
  if (expected === actual) {
    console.log(`${checkEmoji}${checkEmoji} Assertaion Passes: ${actual} === ${expected}`);
  } else {
    console.log(`${exEmoji}${exEmoji} Assertaion Failed: ${actual} !== ${expected}`);
  }
};


const findKeyByValue = function(someObject, someValue) {
  let genreOfShow = '';
  for (let genre in someObject) {
    if (someValue === someObject[genre]) {
      genreOfShow = genre;
    } else {
      genreOfShow = undefined;
    }
  }
  return genreOfShow;
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

