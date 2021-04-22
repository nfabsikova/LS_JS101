/*
Problem
 - input: string
 - output: array of strings
- return an array with all the substrings of the input string
- substrings start with the first letter of the word
- the list should be ordered by length but no need to do that if the
result is built sequentially

Algorithm
1. initialise an empty result array
2. initialise an empty substring string
3. take the first character from the input string and add it to the
substring variable
4. add the newly created substring to the result array
5. repeat 3-4 for all the characters
*/

function leadingSubstrings(string) {
  let result = [];

  for (let idx = 1; idx <= string.length; idx++) {
    result.push(string.slice(0, idx));
  }

  return result;
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]