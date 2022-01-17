const eqArrays = require('./eqArrays')

const eqObjects = function(object1, object2) {
  const keyOne = Object.keys(object1);
  const keyTwo = Object.keys(object2);
  if (keyOne.length !== keyTwo.length) {
    return false;
  }
  for (let key in object1) {
    if (object1[key] !== object2[key]) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (eqArrays(object1[key], object2[key])) {
          return true;
        }
      }
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// const myObject = {c: "12", d: ["2", 3]};
// // console.log(eqObjects(cd, dc)); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// console.log(eqObjects(cd, cd2)); // => false

// assertEqual(eqObjects(cd, dc), true);
// assertEqual(eqObjects(cd, cd2), false);
// assertEqual(eqObjects(cd, myObject), false);

// Step 2 test
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// const abc = { a: "1", b: "2", c: "3" };

// console.log(eqObjects(ab, ba)); // => true
// assertEqual(ab, abc); // => false


