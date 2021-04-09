function century(year) {
  let centuryStr = String(Math.ceil(year / 100));
  let last = centuryStr.slice(-1);
  let secLast = centuryStr.slice(-2, -1);

  if ((last === '1') && (secLast !== '1')) {
    return centuryStr + 'st';
  } else if ((last === '2') && (secLast !== '1')) {
    return centuryStr + 'nd';
  } else if ((last === '3') && (secLast !== '1')) {
    return centuryStr + 'rd';
  } else {
    return centuryStr + 'th';
  }
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));         // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"