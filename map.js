/* numbers = [4, 6, 8, 10];
newNumbers = [];

const result = numbers.map((number) => {
  newNumbers.push(number * 2);
});

console.log(result);
 */

/* const friends = ["tom", "dik", "harry"];

const result = friends.map((friend) => friend.length);
console.log(...result); */

/* const products = [
  {
    name: "water",
    cost: 300,
    country: "dkk",
    status: {
      color: "green",
      origin: "old",
    },
  },
]; */

/* const result = products.map((produce) => produce.status);
console.log(result); */

/* products.forEach((product) => console.log(product.status.color)); */
/* const result = products.filter((product) => product.status.color == "gree");
console.log(result);
 */

bigNum = [1, 2, 4, 5, 6, 22, 33, 45, 66, 554, 0, 2, 18, 10];

const result = bigNum.find((num) => num > 6);
console.log(result);
