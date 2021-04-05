let numbers = [1, 2, 3, 4, 5];
let numbersReversed = numbers.slice().reverse();
let numbersSorted = [...numbers].sort((num1, num2) => num2 - num1);

let bonusArray = [];
numbers.forEach(num => bonusArray.unshift(num));

console.log(numbers);
console.log(numbersReversed);
console.log(numbersSorted);
console.log(bonusArray);

