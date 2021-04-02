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

function invalidInput(number, allowZero = false) {
  if (allowZero) {
    return invalidNumber(number) || number < 0;
  }
  return invalidNumber(number) || number <= 0;
}

function calculateMonthlyPayment(loanAmount, interestMonthly, durationMonths) {
  if (interestMonthly === 0) {
    return loanAmount / durationMonths;
  }
  return loanAmount * (interestMonthly / (1 - Math.pow((1 + interestMonthly), (-durationMonths))));
}

function formatResult(number) {
  return number.toLocaleString(LOCALE, {style: 'currency', currency: MESSAGES.currency[REGION] });
}


//Welcome the user
prompt(MESSAGES.welcome);

while (true) {
  //Ask the user for loan amount until valid
  prompt(MESSAGES.loanAmountPrompt);
  let loanAmount = input(MESSAGES.loanAmountInput);

  while (invalidInput(loanAmount)) {
    prompt(MESSAGES.loanAmountInvalid);
    loanAmount = input(MESSAGES.loanAmountInput);
  }

  //Ask the user for duration in years until valid
  prompt(MESSAGES.loanDurationPrompt);
  let durationYears = input(MESSAGES.loanDurationInput);

  while (invalidInput(durationYears)) {
    prompt(MESSAGES.loanDurationInvalid);
    durationYears = input(MESSAGES.loanDurationInput);
  }

  //Ask the user for APR
  prompt(MESSAGES.aprPrompt);
  let interestAnnual = input(MESSAGES.aprInput);

  while (invalidInput(interestAnnual, true)) {
    prompt(MESSAGES.aprInvalid);
    interestAnnual = input(MESSAGES.aprInput);
  }

  //Calculate formula input values
  let durationMonths = durationYears * 12;
  let interestMonthly = (interestAnnual / 100) / 12;

  //Calculate results
  let monthlyPayment = calculateMonthlyPayment(loanAmount, interestMonthly, durationMonths);
  let totalPayment = monthlyPayment * durationMonths;
  let totalInterest = totalPayment - loanAmount;

  //Print results
  prompt(MESSAGES.seeResults);
  output(MESSAGES.monthlyPayment, monthlyPayment);
  output(MESSAGES.totalPayment, totalPayment);
  output(MESSAGES.totalInterest, totalInterest);

  //Ask if user wants to perform another calculation
  prompt(MESSAGES.repeat);
  let repeat = input("Press y for repeating");

  if (repeat === "" || !MESSAGES.affirmation.includes(repeat.toLowerCase())) {
    break;
  }

}
