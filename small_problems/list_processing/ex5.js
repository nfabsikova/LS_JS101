/*
Problem
 - input: string
 - output: array of strings
- return an array of all substrings of the input string
- all substrings can be found by getting the leading substrings for all
of the input string's characters

Algorithm
1. initialise an empty result array
2. take the first character of the input string
3. add all the leading substrings of a string starting with it to the result 
4. repeat 2-4 for all the characters of the input string
5. return the result array - no need to sort
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

console.log(substrings('abcde'));
