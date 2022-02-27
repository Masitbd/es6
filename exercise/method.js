const students = {
  name: "Murad",
  age: 42,
  village: "Boraid",
  language: "Bangla",
  isVoter: true,
  fullAddress: function () {
    const result = `Name: ${this.name} Village: ${this.village} Language: ${this.language}`;
    return result;
  },
};

const getResult = students.fullAddress();
console.log(getResult);
