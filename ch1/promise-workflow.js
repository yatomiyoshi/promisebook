const asyncFunction = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Async Hello world");
    }, 16);
  });
};

asyncFunction()
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });
