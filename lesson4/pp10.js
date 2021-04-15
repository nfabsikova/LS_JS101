let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

console.log(Math.min(...Object.values(ages)));

let minAge;
console.log(Object.values(ages).forEach(num => {
  if (num > minAge) {
    minAge = num;
  }
}));
