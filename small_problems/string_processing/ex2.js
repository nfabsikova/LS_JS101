/*
- filter out all vowels from an array of strings
*/

function removeVowels(arr) {
  return arr.map(string => {
    return string.split('').filter(char => !'aeiou'.includes(char.toLowerCase())).join('');
  });
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]