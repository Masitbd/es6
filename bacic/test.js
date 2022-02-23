/* const firstName = "Murad";
const lastName = "Sarker";
console.log(firstName + " " + lastName);
 */

function fullName(firstName, lastName = "sarker") {
  return firstName + " " + lastName;
}

const result = fullName("Murad");
console.log(result);

const square = (x) => x * x;

const rej = square(9);
console.log(rej);
