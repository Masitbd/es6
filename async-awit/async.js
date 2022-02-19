const paymentSuccess = true;
const marks = 70;

function enroll() {
  console("Enroll is successful");
}
const promise = new Promise(function (myResolve, myReject) {
  setTimeout(() => {
    if (paymentSuccess) {
      myResolve();
    } else {
      myReject("payment failed");
    }
  }, 2000);
  return promise;
});

const promise = function progress() {
  console.log("course in progresss");
  const promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (marks > 70) {
        resolve();
      } else {
        reject("You are not eligibel to pass the exam");
      }
    }, 3000);
  });
  return promise;
};

function getCertificate() {
  console.log("preparing the certificate");

  const promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("preparing your certificate");
    }, 1000);
  });
}

async function course() {
  await enroll();
  await process();
  const message = await getCertificate();
  console.log(message);
}

/* enroll()
  .then(process)
  .then(getCertificate)
  .then(function (value) {
    console.log(value);
  })

  .then(function (err) {
    console.log(err);
  });
 */
