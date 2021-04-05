function multiply(num1, num2) {
  return num1 * num2;
}

function square(num, power) {
  let result = num;
  for (let counter = 1; counter < power; counter++) {
    result = multiply(result, num);
  }
  return result;
}

console.log(square(5, 3)); // logs true
console.log(square(-8, 3)); // logs true