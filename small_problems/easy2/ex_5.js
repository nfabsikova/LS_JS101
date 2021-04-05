const readline = require('readline-sync');

function prompt(message) {
  console.log(`==> ${message}`);
}

prompt("Enter the first number: ");
let num1 = Number(readline.question());

prompt("Enter the second number: ");
let num2 = Number(readline.question());

prompt(`${num1} + ${num2} = ${num1 + num2}`);
prompt(`${num1} - ${num2} = ${num1 - num2}`);
prompt(`${num1} * ${num2} = ${num1 * num2}`);
prompt(`${num1} / ${num2} = ${Math.floor(num1 / num2)}`);
prompt(`${num1} % ${num2} = ${num1 % num2}`);
prompt(`${num1} ** ${num2} = ${num1 ** num2}`);
