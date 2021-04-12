let munstersDescription = "The Munsters are creepy and spooky.";
let munstersSwapped = munstersDescription.split('').map(char => {
  return char === char.toLowerCase() ?
    char.toUpperCase() : char.toLowerCase();
}).join('');

console.log(munstersSwapped);