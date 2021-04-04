const readline = require('readline-sync');

let billAmount = Number(readline.question('What is the bill? '));
let tipPercentage = Number(readline.question("What is the tip percentage? "));

let tip = (billAmount * tipPercentage) / 100;
let billTotal = billAmount + tip;

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${billTotal.toFixed(2)}`);