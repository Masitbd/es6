const { callbackify } = require("util");

const paymentSuccess = true;
const marks = 90;

function enroll(callback) {
  console.log("couese enroll in process");

  setTimeout(() => {
    if (paymentSuccess) {
      callback();
    } else {
      console.log("payment is failure");
    }
  }, 2000);
}

function progress(callback) {
  console.log("course in progress ");
  setTimeout(() => {
    if (marks > 80) {
      callback();
    } else {
      console.log("you are not elegible to get certificate");
    }
  }, 3000);
}

function getCertificate() {
  console.log("preparing your certificate");

  setTimeout(() => {
    console.log("you got the certificate");
  }, 1000);
}

enroll(function () {
  progress(getCertificate);
});

/* function display(sum) {
  console.log(sum);
}

function calculate(a, b, callback) {
  let sum = a + b;
  callback(sum);
}

calculate(10, 12, display);
 */
