function multisum(integer) {
  let multiples = [];

  //Build an array
  for (let number = 1; number <= integer; number++) {
    if (number % 3 === 0) {
      multiples.push(number);
    } else if (number % 5 === 0) {
      multiples.push(number);
    }
  }

  //Return the sum of array
  return multiples.reduce((acc, currentValue) => acc + currentValue);
}

console.log(multisum(3));
console.log(multisum(5));
console.log(multisum(10));
console.log(multisum(1000));