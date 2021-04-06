let munstersDescription = "The Munsters are creepy and spooky.";
let munstersSwapped = '';

for (let idx = 0; idx < munstersDescription.length; idx++) {
  if (munstersDescription.charCodeAt(idx) > 90) {
    munstersSwapped += munstersDescription[idx].toUpperCase();
  } else {
    munstersSwapped += munstersDescription[idx].toLowerCase();
  }
}

console.log(munstersSwapped);
