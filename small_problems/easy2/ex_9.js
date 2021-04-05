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

function stringToInteger(string) {
  let number = 0;
  let multiplier = 1;

  for (let idx = string.length - 1; idx >= 0; idx--) {
    number += DIGITS[string[idx]] * multiplier;
    multiplier *= 10;
  }
  return number;
}

//write one using array methods

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true