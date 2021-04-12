let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3,
  Bambam: 4, Pebbles: 5 };

let entries = Object.entries(flintstones);
let barney = entries.filter(el => el[0] === 'Barney')[0];

console.log(barney);