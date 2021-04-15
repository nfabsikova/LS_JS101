/*
Problem
  - input: number
  - output: array of digits
- return an array of the individual digits of the input number
- the resulting array should include numbers, not strings!

Algorithm
1. convert input number to string
2. convert string to array of strings
3. convert all the string from array to numbers
3. return the resulting array
*/

function digitList(number) {
  return String(number).split('').map(digit => Number(digit));
}

console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]