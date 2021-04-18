
function generateUUID() {
  const hexChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
  const lengths = [8, 4, 4, 4, 12];

  let uuid = [];

  lengths.forEach(length => {
    let section = [];
    for (let counter = 0; counter <= length; counter++) {
      let randomIdx = Math.floor(Math.random() * hexChars.length);
      section.push(hexChars[randomIdx]);
    }
    uuid.push(section.join(''));
  });

  return uuid.join('-');
}


console.log(generateUUID());
console.log(generateUUID());
console.log(generateUUID());