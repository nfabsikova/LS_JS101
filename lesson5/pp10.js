let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

let arr2 = arr.map(subArr => {
  if (typeof subArr[0] === 'string') {
    return subArr.slice().sort().reverse();
  } else {
    return subArr.slice().sort((a, b) => b - a);
  }
});

console.log(arr);
console.log(arr2);