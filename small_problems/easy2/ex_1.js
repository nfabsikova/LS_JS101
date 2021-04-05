function greetings(name, status) {
  return `Hello, ${name.join(' ')}! Nice to have a ${status.title} ${status.occupation} around.`;
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Doctor", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.