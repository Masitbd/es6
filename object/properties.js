const bottle = {
  color: "red",
  hold: "water",
  cost: 400,
  isCliend: true,
};
Object.seal(bottle);

/* const keys = Object.entries(bottle);
console.log(keys); */

delete bottle.isCliend;
console.log(bottle);
