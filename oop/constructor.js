"usr strict";

const Person = function (fName, bYear) {
  this.fName = fName;
  this.bYear = bYear;
};
const result = new Person("jonas", 1991);
console.log(result.prototype);
