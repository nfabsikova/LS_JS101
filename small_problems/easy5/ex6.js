/*
Problem:
  - input: array of integers
  - output: string
- return string, which shows the result of multiplying all the integers
and dividing by the number of them, rounded to 3 decimal places

Algorithm:
1. multiply all the integers and assign to variable result
2. divide result by the length of the array
3. convert result to string with 3 decimal places
4. return result
*/

function multiplicativeAverage(numbers) {
  let result = numbers.reduce((acc, curr) => acc * curr);
  result /= numbers.length;
  return result.toFixed(3);
}

console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"