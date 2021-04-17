/* 
Problem
  - input: two integer numbers (positive inluding 0 and the second any)
  - output: array of numbers
- return an array of numbers with length equal to the first input integer
and its elements multiples of the second input integer

Algorithm
1. initialise an empty result array
2. add the second input integer multiplied by one into the result array
3. add the second input integer multiplied by two into the result array
4. repeat step 3 with incrementing multiplier until the length of the array
is equal to the first input integer
5. return the array
*/

function sequence(count, start) {
  let result = [];

  for (let multiplier = 1; multiplier <= count; multiplier++) {
    result.push(start * multiplier);
  }

  return result;
}

console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []
