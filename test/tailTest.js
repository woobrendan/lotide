const tail = require('../tail');
const assertEqual = require('../assertEqual');

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
let tailArray = tail(words);
console.log(tailArray);
assertEqual(words.length, 3);