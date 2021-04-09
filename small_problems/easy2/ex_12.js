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

function signedIntegerToString(integer) {
  switch(Math.sign(integer)) {
    case 1:
      return '+' + integerToString(integer);
    case -1:
      return '-' + integerToString(-integer);
    default:
      return integerToString(integer);
  }
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");