const onFinally = () => console.log("Finish!");

Promise.resolve(9438)
  .finally(onFinally)
  .then((value) => console.log(value));
