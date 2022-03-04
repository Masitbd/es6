function myFunction() {
  const result = prompt("Please enter your name", "Rahim");
  const result1 = prompt("Please enter your name", "Rahim");
  console.log(result);
  document.getElementById("display").innerText = result;
}

myFunction();
