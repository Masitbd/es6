/* function first(setTimeout() => {
  console.log('this is first programme')
  
}, 2000);

function first(setTimeout(second) => {
  console.log('this is second programme')
  
}, 2000); */

/* function calculate(number, callback) {
  result = number;
  if (callback) {
    display(result);
  }
}

function display(result) {
  console.log(result);
}

calculate(5, display);
 */

/* console.log("line 1 code");

setTimeout(() => {
  console.log("this is timeout function");
}, 2000);
console.log("line 2 code");
console.log("line 3 code");
 */

const marks = 70;

function enroll(callback) {
  console.log("coruse enroll the user");
}

function progress(callback) {
  console.log("course in progress");
  setTimeout(() => {
    if (marks > 60) {
      callback();
    } else {
      console.log("you did not get enough marks to pass the exam");
    }
  }, 2000);
}

function getCertificate() {
  console.log("preparing your certificate");

  setTimeout(() => {
    console.log("consgrets you got the certificate");
  }, 1000);
}

/* enroll(() => progress(getCertificate));
 */
enroll(function () {
  progress(getCertificate);
});
