

const without = function(source, itemsToRemove) {
  let newArray = source.filter(item => !itemsToRemove.includes(item));
  return newArray;
};

module.exports = without;

// const words = ["hello", "world", "lighthouse"];
// console.log(without(words, ["lighthouse"])); 

// assertArraysEqual(words, ["hello", "world", "lighthouse"]);

// console.log(without([1, 2, 3], [1]));
// console.log(without(["11", "2", "3"], [1, 2, "3"]));
// console.log(without([20, "18", "hello", "world"], [1, 2, "hello"]));