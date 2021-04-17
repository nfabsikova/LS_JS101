function swapName(name) {
  let nameArray = name.split(' ');
  return nameArray.slice(-1) + ', ' + nameArray.slice(0, nameArray.length - 1).join(' ');
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe")
console.log(swapName('Karl Oskar Henriksson Ragvals'));