

// const words = ["ground", "control", "to", "major", "tom"];
// const baseballTeams = ['Blue Jays', 'Red Sox', 'Yankees'];

const map = function(array, callBack) {
  const results = [];
  for (let item of array) {
    results.push(callBack(item));
  }
  return results;
};

module.exports = map;


// assertArrayEqual(map(words, word => word[0]),[ 'g', 'c', 't', 'm', 't' ]);
// assertArrayEqual(map(baseballTeams, word => word[0]),[ 'B', 'R', 'Y', 'D']);
// assertArrayEqual(map(baseballTeams, word => word[word.length - 1]),[ 's', 'x', 's']);