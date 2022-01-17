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

module.exports = countLetters;