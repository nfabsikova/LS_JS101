/*
Problem:
  - input: array
  - output: object
- return an object with keys as the unique elements of the input array
and corresponding values as the number of times the key occurrs in the
input array
- log the resulting object's keys and values

Algorithm:
1. intitialise empty result object
2. check the first element of the input array
3. if it's not yet as a key in the object add it as a key
4. it is already as a key, increment its value by 1
5. repeat 2-4 for all the input array's elements
6. return the resulting object
7. log the object's first key and value
8. repeat 7. for all the object's keys
*/

function countOccurrences(arr) {
  let result = {};

  arr.forEach(element => {
    element = element.toLowerCase();
    result[element] = result[element] || 0;
    result[element] += 1;
  });

  return result;
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'motorcycle', 'car', 'truck', 'suv'];

let occurrences = countOccurrences(vehicles);

for (let item in occurrences) {
  console.log(`${item} => ${occurrences[item]}`);
}

// console output -- your output sequence may be different
