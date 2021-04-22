/*
Problem
  - input: two-dimensional array
  - output: new one-dimensional array
- given an array of arrays with fruit name and quantity, return an array of
fruit names repeated as many times as the indicated quantity

Algorithm
1. initialise an empty result array
2. take the first sub-array from the input array
3. push the fruit name (idx 0) to result array quantity times (idx 1)
4. repeat 2-3 for all sub-arrays
5. return the result array
*/

function buyFruit(list) {
  let result = [];

  list.forEach(subArr => {
    for (let counter = 0; counter < subArr[1]; counter++) {
      result.push(subArr[0]);
    }
  });

  return result;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]