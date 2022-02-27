const bottle = {
  color: "red",
  hold: "water",
  cost: 400,
  isCliend: true,
};

/* for (b in bottle) {
  console.log(bottle[b]);
} */

const keys = Object.keys(bottle);
console.log(keys);

for (val in keys) {
  console.log(val, keys[val]);
}
