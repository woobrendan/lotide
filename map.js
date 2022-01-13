const exEmoji = String.fromCodePoint(0x274C);
const checkEmoji = String.fromCodePoint(0x2705);

const eqArrays = function(firstArray, secondArray) {
  let checker;
  let masterArray = [firstArray, secondArray]
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

const words = ["ground", "control", "to", "major", "tom"];
const baseballTeams = ['Blue Jays', 'Red Sox', 'Yankees'];

const map = function(array, callBack) {
  const results = [];
  for (let item of array) {
    results.push(callBack(item))
  }
  return results;
}


const results1 = map(words, word => word[0]);
// console.log(results1);

assertArrayEqual(map(words, word => word[0]),[ 'g', 'c', 't', 'm', 't' ])
assertArrayEqual(map(baseballTeams, word => word[0]),[ 'B', 'R', 'Y', 'D'])
assertArrayEqual(map(baseballTeams, word => word[word.length -1]),[ 's', 'x', 's'])