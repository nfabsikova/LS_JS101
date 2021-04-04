const readline = require('readline-sync');

let integer;
while (true) {
  integer = Number(readline.question("Please enter an integer greater than 0: "));
  if (integer > 0) break;
}

let operation;
while (true) {
  operation = readline.question('Enter "s" to compute the sum, or "p" to compute the product. ');
  if (['s', 'p'].includes(operation)) break;
}

operation = (operation === 's' ? 'sum' : 'product');

//Build array
let numbers = [];
for (let num = 1; num <= integer; num++) {
  numbers.push(num);
}

//Calculate result
let result;
if (operation === 'sum') {
  result = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
} else if (operation === 'product') {
  result = numbers.reduce((accumulator, currentValue) => accumulator * currentValue);
}

console.log(`The ${operation} of the integers between 1 and ${integer} is ${result}.`);



