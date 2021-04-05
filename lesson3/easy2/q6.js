let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

console.log([].concat(...flintstones));

let flinstonesFlat = [];
flintstones.forEach(element => {
  flinstonesFlat = flinstonesFlat.concat(element);
});

console.log(flinstonesFlat);

let flintstonesReduced =
  flintstones.reduce((acc, cur) => {
    return acc.concat(cur);
  }, []);

console.log(flintstonesReduced);