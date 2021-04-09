function runningTotal(array) {
  let total = 0;
  return array.map(el => {
    total += el;
    return total;
  });
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []

//Solution 2
/* let totalArray = [];

array.forEach(num => {
  total += num;
  totalArray.push(total);
}); */