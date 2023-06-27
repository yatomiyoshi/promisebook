async function doAsync() {
  return "value: async";
}
doAsync().then((value) => console.log(value));

function doPromise() {
  return Promise.resolve("value: promise");
}
doPromise().then((value) => console.log(value));
