/*
Problem
 input: floating point number
 output: string
 - convert angle from a floating point number to an angle expressed
    in degrees, minutes and seconds
 - valid inputs are numbers between 0 and 360 (inclusive)
 - 1 degree is 60 minutes
 - 1 minute is 60 seconds
 - the number of degrees will be equal to the float number rounded
  down to the nearest integer
 - the decimal part of the float gets converted into min and sec
 - the number of whole minutes is given by the decimal part of the degree
  number multiplied by 60 and rounded down to the nearest integer
  - the number of seconds is given by the decimal part of the minutes
  number multiplied by 60 and rounded down to the nearest integer

Algorithm
1. assign degrees the value of rounding down the input number to the
  nearest integer
2. assign minutes the difference between the input number and the number
 of degrees multiplied by 60 and rounded down
3. assign seconds the difference between the difference between the number
  of minutes and the difference of input number and the number of degress
  multiplied by 60
4. return values concatenated together with unit strings


*/

//Code
function dms(angle) {
  const DEG_TO_MIN = 60;
  const MIN_TO_SEC = 60;

  let degrees = Math.floor(angle);
  let minutesFloat = (angle - degrees) * DEG_TO_MIN;
  let minutes = Math.floor(minutesFloat);
  let seconds = Math.floor((minutesFloat - minutes) * MIN_TO_SEC);

  return degrees + '°' + String(minutes).padStart(2, '0') + '\'' +
  String(seconds).padStart(2, '0') + '"';
}

//Examples
console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"