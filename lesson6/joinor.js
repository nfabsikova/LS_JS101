/*
Problem
  - input: array, delimiter (default comma with space), 
  join word (or by default)
  - output: string
- return all of the input array's elements joined with the specified
delimiter and with the last element preceded by join word
- join word comes before the last element
- empty array returns an empty string
- one element array returns just the element as a string
- two element array doesn't use delimiter, just the connecting word
- delimiter comes after each element except the last one / delimiter
comes before each element except the first one

Algorithm
1. if array is empty return empty string
2. if it has one element return the element as a string
3. if it has two elements return them joined by the join word
4. if it has three or more values return them with delimiter between each
pair and the join word before last element
*/

function joinOr(arr, delimiter = ', ', joinWord = 'or') {
  if (arr.length === 0) return '';
  if (arr.length === 1) return `${arr[0]}`;
  if (arr.length === 2) return `${arr[0]} ${joinWord} ${arr[1]}`;

  arr[arr.length - 1] = `${joinWord} ${arr[arr.length - 1]}`;
  return arr.join(delimiter);
}

console.log(joinOr([1, 2, 3]));               // => "1, 2, or 3"
console.log(joinOr([1, 2, 3], '; '));         // => "1; 2; or 3"
console.log(joinOr([1, 2, 3], ', ', 'and'));  // => "1, 2, and 3"
console.log(joinOr([]));                      // => ""
console.log(joinOr([5]));                     // => "5"
console.log(joinOr([1, 2]));                  // => "1 or 2"