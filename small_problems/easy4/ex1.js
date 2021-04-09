function randomBetween(min, max) {
  if (min > max) {
    [min, max] = [max, min];
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomAge = randomBetween(120, 20);

console.log(`Teddy is ${randomAge} years old!`);