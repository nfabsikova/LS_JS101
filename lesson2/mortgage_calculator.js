//Constants
const readline = require('readline-sync');
const LOCALE = 'en-US';
const LANGUAGE = LOCALE.slice(0, 2);
const REGION = LOCALE.slice(3, 5);
const MESSAGES = require('./mortgage_messages.json')[LANGUAGE];

//Functions
function prompt(message) {
  console.log("> " + message);
}

function input(message) {
  return readline.question("==> " + message + ": ");
}

function output(message, value) {
  console.log("- " + message + ": " + formatResult(value));
}

function invalidNumber(number) {
  return number.trim() === '' || Number.isNaN(Number(number));
}

function invalidInput(number, allowZero, requireInteger) {
  if (invalidNumber(number)) return true;
  else if (allowZero && number < 0) return true;
  else if (requireInteger && !Number.isInteger(Number(number))) return true;
  else return number <= 0;
}

function getInput(inputName, allowZero = false, requireInteger = false) {
  prompt(MESSAGES[inputName + "Prompt"]);
  let inputVariable = input(MESSAGES[inputName + "Input"]);

  while (invalidInput(inputVariable, allowZero, requireInteger)) {
    prompt(MESSAGES[inputName + "Invalid"]);
    inputVariable = input(MESSAGES[inputName + "Input"]);
  }
  return Number(inputVariable);
}

function calculateMonthlyPayment(loanAmount, interestMonthly, durationMonths) {
  if (interestMonthly === 0) {
    return loanAmount / durationMonths;
  }
  return loanAmount *
  (interestMonthly / (1 - Math.pow((1 + interestMonthly), (-durationMonths))));
}

function formatResult(number) {
  return number.toLocaleString(LOCALE, {style: 'currency', currency: MESSAGES.currency[REGION] });
}


//Welcome the user
console.clear();

prompt(MESSAGES.welcome);

while (true) {

  let loanAmount = getInput("loanAmount");
  let durationYears = getInput("loanDuration", false, true);
  let interestAnnual = getInput("apr", true);

  //Calculate formula input values
  let durationMonths = durationYears * 12;
  let interestMonthly = (interestAnnual / 100) / 12;

  //Calculate results
  let monthlyPayment = calculateMonthlyPayment(loanAmount,
    interestMonthly, durationMonths);
  let totalPayment = monthlyPayment * durationMonths;
  let totalInterest = totalPayment - loanAmount;

  //Print results
  prompt(MESSAGES.seeResults);
  output(MESSAGES.monthlyPayment, monthlyPayment);
  output(MESSAGES.totalPayment, totalPayment);
  output(MESSAGES.totalInterest, totalInterest);

  //Ask if user wants to perform another calculation
  prompt(MESSAGES.repeatPrompt);
  let repeat = input(MESSAGES.repeatInput).toLowerCase();

  while (!MESSAGES.repeatOptions.includes(repeat)) {
    prompt(MESSAGES.repeatInvalid);
    repeat = input(MESSAGES.repeatInput).toLowerCase();
  }

  if (repeat === "n") break;

  console.clear();

}