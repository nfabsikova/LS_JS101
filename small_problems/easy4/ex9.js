function wordSizes(string) {
  let words = string.replace(/[^\w\s]/g, "").split(' ');
  let sizes = {};

  for (let word of words) {
    if (word.length === 0) continue;
    sizes[word.length] = sizes[word.length] || 0;
    sizes[word.length] += 1;
  }
  return sizes;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));                                            // {}