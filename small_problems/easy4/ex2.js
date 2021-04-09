const readline = require('readline-sync');

let numArray = [];

numArray.push(readline.question("Enter the 1st number: "));
numArray.push(readline.question("Enter the 2nd number: "));
numArray.push(readline.question("Enter the 3rd number: "));
numArray.push(readline.question("Enter the 4th number: "));
numArray.push(readline.question("Enter the 5th number: "));

let last = readline.question("Enter the last number: ");

if (numArray.includes(last)) {
  console.log(`The number ${last} appears in ${numArray}.`);
} else {
  console.log(`The number ${last} does not appear in ${numArray}.`);
}
