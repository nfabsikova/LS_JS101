const readline = require('readline-sync');

const SUITS = ['heart', 'spade', 'diamond', 'club'];
const VALUES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];

const TARGET_VALUE = 21;
const DEALER_HIT_MAX = 17;

function joinOr(arr, delimiter = ', ', joinWord = 'or') {
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

function welcome() {
  console.clear();
  highlight("Welcome to Twenty-One!");
  console.log('');

  console.log("The goal of the game is to get closer to a total sum of 21 points \nworth of cards than the dealer.");
  console.log('');

  console.log("Numbered cards are worth their number's points.");
  console.log("Jack, Quen and King are worth 10 points each.");
  console.log("Ace is worth 1 or 11 points depending on what is better for you.");
  console.log('');

  console.log("But beware, if you go over 21 points, you lose.");
  console.log('');

  console.log("Press any key to start the game.");
  readline.question();
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

function returnAceValue(total) {
  return (total + 11 <= TARGET_VALUE) ? 11 : 1;
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

function displayCards(hands) {
  console.clear();
  console.log(`Dealer has: ${handValues(hands.dealer)[0]} and unknown card.`);
  console.log(`You have: ${joinOr(handValues(hands.player), ", ", "and")}, with a total of ${total(hands.player)}.`);
}

function busted(hand) {
  return total(hand) > 21;
}

function revealCards(hands) {
  console.clear();
  console.log(`The dealer has: ${joinOr(handValues(hands.dealer), ", ", "and")}, with a total of ${total(hands.dealer)}.`);
  console.log(`You have: ${joinOr(handValues(hands.player), ", ", "and")}, with a total of ${total(hands.player)}.`);
  console.log('');
}

function determineWinner(hands) {
  let playerTotal = total(hands.player);
  let dealerTotal = total(hands.dealer);

  if (playerTotal > dealerTotal) {
    return "player";
  } else if (playerTotal < dealerTotal) {
    return "dealer";
  } else {
    return "tie";
  }
}

function displayWinner(hands) {
  let winner = determineWinner(hands);

  if (winner === 'player') {
    highlight("You won!");
  } else if (winner === 'dealer') {
    highlight("The dealer won!");
  } else {
    highlight("It's a tie!");
  }
}

function displayBusted(hands, person) {
  let bustedPlayer = (person === 'player' ? 'You' : 'The dealer');
  let winner = (person === 'player' ? 'The dealer' : 'You');

  console.log('');
  console.log(`${bustedPlayer} busted, with a total of ${total(hands[person])}!`);
  console.log('');
  highlight(`${winner} won!`);
}

function displayStay(person) {
  let stayPlayer = (person === 'player' ? 'You' : 'The dealer');

  console.log('');
  console.log(`${stayPlayer} chose to stay.`);
}

function playerTurn(hands, deck) {
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
      dealCard(hands.player, deck);
      displayCards(hands);
    }

    if (answer === 's' || busted(hands.player)) break;
  }
}

function dealerTurn(hands, deck) {
  while (total(hands.dealer) < DEALER_HIT_MAX) {
    console.log('');
    console.log("The dealer chose to hit.");
    dealCard(hands.dealer, deck);
  }
}

function promptReveal() {
  console.log('');
  console.log("Press any key to reveal the results.");
  readline.question();
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

  let deck = initializeDeck();
  let hands = initializeHands(deck);

  displayCards(hands);

  while (true) {
    playerTurn(hands, deck);

    if (busted(hands.player)) {
      displayBusted(hands, 'player');
      break;
    } else {
      displayStay('player');
    }

    dealerTurn(hands, deck);

    if (busted(hands.dealer)) {
      displayBusted(hands, 'dealer');
      break;
    } else {
      displayStay('dealer');
    }

    promptReveal();

    revealCards(hands);
    displayWinner(hands);

    break;
  }

  if (!playAgain()) break;
}

