class Car {
  constructor(speed) {
    this.speed = speed;
  }
  get speedUS() {
    return this.speed * 1.6;
  }
  set speedUS(speed) {
    this.speed = speed;
  }
}

const ford = new Car(120);
