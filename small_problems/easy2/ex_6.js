function penultimate(string) {
  let words = string.split(' ');
  if (words.length < 2) {
    return string;
  }
  return words[words.length - 2];
}

function middle(string) {
  let words = string.split(' ');

  if (words.length % 2 === 1) {
    let halfpoint = (words.length - 1) / 2
    return words[halfpoint];
  } else {
    let halfpoint = words.length / 2;
    return words.slice(halfpoint - 1, halfpoint + 1);
  }
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true
console.log(penultimate(''));

console.log(middle("launch school is"));

