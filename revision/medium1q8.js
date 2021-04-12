let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: 402,
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" }
};

function messWithDemographics(demoObject) {
  console.log(Object.values(demoObject));
  Object.values(demoObject).forEach(familyMember => {
    console.log('print: ');
    console.log(familyMember);
    familyMember["age"] += 42;
    familyMember["gender"] = "other";
    familyMember = 3;
    console.log(familyMember);
  });
}

messWithDemographics(munsters);
console.log(munsters);