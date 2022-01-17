
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

module.exports = letterPositions;
// console.log(letterPositions("hello"));
// console.log(letterPositions("this is a string"));
// assertArraysEqual(letterPositions("hello").e, [1]);
