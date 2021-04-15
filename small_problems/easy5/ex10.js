/*
Problem
  - input: array of integers
  - output: number
- return the average of the numbers in the input array rounded down
to the nearest integer

Algorithm
1. sum all the numbers in the array and assign to variable sum
2. return the sum divided by length of the input array rounded down
*/

function average(numbers) {
  let sum = numbers.reduce((acc, curr) => acc + curr);
  return Math.floor(sum / numbers.length);
}

console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40