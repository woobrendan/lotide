const tail = require('../tail');
const assertEqual = require('../assertEqual');

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
let tailArray = tail(words);
console.log('this is the tail of the original array', tailArray);
assertEqual(words.length, 3);