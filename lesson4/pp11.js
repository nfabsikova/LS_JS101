let statement = "The Flintstones Rock";

let frequencies = {};

statement.split('')
  .forEach(char => {
    if (char !== ' ') {
      frequencies[char] = frequencies[char] || 0;
      frequencies[char] += 1;
    }
  });

console.log(frequencies);

