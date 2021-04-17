/*
Problem
  - input: number (positive integer)
  - output: array of numbers
- return an array of numbers with elements from 1 up to and including the
input integer
*/

function sequence(int) {
  let array = [];

  for (let value = 1; value <= int; value++) {
    array.push(value);
  }

  return array;
}

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]