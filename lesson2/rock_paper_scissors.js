const readline = require('readline-sync');
const REQUIRED_NUM_WINS = 5;
const CHOICES = {
  rock : {shorthand : 'r', beats : ['scissors', 'lizard']},
  scissors : {shorthand : 's', beats : ['paper', 'lizard']},
  paper : {shorthand : 'p', beats : ['rock', 'spock']},
  lizard : {shorthand : 'l', beats : ['paper', 'spock']},
  spock : {shorthand : 'sp', beats : ['rock', 'scissors']}
};

let scores;

function prompt(message) {
  console.log(`> ${message}`);
}

function input() {
  return readline.question("==> ");
}

function formatResult(message) {
  return `\n*** ${message} ***\n`;
}

function consoleDivider() {
  console.log('-----------------------------------------------------');
}

function choicesAsString() {
  let choiceArray = [];
  for (let key in CHOICES) {
    choiceArray.push(key + " (" + CHOICES[key].shorthand + ")");
  }
  return choiceArray.join(", ");
}

function shorthandsAsString() {
  let shorthandArray = [];
  for (let key in CHOICES) {
    shorthandArray.push("'" + CHOICES[key].shorthand + "'");
  }
  return shorthandArray.join(", ");
}

function displayWelcome() {
  console.clear();
  prompt(`Welcome to ${Object.keys(CHOICES).join(', ')}!`);
  consoleDivider();
  prompt("Whoever wins five rounds becomes the grand winner.");
}

function isWinner() {
  return (scores.player === REQUIRED_NUM_WINS) ||
  (scores.computer === REQUIRED_NUM_WINS);
}

function promptContinue() {
  prompt("Press enter to continue.");
  readline.question();
  console.clear();
}

function displayScores() {
  prompt(`SCORE: Player: ${scores.player}, Computer: ${scores.computer}`);
  consoleDivider();
}

function assignChoice(letter) {
  for (let fullChoice in CHOICES) {
    if (CHOICES[fullChoice].shorthand === letter) return fullChoice;
  }
  return null;
}

function getPlayerChoice() {
  prompt(`Choose one: ${choicesAsString()}`);
  let choiceShorthand = input().toLowerCase();
  let choice = assignChoice(choiceShorthand);

  while (!choice) {
    prompt(`That's not a valid choice. Please enter one of: ${shorthandsAsString()}`);
    choiceShorthand = input().toLowerCase();
    choice = assignChoice(choiceShorthand);
  }
  return choice;
}

function returnComputerChoice() {
  let randomIndex = Math.floor(Math.random() * Object.keys(CHOICES).length);
  return Object.keys(CHOICES)[randomIndex];
}

function returnWinner(choice, computerChoice) {
  if (choice === computerChoice) {
    return 'tie';
  } else if (CHOICES[choice]['beats'].includes(computerChoice)) {
    return 'player';
  } else {
    return 'computer';
  }
}

function displayRoundResult(choice, computerChoice, winner) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  switch (winner) {
    case 'player':
      console.log(formatResult('You win!'));
      break;
    case 'computer':
      console.log(formatResult('Computer wins!'));
      break;
    default:
      console.log(formatResult("It's a tie."));
  }
}

function incrementScore(winner) {
  scores[winner] += 1;
}

function displayGrandResult() {
  consoleDivider();
  if (scores.player > scores.computer) {
    console.log(formatResult("Congratulations, you are the grand winner!"));
  } else {
    console.log(formatResult("Oops, computer is the grand winner. Better luck next time!"));
  }
}

function promptNewGame() {
  prompt("Do you want to play another game? (y/n)");
  let answer = input().toLowerCase();

  while (!['y', 'n'].includes(answer)) {
    prompt("That's not a valid input. Please enter 'y' or 'n'.");
    answer = input().toLowerCase();
  }
  return answer === 'y';
}

while (true) {

  scores = {player: 0, computer: 0};

  displayWelcome();

  while (!isWinner()) {

    promptContinue();
    displayScores();

    let playerChoice = getPlayerChoice();
    let computerChoice = returnComputerChoice();
    let winner = returnWinner(playerChoice, computerChoice);

    displayRoundResult(playerChoice, computerChoice, winner);
    incrementScore(winner);
  }

  displayGrandResult();

  if (!promptNewGame()) break;
}

let a = [undefined, undefined, undefined];
let aKeys = Object.keys(a);
console.log(aKeys.length);
console.log(a.length);
