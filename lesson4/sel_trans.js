function selectFruit(obj) {
  let selected = {};

  for (let item in obj) {
    if (obj[item] === 'Fruit') {
      selected[item] = obj[item];
    }
  }

  return selected;
}

let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

// console.log(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }

///////////////////////
function doubleNumbers(numbers) {

  for (let idx = 0; idx < numbers.length; idx++) {
    numbers[idx] *= 2;
  }
  return numbers;
}

// let myNumbers = [1, 4, 3, 7, 2, 6];
// console.log(doubleNumbers(myNumbers)); // => [2, 8, 6, 14, 4, 12]
// console.log(myNumbers);                // => [1, 4, 3, 7, 2, 6]

///////////////////////
function doubleOddIndices(numbers) {
  let doubled = [];

  for (let idx = 0; idx < numbers.length; idx++) {
    if (idx % 2 === 1) {
      doubled.push(numbers[idx] * 2);
    } else {
      doubled.push(numbers[idx]);
    }
  }

  return doubled;
}

// let myNumbers = [1, 4, 3, 7, 2, 6];
// console.log(doubleOddIndices(myNumbers));  // => [2, 4, 6, 14, 2, 6]
// console.log(myNumbers);                    // => [1, 4, 3, 7, 2, 6]

////////////////////////
function multiply(numbers, multiplier) {
  let multipliedNums = [];

  for (let idx = 0; idx < numbers.length; idx++) {
    multipliedNums.push(numbers[idx] * multiplier);
  }

  return multipliedNums;
}

let myNumbers = [1, 4, 3, 7, 2, 6];
console.log(multiply(myNumbers, 3)); // => [3, 12, 9, 21, 6, 18]
console.log(multiply(myNumbers, 5));

