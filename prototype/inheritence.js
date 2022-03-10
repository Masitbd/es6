/* function test() {
  console.dir(test);
}

test(); */

/* function Person(name, age) {
  let person = Object.create(Person.prototype);
  this.name = name;
  this.age = age;
  return person;
}
/// constructor how to add method
Person.prototype = {
  eat() {
    console.log("the person is eating");
  },

  sleeping() {
    console.log("the person is sleeping");
  },
};

// how to create new object
const sakib = Person("sakib", 34);
sakib.eat();
 */

/// use this and new keyword
/* 
function Person(name, age) {
  this.name = name;
  this.age = age;
}
/// constructor how to add method
Person.prototype = {
  eat() {
    console.log("the person is eating");
  },

  sleeping() {
    console.log("the person is sleeping");
  },
};

// how to create new object
const sakib = new Person("sakib", 34);
sakib.eat(); */

// Make class based

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    console.log("the person is eating");
  }
  sleep() {
    console.log("the person is sleeping");
  }
}

const sakib = new Person("sakib", 45);
console.log(sakib.name);
sakib.sleep();
