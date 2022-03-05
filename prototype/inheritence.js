/* function test() {
  console.dir(test);
}

test(); */

function Person(name, age) {
  let person = Object.create(Person.prototype);
  this.name = name;
  this.age = age;
  return person;
}

Person.prototype = {
  eat() {
    console.log("the person is eating");
  },

  sleeping() {
    console.log("the person is sleeping");
  },
};

const sakib = Person("sakib", 34);
sakib.eat();
