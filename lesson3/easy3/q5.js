function isColorValid(color) {
  return ['blue', 'green'].includes(color);
}

function isColorValid2(color) {
  return (color === "blue" || color === "green");
}

console.log(isColorValid2('red'));
console.log(isColorValid2('blue'));

