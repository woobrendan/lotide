const eqArrays = (firstArray, secondArray) => {
  let checker;
  if (firstArray.length !== secondArray.length) {
    return false;
  }
  if (firstArray.length === 0) {
    return true;
  }
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] === secondArray[i]) {
      checker = true;
    } else return false;
  }
  return checker;
};

module.exports = eqArrays;




