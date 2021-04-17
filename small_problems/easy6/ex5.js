function negative(num) {
  return Math.sign(num) === -1 ? num : num * -1;
}

console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0