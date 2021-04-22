/* 
Problem
 - input: array of integers
 - output: new array of integers
- return a new array with the input array sorted based on the alphabetic
order of the english words for individual numbers

Algorithm
1. create an array of english words
2. map the input integers to corresponding english words based on index
3. sort the array of words
4. map the array back to numbers
*/

function alphabeticNumberSort(nums) {

  const words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 
    'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 
    'sixteen', 'seventeen', 'eighteen', 'nineteen'];

  return nums.map(num => words[num])
    .sort()
    .map(word => words.indexOf(word));
}

console.log(alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]