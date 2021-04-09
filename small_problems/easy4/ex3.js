const readline = require('readline-sync');

let age = Number(readline.question("What is your age? "));
let retireAge = Number(readline.question("At what age would you like to retire? "));

let currentYear = new Date().getFullYear();
let yearsToGo = retireAge - age;

console.log(`It's ${currentYear}. You will retire in ${currentYear + yearsToGo}`);
console.log(`You have only ${yearsToGo} years of work to go!`)