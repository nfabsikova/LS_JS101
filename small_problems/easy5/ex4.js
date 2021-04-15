/*
Problem
  input: array of numbers
  output: a number
- return a number which occurs twice in the input array
- I assume that the input will be valid - exactly one value occurs
  twice, all the others occur once
- can I mutate the original array?

Algorithm
1. assign the first element of the input array to a toCompare variable
2. compare the second element of the array with the toCompare variable
3. if they are the same, return the element
4. if they are not, do nothing
5. repeat steps 2-4 for all the elements of the array
6. if no match is found, remove the first element from the array
7. assign the second element of the input array to a toCompare variable
8. repeat steps 2-7 for all the elements of the array until match is found
*/

//Code
function findDup(arr) {

  while (arr.length) {
    let numToCompare = arr[0];

    for (let idx = 1; idx < arr.length; idx++) {
      if (arr[idx] === numToCompare) {
        return numToCompare;
      }
    }
    arr.shift();
  }
}

//Examples
console.log(findDup([1, 5, 3, 1]));                                // 1
console.log(findDup(
  [ 18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
    38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
    14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
    78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
    89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
    41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
    55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
    85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
    40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
    7, 34, 57, 74, 45, 11, 88, 67,  5, 58]));    // 73