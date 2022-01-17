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

module.exports = takeUntil;

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
 

// assertArrayEqual(takeUntil(data1, x => x > 6), [ 1, 2, 5]);
// assertArrayEqual(takeUntil(data2, x => x === ','), [ "I've", 'been', 'to', 'Hollywood' ]);

// assertArrayEqual(takeUntil(data1, x => x < 0), [ 1, 2, 5, 7, 2, 8 ]);



