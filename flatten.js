const flatten = function(array) {
  let newArray = [];
  array.forEach((item) => {
    if (Array.isArray(item)) {
       newArray = newArray.concat(flatten(item));
    } else {
      newArray.push(item);
    }
  });
  return newArray;
};

module.exports = flatten;

// console.log(flatten([1, 2, [3, 4], 5, [6]]));
// console.log(flatten([1, 2, [3, 4], 5, [6, 7, 8], 9, [10, 11, 12, 13]]));