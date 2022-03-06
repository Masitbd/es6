/* const result = () => {
  setTimeout(() => {
    console.log("this is set timeout");
  }, 3500);
};

result();
 */

const showPrompt = () => {
  const result = prompt("hello prompt");
  console.log(typeof result);
  const consvetResult = parseInt(result) + 200;
  console.log(consvetResult);
};
