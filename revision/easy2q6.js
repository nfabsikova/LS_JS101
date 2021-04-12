let flintstones = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];
let flintstonesFlat = [].concat(...flintstones);
console.log(flintstonesFlat);