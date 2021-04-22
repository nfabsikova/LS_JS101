/*
Problem
  - input: two arrays
  - output: new sorted array
- return a new sorted array containing the products of all combination of pairs
of number (one number from arr1, the other from arr2)

Algorithm
1. initialise an empty results array
2. take first integer from arr1
3. take first integer from arr2
4. append the product of 3. and 4. to results array
5. repeat 3-4 for all integers in the second array
6. repeat 2-5 for all integers in the first array
7. return sorted result
*/

function multiplyAllPairs(arr1, arr2) {
  let result = [];

  for (let num1 of arr1) {
    for (let num2 of arr2) {
      result.push(num1 * num2);
    }
  }

  return result.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]