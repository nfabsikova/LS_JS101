/*
Problem
  - input: string
  - output: boolean
- return true if parentheses in the string are balanced (each '(' has its
')' ), false otherwise
- the number of ( has to be the same as the number of )
- but this is not enough because ) cannot precede (

Algorithm
1. initialise variable toBalance as 0
2. go through all of the characters in the input string
3. if you find '(', increase toBalance by 1
4. if you find ')' and toBalance is positive, decrease it by one
5. if you find ')' and to Balance is negative return false
6. return true if toBalance is 0, false if it is positive (can't be neg)
*/
const pairs = {
  paren: {left: '(', right: ')'},
  square: {left: '[', right: ']'},
  curly: {left: '{', right: '}'},
  singleQ: {left: "'"},
  doubleQ: {left: '"'}
};

function isBalanced(string) {
  let toBalance = {};
  let leftChars = Object.values(pairs).map(el => el.left);
  let rightChars = Object.values(pairs).map(el => el.right);

  for (let char of string) {
    if (leftChars.includes(char)) {
      let key = Object.keys(pairs).find(key => pairs[key].left === char);
      toBalance[key] = toBalance[key] || 0;
      toBalance[key] += 1;
    }

    if (rightChars.includes(char)) {
      let key = Object.keys(pairs).find(key => pairs[key].right === char);
      if (!toBalance[key]) return false;
      toBalance[key] -= 1;
    }
  }

  return assessBalance(toBalance);
}

function assessBalance(obj) {
  let singleChars = ['singleQ', 'doubleQ'];

  for (let key in obj) {
    if (singleChars.includes(key)) {
      obj[key] %= 2;
    }
  }

  return Object.values(obj).every(el => el === 0);
}

// console.log(isBalanced("What (is) this?") === true);
// console.log(isBalanced("What is) this?") === false);
// console.log(isBalanced("What (is this?") === false);
// console.log(isBalanced("((What) (is this))?") === true);
// console.log(isBalanced("((What)) (is this))?") === false);
// console.log(isBalanced("Hey!") === true);
// console.log(isBalanced(")Hey!(") === false);
// console.log(isBalanced("What ((is))) up(") === false);

console.log(isBalanced("What)( {'[(is)]}' this?"));
// console.log(isBalanced("What is) this?"));
// console.log(isBalanced("What (is this?"));
// console.log(isBalanced("((What) (is this))?"));
// console.log(isBalanced("((What)) (is this))?") === false);
// console.log(isBalanced("Hey!") === true);
// console.log(isBalanced(")Hey!(") === false);
// console.log(isBalanced("What ((is))) up(") === false);