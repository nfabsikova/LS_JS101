/* 
Algorithm:
1. initialise result array
2. initialise currentIndex to 0
3. push the element at currentIndex in array1 to result
4. push the element at currentIndex in array2 to result
5. repeat 3-4 for all indices up until the lenght of the input arrays
*/

//Basic looping
function interleave(arr1, arr2) {
  let result = [];

  for (let idx = 0; idx < arr1.length; idx++) {
    result.push(arr1[idx]);
    result.push(arr2[idx]);
  }

  return result;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]

//forEach
let arr1 = [1, 2, 3];
let arr2 = ['a', 'b', 'c'];
let newArray = [];

arr1.forEach((_, idx) => {
  newArray.push(arr1[idx], arr2[idx]);
});

console.log(newArray);

