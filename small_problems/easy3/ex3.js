function stringy(integer) {
  let result = '';
  for (let idx = 0; idx < integer; idx++) {
    result += (idx % 2 === 0 ? '1' : '0');
  }
  return result;
}

console.log(stringy(6));
console.log(stringy(9));
console.log(stringy(4));
console.log(stringy(7));