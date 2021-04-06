let numbers = [1, 2, 3, 4];

numbers.length = 0;
console.log(numbers);

numbers = [1, 2, 3, 4];
let numbersLength = numbers.length;

for (let idx = 0; idx < numbersLength; idx++) {
  numbers.pop();
}

console.log(numbers);

numbers = [1, 2, 3, 4];

while (numbers.length) {
  numbers.shift();
}
console.log(numbers);

numbers = [1, 2, 3, 4];
numbers.splice(0, numbers.length);

console.log(numbers);