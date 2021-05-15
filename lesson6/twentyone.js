const readline = require('readline-sync');

const SUITS = ['♥', '♠', '♦', '♣'];
const VALUES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];

const TARGET_VALUE = 21;
const DEALER_HIT_MAX = 17;

const WINNING_SCORE = 5;

function joinAnd(arr, delimiter = ', ', joinWord = 'and') {
  if (arr.length === 0) return '';
  if (arr.length === 1) return `${arr[0]}`;
  if (arr.length === 2) return `${arr[0]} ${joinWord} ${arr[1]}`;

  arr[arr.length - 1] = `${joinWord} ${arr[arr.length - 1]}`;
  return arr.join(delimiter);
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function highlight(message) {
  console.log(`*** ${message} ***`);
}

function breakLine() {
  console.log('_______________________________________________________');
  console.log('');
}

function welcome() {
  console.clear();
  highlight("Welcome to the game of Twenty-One!");
  console.log('');

  console.log("The goal of the game is to get closer to a total sum of 21 points \nworth of cards than the dealer.");
  console.log('');

  console.log("Numbered cards are worth their number's points.");
  console.log("Jack, Quen and King are worth 10 points each.");
  console.log("Ace is worth 1 or 11 points depending on what is better for you.");
  console.log('');

  console.log("But beware, if you go over 21 points, you lose.");
  console.log('');

  console.log(`Whoever wins ${WINNING_SCORE} rounds wins the whole match.`);
  console.log('');

  readline.question("Press any key to start the game.");
  console.clear();
}

function initializeScores() {
  return {player: 0, dealer: 0};
}

function initializeDeck() {
  let deck = [];

  for (let suit of SUITS) {
    for (let value of VALUES) {
      let card = {suit: suit, value: value};
      deck.push(card);
    }
  }

  shuffle(deck);

  return deck;
}

function shuffle(deck) {
  for (let index = deck.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
    [deck[index], deck[otherIndex]] = [deck[otherIndex], deck[index]]; // swap elements
  }
}

function initializeHands(deck) {
  return {player: deck.splice(0, 2), dealer: deck.splice(0, 2)};
}

function dealCard(hand, deck) {
  hand.push(...deck.splice(0, 1));
}

function handValues(hand) {
  return hand.map(card => card.value);
}

function handCards(hand) {
  return hand.map(card => card.suit + card.value);
}

function returnAceValue(totalValue) {
  return (totalValue + 11 <= TARGET_VALUE) ? 11 : 1;
}

function total(hand) {
  let nonAceValues = handValues(hand).filter(val => val !== 'Ace');
  let aceValues = handValues(hand).filter(val => val === 'Ace');

  let sum = 0;

  for (let value of nonAceValues) {
    if (['Jack', 'Queen', 'King'].includes(value)) {
      sum += 10;
    } else {
      sum += Number(value);
    }
  }

  for (let count = 0; count < aceValues.length; count++) {
    sum += returnAceValue(sum);
  }

  return sum;
}

function formatCards(hand, totalValue) {
  return `${joinAnd(handCards(hand))}, with a total of ${totalValue}`;
}

function hideCards(hand) {
  let plural = (hand.length > 2 ? 's' : '');
  return `${handCards(hand)[0]} and ${hand.length - 1} unknown card${plural}.`;
}

function displayCards(hands, totals) {
  console.log(`Dealer has: ${hideCards(hands.dealer)}`);
  console.log(`You have: ${formatCards(hands.player, totals.player)}.`);
}

function displayScore(scores) {
  console.log('-------------------------------');
  console.log(`| SCORE: Player: ${scores.player}, Dealer: ${scores.dealer} |`);
  console.log('-------------------------------');
  console.log('');
}

function busted(totalValue) {
  return totalValue > 21;
}

function revealCards(hands, totals) {
  console.log(`The dealer had: ${formatCards(hands.dealer, totals.dealer)}.`);
  console.log(`You had: ${formatCards(hands.player, totals.player)}.`);
  console.log('');
}

function determineWinner(totals) {

  if (totals.player > TARGET_VALUE) {
    return 'dealer';
  } else if (totals.dealer > TARGET_VALUE) {
    return 'player';
  } else if (totals.player > totals.dealer) {
    return "player";
  } else if (totals.player < totals.dealer) {
    return "dealer";
  } else {
    return "tie";
  }
}

function displayWinner(totals) {
  let winner = determineWinner(totals);

  if (winner === 'player') {
    highlight("You won!");
  } else if (winner === 'dealer') {
    highlight("The dealer won!");
  } else {
    highlight("It's a tie!");
  }
}

function incrementScore(scores, totals) {
  let winner = determineWinner(totals);

  if (winner !== 'tie') {
    scores[winner] += 1;
  }
}

function displayBusted(totals) {
  let winner = determineWinner(totals);
  let busted = (winner === 'player' ? "The dealer" : "You");

  breakLine();
  console.log(`${busted} busted!`);
  console.log('');
}

function displayStay(person) {
  let stayPlayer = (person === 'player' ? 'You' : 'The dealer');

  console.log('');
  console.log(`${stayPlayer} chose to stay.`);
}

function playerTurn(hands, deck, scores, totals) {
  while (true) {
    let answer;

    while (true) {
      console.log('');
      prompt("Hit or stay? Please press 'h' or 's'.");
      answer = readline.question().toLowerCase();
      if (['h', 's'].includes(answer)) break;
      console.log("Sorry, that's not a valid answer");
    }


    if (answer === 'h') {
      console.clear();
      dealCard(hands.player, deck);

      totals.player = total(hands.player);

      displayScore(scores);
      displayCards(hands, totals);
    }

    if (answer === 's' || busted(totals.player)) break;
  }
}

function dealerTurn(hands, deck, totals) {
  while (totals.dealer < DEALER_HIT_MAX) {
    breakLine();
    console.log("The dealer chose to hit.");
    console.log('');

    dealCard(hands.dealer, deck);
    totals.dealer = total(hands.dealer);

    console.log(`The dealer has: ${hideCards(hands.dealer)}`);
  }
}

function promptReveal() {
  breakLine();
  console.log("Press any key to reveal the results.");
  readline.question();
  console.clear();
}

function isMatchWinner(scores) {
  return scores.player === WINNING_SCORE ||
    scores.dealer === WINNING_SCORE;
}

function promptNewRound() {
  breakLine();
  console.log("Press any key to start the next round.");
  readline.question();
  console.clear();
}

function returnMatchWinner(scores) {
  return Object.keys(scores)
    .filter(key => scores[key] === WINNING_SCORE);
}

function displayMatchWinner(scores) {
  breakLine();
  highlight(`The ${returnMatchWinner(scores)} is the winner of the whole match!`);
}

function playAgain() {
  let answer;

  while (true) {
    console.log('');
    prompt("Do you wish to play again? Please press 'y' or 'n'.");
    answer = readline.question().toLowerCase();
    if (['y', 'n'].includes(answer)) break;
    console.log("Sorry, that's not a valid choice.");
  }

  return answer === 'y';
}

while (true) {
  welcome();

  let scores = initializeScores();

  while (true) {
    let deck = initializeDeck();
    let hands = initializeHands(deck);

    let totals = {player: total(hands.player), dealer: total(hands.dealer)};

    displayScore(scores);
    displayCards(hands, totals);

    while (true) {
      playerTurn(hands, deck, scores, totals);

      if (busted(totals.player)) {
        displayBusted(totals);
        break;
      } else {
        displayStay('player');
      }

      dealerTurn(hands, deck, totals);

      if (busted(totals.dealer)) {
        displayBusted(totals);
        break;
      } else {
        displayStay('dealer');
      }

      promptReveal();
      break;
    }

    revealCards(hands, totals);
    displayWinner(totals);

    incrementScore(scores, totals);

    if (isMatchWinner(scores)) break;

    promptNewRound();
  }

  displayMatchWinner(scores);

  if (!playAgain()) {
    console.log("\nThank you for playing the game of Twenty-One!\n");
    break;
  }
}

