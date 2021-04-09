function integerToString(integer) {
  const DIGITS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let string = '';

  if (integer === 0) return DIGITS[0];

  while (integer > 0) {
    let modulo = integer % 10;
    string = DIGITS[modulo] + string;
    integer = (integer - modulo) / 10;
  }
  return string;
}

console.log(integerToString(4321));
console.log(integerToString(0));
console.log(integerToString(5000));
console.log(integerToString(1234567890));