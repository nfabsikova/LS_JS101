/*
Problem
  input: array
  output: nested array with two (array) elements
- return array with two nested arrays, each one includes half of the
  elements of the input array
- if there is an odd number of elements in the input array, the middle
  element is assigned to the first nested array
- if array length is odd, first array gets all the elements up to an
  index which is equal to the length of the input array - 1 divided by two
- if the array length is even, first array gets all the elements up to
  an index which is equal length of the input array - 1 divided by two
  rounded down to the nearest integer

Algorithm
1. find the index of the halfway point
2. create the first half array assigning it all the elements of the
  input array up to the defined halfway point
3. create the second half array assigning it all the elements of the
  input layer starting from an index one greater than the defined
  halfway point up until the end
4. return results array, with first half array as its first element
  and second half array as its second element
*/

//Code
function halvsies(arr) {
  let halfwayIndex = Math.floor((arr.length - 1) / 2);
  let firstHalf = arr.slice(0, halfwayIndex + 1);
  let secondHalf = arr.slice(halfwayIndex + 1);
  return [firstHalf, secondHalf];
}

//Examples
console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]