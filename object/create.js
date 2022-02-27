// object
const student = {
  name: { name: "skib", job: "creaketr" },
};
// conntructur
const person = new Object();
console.log(person);

// inheritance
const human = Object.create(student);
console.log(human.name.name);
