const readline = require('readline-sync');
const SQMETERS_TO_SQFEET = 10.7639;

let measureMain;
let measureOther;

while (true) {
  console.log("Choose preferred measure. Enter m for meters, f for feet.");
  measureMain = readline.question();

  if (['m', 'f'].includes(measureMain)) break;
}

if (measureMain === 'm') {
  measureMain = 'meters';
  measureOther = 'feet';
} else  {
  measureMain = 'feet';
  measureOther = 'meters';
}

console.log(`Enter the length of the room in ${measureMain}:`);
let roomLength = readline.question();

console.log(`Enter the width of the room in ${measureMain}:`);
let roomWidth = readline.question();

//Calculation
let areaMain = Number(roomLength) * Number(roomWidth);
let multiplier = (measureMain === 'meters' ? SQMETERS_TO_SQFEET : 1 / SQMETERS_TO_SQFEET );
let areaOther = areaMain * multiplier;



console.log(
  `The area of the room is ${areaMain.toFixed(2)} square ${measureMain} (${areaOther.toFixed(2)} square ${measureOther}.)`);