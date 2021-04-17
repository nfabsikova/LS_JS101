/*
Problem
  - input: string
  - output: new string
- return the middle or the middle two characters from an input string
- the index of the middle character with odd length string is the largest
index number (length - 1) divided by two
- with even length string the indices are the larget index number divided by 
two and rounded down and up
*/

function centerOf(string) {
  let middleIndex = (string.length - 1) / 2;
  let substrLength = (string.length % 2 === 1) ? 1 : 2;

  return string.slice(middleIndex, middleIndex + substrLength);
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"