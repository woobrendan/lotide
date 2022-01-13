const exEmoji = String.fromCodePoint(0x274C);
const checkEmoji = String.fromCodePoint(0x2705);

const eqArrays = function(firstArray, secondArray) {
  let checker;
  let masterArray = [firstArray, secondArray];
  let longestArrayLength = firstArray.length;
  for (let array of masterArray) {
    if (array.length > longestArrayLength) {
      longestArrayLength = array.length;
    }
  }
  for (let i = 0; i < longestArrayLength; i++) {
    if (firstArray[i] === secondArray[i]) {
      checker = true;
    } else return false;
  }
  return checker;
};


const assertArrayEqual = function(arrayOne, arrayTwo) {
  
  let same = eqArrays(arrayOne, arrayTwo);
  if (same) {
    console.log(`${checkEmoji}${checkEmoji} These two arrays, ${arrayOne} and ${arrayTwo} are the same.`);
  } else {
    console.log(`${exEmoji}${exEmoji} This first array ${arrayOne} is not the same as the second array ${arrayTwo}.`);
  }
};

const takeUntil = function(array, callback) {
  let newArray = [];
  for (let element of array) {
    if (!callback(element)) {
      newArray.push(element);
    } else {
      return newArray;
    }
  }
  return newArray;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
 

assertArrayEqual(takeUntil(data1, x => x > 6), [ 1, 2, 5]);
assertArrayEqual(takeUntil(data2, x => x === ','), [ "I've", 'been', 'to', 'Hollywood' ]);

assertArrayEqual(takeUntil(data1, x => x < 0), [ 1, 2, 5, 7, 2, 8 ]);



