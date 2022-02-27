const first = { a: 1 };
const second = { b: 1 };

if (first === second) {
  console.log("equal");
} else {
  console.log("not equql");
}

if (Object.keys(first).length === Object.keys(second).length) {
  console.log("they are equal");
}
