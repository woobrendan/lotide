// const assertEqual = require('./assertEqual');

const tail = (array) => {
  if(array.length === 0) {
    return undefined;
  }
  return array.slice(1);
};

module.exports = tail;



