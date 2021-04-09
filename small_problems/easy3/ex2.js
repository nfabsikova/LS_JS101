function logInBox(string) {
  let innerWidth = string.length + 2;
  let line1 = `+${'-'.repeat(innerWidth)}+\n`;
  let line2 = `|${' '.repeat(innerWidth)}|\n`;
  let line3 = `| ${string} |\n`;
  console.log(line1 + line2 + line3 + line2 + line1);
}

logInBox('To boldly go where no one has gone before.');
logInBox('');