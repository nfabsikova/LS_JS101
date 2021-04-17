/*
Problem
  - input: number
  - output: new number
- return number with the inputs number's digits reversed
*/

function reverseNumber(number) {
  let reversedArray = String(number).split('').reverse().join('');

  return Number(reversedArray);
}

console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21 -- Note that leading zeros in the result get dropped!
console.log(reverseNumber(1));        // 1