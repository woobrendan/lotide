// const assertEqual = require('./assertEqual');


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
module.exports = findKeyByValue;

// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
