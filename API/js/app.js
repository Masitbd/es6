/* const user = {
  id: 11,
  name: "Murad",
  class: "six",
};

const stringfy = JSON.stringify(user);
console.log(stringfy); */

/* const shop = {
  name: "alia store",
  address: "ronbir road",
  products: ["laptop", "peepsi", "coca-cala"],
  employ: "part-time",
};

const shopStringfy = JSON.stringify(shop);
console.log(shopStringfy);

const normalObject = JSON.parse(shopStringfy);
console.log(normalObject);
 */

/* fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json)); */
/* 
const data = async () => {
  const got = await fetch("https://jsonplaceholder.typicode.com/posts");
  return await got.json();
};

const records = data();

records.forEach((element) => {
  console.log(element.title);
});
 */

fetch("https1://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => display(data));

/* const data = async () => {
  const result = await fetch("https://jsonplaceholder.typicode.com/users");
  return await result.json();
};

const findData = data();
//console.log(findData);
display(findData); */

function display(input) {
  const parent = document.getElementById("users");
  console.log(parent);
  for (const user of input) {
    console.log(user.name);
    const li = document.createElement("li");
    li.innerText = user.name;
    parent.appendChild(li);
  }
}
