function wordSizes(string) {
  let words = string.split(' ');
  let sizes = {};

  for (let word of words) {
    if (word.length === 0) continue;
    if (sizes.hasOwnProperty(word.length)) {
      sizes[word.length] += 1;
    } else {
      sizes[word.length] = 1;
    }
  }
  return sizes;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}