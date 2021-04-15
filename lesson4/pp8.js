let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
let flintstonesObj = {};

flintstones.forEach((name, idx) => {
  flintstonesObj[name] = idx;
});

console.log(flintstonesObj);