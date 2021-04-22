/* 
Problem:
  - input: integer number
  - output: integer number
- return sum of digits of input integer
*/

function sum(num) {
  let digits = String(num).split('');
  return digits.reduce((sum, digit) => sum + Number(digit), 0);
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45