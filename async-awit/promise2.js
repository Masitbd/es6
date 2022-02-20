const status = true;
const marks = 70;

function enroll() {
  console.log("course enrolled");

  const promise = new Promise((resolve, response) => {
    setTimeout(() => {
      if (status) {
        resolve();
      } else {
        reject("payment failed");
      }
    }, 2000);
  });
  return promise;
}

function progress() {
  console.log("course in progress stage");

  const promise = new Promise(function (resolve, response) {
    setTimeout(() => {
      if (marks > 60) {
        resolve();
      } else {
        reject("you are not allow to get certificate");
      }
    }, 3000);
  });
  return promise;
}

function getCertificate() {
  console.log("preparing your certificate");

  const promise = new Promise(function (resolve) {
    setTimeout(() => {
      resolve("congrates you will get the certificate");
    }, 1000);
  });
  return promise;
}

enroll()
  .then(progress)
  .then(getCertificate)
  .then(function (value) {
    console.log(value);
  })
  .catch(function (err) {
    console.log(err);
  });
