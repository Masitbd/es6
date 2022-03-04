const stopwatch = () => {
  let counter = 0;
  return () => {
    counter++;
    return counter;
  };
};

const result = stopwatch();
console.log(result());
