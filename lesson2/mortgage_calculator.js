//Constants
const readline = require('readline-sync');
const LOCALE = 'en-US';

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

function calculateMonthlyPayment(loanAmount, interestMonthly, durationMonths) {
  return loanAmount * (interestMonthly / (1 - Math.pow((1 + interestMonthly), (-durationMonths))));
}

function formatResult(number) {
  return number.toLocaleString(LOCALE, {style: 'currency', currency: 'USD' });
}

//Welcome the user
prompt("Welcome to the Mortgage Loan Calculator!");

//Ask the user for loan amount until valid
prompt("Please enter the loan amount.");
let loanAmount = input("Amount in $");

while (invalidNumber(loanAmount)) {
  prompt("Entered loan amount is not valid. Please enter valid loan amount.");
  loanAmount = input("Amount in $");
}

//Ask the user for duration in years until valid
prompt("Please enter the loan duration.");
let durationYears = input("Duration in years");

while (invalidNumber(durationYears)) {
  prompt("Entered loan duration is not valid. Please enter valid loan duration.")
  durationYears = input("Duration in years");
}

//Ask the user for APR
prompt("Please enter the Annual Percentage Rate (APR) in % (e.g. 5%)")
let interestAnnual = input("APR in %");

while (invalidNumber(interestAnnual)) {
  prompt("Entered APR is not valid. Please enter valid APR.");
  interestAnnual = input("APR in %");
}

//Calculate formula input values
let durationMonths = durationYears * 12;
let interestMonthly = (interestAnnual / 100) / 12;

//Calculate results
let monthlyPayment = calculateMonthlyPayment(loanAmount, interestMonthly, durationMonths);
let totalPayment = monthlyPayment * durationMonths;
let totalInterest = totalPayment - loanAmount;

//Print results
prompt("Please see your results below.");
output("Monthly payment", monthlyPayment);
output("Total payment", totalPayment);
output("Total interest", totalInterest);