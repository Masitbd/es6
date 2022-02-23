"use strict";

const { threadId } = require("worker_threads");

/* class Support {
  name;
  rol = "support web dev";

  constructor(name) {
    this.name = name;
  }
  meet() {
    console.log("start a support session");
  }
}

const amir = new Support("amir");
console.log(amir);
 */

/* class Car {
  name;
  year;
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  fullName() {
    console.log("your full name is ", this.name + " " + this.year);
  }
}

const bmw = new Car("bmw", 1998);
//console.log(bmw.fullName);
bmw.fullName();

let date = new Date();
console.log(date);
 */

/* class Dada {
  efterName;
  village;

  constructor(efterName, village) {
    this.efterName = efterName;
    this.village = village;
  }
  show() {
    console.log(" this is come from dada calss");
  }
}

class Father extends Dada {
  name;

  constructor(name, efterName, village) {
    super(efterName, village);
    this.name = name;
    /* this.efterName = efterName;
    this.village = village; 
  }
  display() {
    this.show();
  }
}

const student = new Father("Murad", "sarker", "boraid");
console.log(student.display()); */

class Car {
  name;
  brand;

  static display(x) {
    console.log(x);
  }
}
const myCar = new Car("ford");
Car.display(myCar);
