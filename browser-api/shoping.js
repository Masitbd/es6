const addItem = () => {
  const inputText = document.getElementById("product-name").value;
  console.log(inputText);
  if (!inputText) {
    return;
  }
  //localStorage.setItem("no1", `${inputText}`);
  //document.getElementById("product-name").value = "";
  displayProduct(inputText);
  addProductToCart(inputText);
};

const displayProduct = (name) => {
  const ul = document.getElementById("add-item");
  console.log(ul);
  const li = document.createElement("li");
  li.innerText = name;
  ul.appendChild(li);
};

const getCard = () => {
  const cart = localStorage.getItem("cart");
  let cartObj;
  if (cart) {
    cartObj = JSON.parse(cart);
  } else {
    cartObj = {};
  }
  return cartObj;
};

const addProductToCart = (name) => {
  const cart = getCard();
  if (cart[name]) {
    cart[name] = cart[name] + 1;
  } else {
    cart[name] = 1;
  }
  const cartStringify = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringify);
};
const loadDataFromLocalStorage = () => {
  const cart = getCard();
  for (const name in cart) {
    displayProduct(name);
  }
};

loadDataFromLocalStorage();

const placeOrder = () => {
  document.getElementById("add-item").textContent = "";
  localStorage.removeItem("cart");
};
placeOrder();
// when insert json data we need stringifyt
// when we get dat then we need to parse
