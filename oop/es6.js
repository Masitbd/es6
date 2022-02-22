const account = {
  owner: "johnas",
  movements: [300, 450, 120],
  get largest() {
    return this.movements.slice(-1).pop();
  },
  set largest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.largest);
account.largest = 50;
