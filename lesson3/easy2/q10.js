let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

//Method 1
console.log(statement1.match(/t/g).length);
console.log(statement2.match(/t/g));

//Method 2
console.log(statement1.split('').filter(letter => letter === 't').length);
console.log(statement2.split('').filter(letter => letter === 't').length);