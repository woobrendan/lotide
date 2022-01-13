const exEmoji = String.fromCodePoint(0x274C);
const checkEmoji = String.fromCodePoint(0x2705);

const assertEqual = function(actual, expected) {
  if (expected === actual) {
    console.log(`${checkEmoji}${checkEmoji} Assertaion Passes: ${actual} === ${expected}`);
  } else {
    console.log(`${exEmoji}${exEmoji} Assertaion Failed: ${actual} !== ${expected}`);
  }
};


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

const checkIfIsArray = function(value) {
  if (value.constructor === Array) {
    return true;
  } else {
    return false;
  }
};


const eqObjects = function(object1, object2) {
  const keyOne = Object.keys(object1);
  const keyTwo = Object.keys(object2);
  if (keyOne.length !== keyTwo.length) {
    return false;
  }
  for (let key in object1) {
    if (object1[key] !== object2[key]) {
      if (checkIfIsArray(object1[key]) && checkIfIsArray(object2[key])) {
        if (eqArrays(object1[key], object2[key])) {
          return true;
        }
      }
      return false;
    }
  }
  return true;
};
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const myObject = {c: "12", d: ["2", 3]};
// console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
// console.log(eqObjects(cd, cd2)); // => false

assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);
assertEqual(eqObjects(cd, myObject), false);

// Step 2 test
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// const abc = { a: "1", b: "2", c: "3" };

// console.log(eqObjects(ab, ba)); // => true
// assertEqual(ab, abc); // => false


