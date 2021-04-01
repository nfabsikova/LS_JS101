const readline = require('readline-sync');
const LANGUAGE = 'sk';
const MESSAGES = require('./calculator_messages.json')[LANGUAGE];

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt(MESSAGES.welcome);

while (true) {
  // Ask the user for the first number.
  prompt(MESSAGES.firstNumber);
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(MESSAGES.invalidNumber);
    number1 = readline.question();
  }

  // Ask the user for the second number.
  prompt(MESSAGES.secondNumber);
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(MESSAGES.invalidNumber);
    number2 = readline.question();
  }

  // Ask the user for an operation to perform.
  prompt(MESSAGES.operation);
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(MESSAGES.invalidOperation);
    operation = readline.question();
  }

  // Perform the operation on the two numbers.
  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  // Print the result to the terminal.
  prompt(MESSAGES.result + output);

  //Ask if user wants to perform next calculation
  prompt(MESSAGES.repeat);
  let answer = readline.question();

  if (answer[0].toLowerCase() !== 'y') break;
}


