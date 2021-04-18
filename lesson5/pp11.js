let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

let arr2 = arr.map(obj => {
  let newObj = {};
  Object.entries(obj).forEach(entry => {
    newObj[entry[0]] = entry[1] + 1;
  });
  return newObj;
});

console.log(arr);
console.log(arr2);