/*
Problem
  - input: string
  - output: array of strings
- return an array of all substring palindromes of the input string
- since I already have a function to get all the substrings, these just
need to be filtered to include only palindromes
- one character long string is not a palindrome

Algorithm
1. create a function for checking palindromes
  - input string output true when the string is equal to its reverse,
  output false if it's not or is one character long
2. return array of all substrings filtered by isPalindrome
*/

function leadingSubstrings(string) {
  let result = [];
  for (let idx = 1; idx <= string.length; idx++) {
    result.push(string.slice(0, idx));
  }
  return result;
}

function substrings(string) {
  let result = [];
  for (let idx = 0; idx < string.length; idx++) {
    let substrings = leadingSubstrings(string.slice(idx));
    result = result.concat(substrings);
  }
  return result;
}

function isPalindrome(string) {
  if (string.length === 1) return false;
  return string === string.split('').reverse().join('');
}

function palindromes(string) {
  return substrings(string).filter(isPalindrome);
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]