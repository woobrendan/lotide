

const flatten = function(someArray) {
  let cleanArray = [];
  for (let i = 0; i < someArray.length; i++) {
    if (!Array.isArray(someArray[i])) {
      cleanArray.push(someArray[i]);
    } else {
        for (let j = 0; j < someArray[i].length; j++) {
          cleanArray.push(someArray[i][j]);
      }
    }
  }
  return cleanArray;
}

module.exports = flatten;
// console.log(flatten([1, 2, [3, 4], 5, [6]]));
// console.log(flatten([1, 2, [3, 4], 5, [6, 7, 8], 9, [10, 11, 12, 13]]));