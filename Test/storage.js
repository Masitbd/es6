/* localStorage.setItem("userId", "101");
console.log(localStorage.getItem("userId")); */

const addToLocalStorage = () => {
  const myArr = [100, 20, 30];
  const idInput = document.getElementById("storage-id").value;
  const inputValue = document.getElementById("storage-value").value;
  if (idInput && inputValue) {
    localStorage.setItem(idInput, JSON.stringify(myArr));
  }
  document.getElementById("storage-id").value = "";
  document.getElementById("storage-value").value = "";
};
