const status = true;

console.log("task 1");

const promise = new Promise((myResolve, myReject) => {
  setTimeout(() => {
    if (status) {
      myResolve("task2");
    } else {
      myReject("failed");
    }
  }, 2000);
});

console.log("task 3");

promise
  .then(function (value) {
    console.log(value);
  })
  .catch(function (err) {
    console.log("err");
  });
