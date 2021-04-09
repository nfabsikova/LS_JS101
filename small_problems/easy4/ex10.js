function swap(string) {
  let words = string.split(' ');
  return words.map(str => swapFirstLast(str)).join(' ');
}

function swapFirstLast(word) {
  if (word.length === 1) return word;
  return word.slice(-1) + word.slice(1, -1) + word.slice(0, 1);
}


console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"