function stringToInteger(string) {
  const DIGITS = {
    0 : 0,
    1 : 1,
    2 : 2,
    3 : 3,
    4 : 4,
    5 : 5,
    6 : 6,
    7 : 7,
    8 : 8,
    9 : 9
  };
  let arrayOfDigits = string.split("").map(char => DIGITS[char]);
  let value = 0;
  arrayOfDigits.forEach(digit => (value = (10 * value) + digit));
  return value;
}

function hexadecimalToInteger(string) {
  const DIGITS = {0 : 0, 1 : 1, 2 : 2, 3 : 3, 4 : 4, 5 : 5, 6 : 6,
    7 : 7, 8 : 8, 9 : 9, A : 10, B : 11, C : 12, D : 13, E : 14, F : 15 };
  let digitsArray = string.split("").map(char => DIGITS[char.toUpperCase()]).reverse();
  let value = 0;

  for (let idx = 0; idx < digitsArray.length; idx++) {
    value += (digitsArray[idx] * Math.pow(16, idx));
  }

  return value;
}

console.log(stringToInteger("4321")); // logs true
console.log(stringToInteger("570")); // logs true

console.log(hexadecimalToInteger('4D9f') === 19871);