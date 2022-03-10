// simple timeout check

/* const result = () => {
  setTimeout(() => {
    console.log("this is set timeout");
  }, 3500);
};

result();
 */

// take input form the prompt
/* const showPrompt = () => {
  const result = prompt("hello prompt");
  console.log(typeof result);
  const consvetResult = parseInt(result) + 200;
  console.log(consvetResult);
};
 */

// yes know from prompt
const showPrompt = () => {
  const isExecute = confirm("Are you agree to see this context");

  if (isExecute) {
    window.open("https://www.w3schools.com");
  }
};
