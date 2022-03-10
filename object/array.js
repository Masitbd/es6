/* const student = {
  name: "sakib khan",
  age: 32,
  movies: ["king khan", "dhakar mastan", "ma"],
};

const oldA = [1, 2, 3, 4, 5];
const newA = [...oldA];
newA.push(10);

console.log(newA);
 */

/* const products = [
  {
    name: "laptopo",
    price: 45000,
    isWarinty: "yes",
  },
  {
    name: "desktop",
    price: 5000,
    isWarinty: "no",
  },
  {
    name: "ipad",
    price: 6000,
    isWarinty: "yes",
  },
];
 */
/* products.map((product) => console.log(product.name)); */

// return an array
/* const results = products.filter((product) => product.price > 5000);
console.log(results);

results.map((result) => console.log(result.price)); */

/* const result = products.filter((product) => product.name.includes("l"));
console.log(result); */

/* const results = products.find((product) => product.price <= 6000);
console.log(results); */

/* const [name, price] = products;
console.log(price);

const numbers = [42, 65];
const [a, b] = [42, 65];
console.log(a); */

/* const products = {
  name: "laptopo",
  price: 45000,
  isWarinty: "yes",
  language: ["html", "css", "js"],
  specification: {
    height: 66,
    weight: 80,
    addess: "kamrangir chor",
  },
};

const { height } = products.specification;
console.log(height);
 */

const products = [
  {
    name: "laptopo",
    price: 45000,
    isWarinty: "yes",
    language: ["html", "css", "js"],
    specification: {
      height: 66,
      weight: 80,
      addess: "kamrangir chor",
    },
  },
];

/* const productsjson = JSON.stringify(products);
console.log(productsjson);

const normalFformate = JSON.parse(productsjson);
console.log(normalFformate);
 */

//console.log(Object.keys(products));

const newProduct = {
  name: "desktop",
  price: 7000,
  isWarinty: "yes",
  language: ["html", "css", "js"],
  specification: {
    height: 66,
    weight: 80,
    addess: "kamrangir chor",
  },
};

const array = [...products, newProduct];
console.log(array);
