function staggeredCase(string, ignoreNonAlphabetic = true) {
  let letterCounter = 0;
  let result = '';

  for (let idx = 0; idx < string.length; idx++) {
    let char = string[idx];

    if (char.match(/[^a-z]/i)) {
      result += char;
      if (ignoreNonAlphabetic) continue;
    } else if (letterCounter % 2 === 0) {
      result += char.toUpperCase();
    } else {
      result += char.toLowerCase();
    }

    letterCounter += 1;
  }

  return result;
}

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);

console.log(staggeredCase("I Love Launch School!", false));
console.log(staggeredCase("I Love Launch School!", true));
console.log(staggeredCase("ALL CAPS"));
console.log(staggeredCase("ALL CAPS", false));
console.log(
  staggeredCase("ignore 77 the 444 numbers")
);