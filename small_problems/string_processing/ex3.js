/*
Problem
- count lowercase and uppercase letters and those that are neither
*/

function letterCaseCount(string) {
  let result = {lowercase : 0, uppercase: 0, neither: 0};

  for (let char of string) {
    if (char.toUpperCase() === char.toLowerCase()) {
      result.neither += 1;
    } else if (char === char.toLowerCase()) {
      result.lowercase += 1;
    } else {
      result.uppercase += 1;
    }
  }

  return result;
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }