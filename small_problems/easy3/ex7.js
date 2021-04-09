function twice(number) {
  let string = String(number);

  if (string.length % 2 === 0) {
    let half = string.length / 2;
    if (string.slice(0, half) === string.slice(half)) {
      return number;
    }
  }
  return number * 2;
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676