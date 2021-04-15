/*
Problem
  - input: integer (can be negative) givig minutes
  - output: string in the form hh:mm
- return a string showing the time in the format hh:mm based on the
input minutes
- if the integer is positive, it denotes the number of minutes after
midnight
- if the integer is negative, it denotes the number of minutes before
midnight
- the whole day has 1440 minutes
- the number of minutes of interest is whatever remainder there is
after dividing the input integer by 1440
- one hour has 60 minutes
- the resulting number of minutes will be whatever there is left after
dividing by 60

Algorithm
1. initialise variables hours and minutes
2. calculate the number of minutes that don't fit to a whole day (
  the reminder from dividing by 1440)
3. calculate the number of hours by taking the absolute value of the
number of minutes from 2 divided by 60 and rounded down
4. calculate the number of minutes by taking the difference between the
number of hours multiplied by 60 and the total number of minutes
5. if the input integer was positive (or 0), return the hours and minutes
in the specified format
6. if it was negative, subtract the number of hours from 23 and the number
of minutes from 60 and return the result in specified format
*/
const MINUTES_IN_DAY = 1440;
const MINUTES_IN_HOUR = 60;

function timeOfDay(totalMinutes) {
  totalMinutes %= MINUTES_IN_DAY;
  let hours = Math.floor(Math.abs(totalMinutes) / MINUTES_IN_HOUR);
  let minutes = Math.abs(totalMinutes) - (hours * 60);

  if (totalMinutes >= 0) {
    return formatTime(hours, minutes);
  } else {
    return formatTime(23 - hours, 60 - minutes);
  }
}

function formatTime(hours, minutes) {
  return String(hours).padStart(2, '0') + ":" + String(minutes).padStart(2, '0');
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");
