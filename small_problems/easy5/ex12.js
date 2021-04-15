/*
*** after midnight ***
Problem
  - input: string in the form hh:mm
  - output: integer denoting number of minutes
- return the number of minutes after midnight based on the number of
hours and minutes specified by a string
- the string input will be between 00:00-23:59
- the resulting integer output will be between 0-1439

Algorithm
1. parse the number of hours from the input string
2. parse the number of minutes from the input string
3. calculate the total number of minutes by multiplying hours by 60
and adding the number of minutes
4. return the total number of minutes

*** before midnight ***
Problem
- using the aftermidnight function, the number of minutes before midnight
is equal to 1440 - the number of minutes after midnight
- unless the time is 0, then it is 0
*/

const MINUTES_IN_HOUR = 60;
const MINUTES_IN_DAY = 1440;

function afterMidnight(timeString) {
  let hours = Number(timeString.slice(0, 2));
  let minutes = Number(timeString.slice(-2));
  return ((hours * MINUTES_IN_HOUR) + minutes) % MINUTES_IN_DAY;
}

function beforeMidnight(timeString) {
  return afterMidnight(timeString) === 0 ?
    afterMidnight(timeString) : MINUTES_IN_DAY - afterMidnight(timeString);
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);