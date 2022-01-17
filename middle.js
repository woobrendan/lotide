const isEven = (someArray) => {
  if (someArray.length % 2 === 0) {
    return true;
  } else return false;
};

const middle = function(someArray) {
  let middleIndex = [];
  if (someArray.length < 3) {
    return [];
  } 
  if (isEven(someArray)) {
    let middle = Math.floor(someArray.length / 2);
    middleIndex.push(someArray[middle - 1], someArray[middle]);
  } else {
    middleIndex.push(Math.floor((someArray.length / 2) + 1));
  }
  return middleIndex;
};

module.exports = middle;