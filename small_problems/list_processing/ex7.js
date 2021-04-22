/*
Problem
  - input: array of numbers
  - output: number
- return a sum of the sums of each leading subsequence in the array

Algorithm
1. initialise an empty toSum array and set variable sum to 0
2. add the first element from the input array to the toSum array
3. add the sum of toSum array to the variable sum
4. repeat 2-3 for all the elements in the input array
5. return the sum variable
*/

function sumOfSums(nums) {
  let toSum = [];
  let sum = 0;

  for (let idx = 0; idx < nums.length; idx++) {
    toSum.push(nums[idx]);
    sum += toSum.reduce((acc, curr) => acc + curr);
  }

  return sum;
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35