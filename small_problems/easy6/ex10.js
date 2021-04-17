function reverseWords(string) {
  let array = string.split(' ');

  array = array.map(word => {
    if (word.length >= 5) {
      return word.split('').reverse().join('');
    }
    return word;
  });

  return array.join(' ');
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"