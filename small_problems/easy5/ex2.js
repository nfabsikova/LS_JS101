/*
Problem
  input: two arrays
  output: one new array
- return a new array which comprises the union of the two arrays
- a union is all the numbers that are in either of the arrays
- resulting array does not duplicate a number even if it was included
  in both arrays
- if both arrays are empty, return an empty array
- the resulting array will include all the elements of the first array
  plus any non-repeating elements from the second array

Algorithm
1. create the union array, which will be a copy of the first array
2. check the first element of the second array
3. if it is already included in the union array --> don't do anything
4. if it insn't already included in the union array --> add it
5. repeat steps 2-4 for all the elements of the second array
6. return the union array
*/

//Code
function union(arr1, arr2) {
  let arrUnion = arr1.slice();

  arr2.forEach(num => {
    if (!arr1.includes(num)) {
      arrUnion.push(num);
    }
  });

  return arrUnion;
}

//Examples
console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]
console.log(union([], []));