const readline = require('readline-sync');

const FIRST_MOVER_MODE = 'choose';

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';

const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9],
  [1, 4, 7], [2, 5, 8], [3, 6, 9],
  [1, 5, 9], [3, 5, 7]
];

const MIDDLE_SQUARE = '5';
const WINNING_SCORE = 5;

function prompt(message) {
  console.log(`=> ${message}`);
}

function highlight(message) {
  console.log(`*** ${message} ***`);
}

function joinOr(arr, delimiter = ', ', joinWord = 'or') {
  if (arr.length === 0) return '';
  if (arr.length === 1) return `${arr[0]}`;
  if (arr.length === 2) return `${arr[0]} ${joinWord} ${arr[1]}`;

  arr[arr.length - 1] = `${joinWord} ${arr[arr.length - 1]}`;
  return arr.join(delimiter);
}

function welcome() {
  console.clear();

  highlight("Welcome to the game of Tic Tac Toe!");
  console.log('');

  console.log("The player who succeeds in placing three markers in a \nhorizontal, vertical or diagonal row wins the round.");
  console.log('');

  console.log("The squares are numbered as follows.");
  displayBoardNumbering();
  console.log('');

  console.log(`The player who wins ${WINNING_SCORE} rounds wins the overall match.`);
  console.log('');
}

function promptStart() {
  prompt("Press any key to start the game.");
  readline.question();
}

function displayInformation(score) {
  console.log('---------------------------------');
  console.log(`| SCORE: Player: ${score['Player']}, Computer: ${score['Computer']} |`);
  console.log('---------------------------------');
  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}.`);
}

function displayBoard(board) {
  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function displayBoardNumbering() {
  let board = initializeBoard();
  for (let key in board) {
    board[key] = key;
  }
  displayBoard(board);
}

function displayGameInterface(score, board) {
  console.clear();
  displayInformation(score);
  displayBoard(board);
}

function displayRoundWinner(board) {

  if (someoneWon(board)) {
    highlight(`${detectRoundWinner(board)} won the round!`);
  } else {
    highlight("It's a tie!");
  }

  console.log('');
}

function initializeScore() {
  let score = {Player: 0, Computer: 0};
  return score;
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function returnFirstMover() {
  if (FIRST_MOVER_MODE === 'choose') {
    return promptFirstMover() === 'p' ? 'player' : 'computer';
  } else {
    return FIRST_MOVER_MODE;
  }
}

function promptFirstMover() {
  while (true) {
    prompt("Choose who plays the first move. Press 'p' for player or 'c' for computer.");
    let answer = readline.question();
    if (['p', 'c'].includes(answer)) return answer;
    prompt("Sorry, that's not a valid choice");
  }
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function playerSquares(board) {
  return Object.keys(board).filter(key => board[key] === HUMAN_MARKER);
}

function computerSquares(board) {
  return Object.keys(board).filter(key => board[key] === COMPUTER_MARKER);
}

function chooseSquare(board, currentPlayer) {
  return currentPlayer === 'player' ?
    playerChoosesSquare(board) : computerChoosesSquare(board);
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square: ${joinOr(emptySquares(board))}`);
    square = readline.question().trim();

    if (emptySquares(board).includes(square)) break;

    prompt("Sorry, that's not a valid choice.");
  }

  board[square] = HUMAN_MARKER;
}

function computerChoosesSquare(board) {

  if (isOpportunity(board, 'attack')) {
    board[findAtRiskSquare(board, 'attack')] = COMPUTER_MARKER;

  } else if (isOpportunity(board, 'defence')) {
    board[findAtRiskSquare(board, 'defence')] = COMPUTER_MARKER;

  } else if (board[MIDDLE_SQUARE] === INITIAL_MARKER) {
    board[MIDDLE_SQUARE] = COMPUTER_MARKER;

  } else {
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);

    let square = emptySquares(board)[randomIndex];
    board[square] = COMPUTER_MARKER;
  }
}

function findAtRiskLines(board, mode) {
  let squaresToConsider = [];

  if (mode === 'attack') {
    squaresToConsider = computerSquares(board);
  } else if (mode === 'defence') {
    squaresToConsider = playerSquares(board);
  }

  return WINNING_LINES.filter(line => {
    return line.filter(square => {
      return squaresToConsider.includes(String(square));
    }).length === 2 && line.filter(square => {
      return emptySquares(board).includes(String(square));
    }).length === 1;
  });
}

function isOpportunity(board, mode) {
  return findAtRiskLines(board, mode).length > 0;
}

function findAtRiskSquare(board, mode) {
  let lineAtRisk = findAtRiskLines(board, mode)[0];
  console.log(lineAtRisk);
  return lineAtRisk.filter(square => {
    return emptySquares(board).includes(String(square));
  })[0];
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return !!detectRoundWinner(board);
}

function detectRoundWinner(board) {

  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [sq1, sq2, sq3] = WINNING_LINES[line];

    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }

  return null;
}
function alternatePlayer (currentPlayer) {
  return currentPlayer === 'player' ? 'computer' : 'player';
}

function playRound(score, board, firstMover) {
  let currentPlayer = firstMover;
  while (true) {
    displayGameInterface(score, board);
    chooseSquare(board, currentPlayer);
    currentPlayer = alternatePlayer(currentPlayer);
    if (someoneWon(board) || boardFull(board)) break;
  }
}

function promptNextRound() {
  prompt('Press any key to continue to the next round.');
  readline.question();
}

function incrementScore(score, board) {
  score[detectRoundWinner(board)] += 1;
  return score;
}

function isMatchWinner(score) {
  return score['Player'] === WINNING_SCORE ||
          score['Computer'] === WINNING_SCORE;
}

function detectMatchWinner(score) {
  return Object.keys(score)
    .filter(key => score[key] === WINNING_SCORE);
}

function displayMatchWinner(score) {
  highlight(`${detectMatchWinner(score)} is the grand winner!`);
  console.log('');
}

function promptNewMatch() {
  while (true) {
    prompt('Do you want to start another game? (y or n)');
    let answer = readline.question().toLowerCase()[0];
    if (['y', 'n'].includes(answer)) return answer !== 'y';
    prompt("Sorry, that's not a valid choice.");
  }
}

while (true) {
  welcome();
  let score = initializeScore();
  let firstMover = returnFirstMover();

  promptStart();

  while (true) {

    let board = initializeBoard();

    playRound(score, board, firstMover);
    incrementScore(score, board);

    displayGameInterface(score, board);
    displayRoundWinner(board);

    if (isMatchWinner(score)) break;

    promptNextRound();
  }

  displayMatchWinner(score);

  if (promptNewMatch()) break;

}

prompt('Thanks for playing Tic Tac Toe!');

