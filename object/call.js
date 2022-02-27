const kibria = {
  id: 101,
  money: 3000,
  name: "rj kibria",
  treatDay: function (expense) {
    this.money = this.money - expense;
    return this.money;
  },
};

const heroAlom = {
  id: 102,
  money: 5000,
  name: "hero alom",
};

const golam = {
  id: 103,
  money: 4000,
  name: "hero alom",
};

console.log(kibria.treatDay.call(golam, 100));
