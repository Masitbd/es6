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

const heroTreat = kibria.treatDay.bind(heroAlom);
console.log(heroTreat(100));
