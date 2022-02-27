const student = {
  fName: "murad",
  lName: "sarker",
  id: "001",
  sub: "csc",
  gpa: function (a, b) {
    return a + b;
  },
  fullName: function () {
    return this.fName;
  },
};

const resut = student.fullName();
console.log(resut);
