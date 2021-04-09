function crunch(string) {
  if (string === '') return '';

  let result = string[0];

  for (let idx = 1; idx < string.length; idx++) {
    if (string[idx] !== string[idx - 1]) {
      result += string[idx];
    }
  }
  return result;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""