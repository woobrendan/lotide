# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @woobrendan/lotide`

**Require it:**

`const _ = require('@woobrendan/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head()`: returns first index of a given array
* `tail()`: returns the tail of a given array
* `middle()`: returns the middle number(s) of a given array
* `countLetters()`: takes a string and returns an object counting the amount of occurences per letter
* `countOnly()`: takes an array and counts how many occurences of given values to count
* `eqObjects()`: compares two objects to deteremine if they are the same
* `findKey()`: takes an object and a function as parameters, if value based on conditions from the callback function are met, return the matching key 
* `findKeyByValue()`: takes an object and a value, returning the key that matches the given value
* `flatten()`: takes an array with nested arrays and returns a "clean" array of numbers
* `letterPositions()`:  takes a string returns and object containing the indexes of each letter in the string 
* `map()`: takes an array and performs a given callback function on the given array
* `takeUntil()`: takes an array  and a callback function then grabs all numbers until the call back stop condition
* `without()`: takes a given array and items to remove from that array, then filters items to be removed