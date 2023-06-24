Promise.resolve("Success!").finally(() => {
  console.log("Execute after success.");
});

Promise.reject(
  new Error("Failure...").finally(() => {
    console.log("Execute after failure.");
  })
);
