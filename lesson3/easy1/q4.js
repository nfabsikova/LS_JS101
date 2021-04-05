let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

let munstersCapitalized = munstersDescription[0].toUpperCase() +
  munstersDescription.slice(1).toLowerCase();

console.log(munstersCapitalized);