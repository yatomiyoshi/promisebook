const asyncMain = async () => {
  const value = await Promise.resolve(101);

  // awaitの返り値は、resolveの引数
  console.log(typeof value);
  console.log(value);
};
asyncMain();

const promiseMain = () => {
  const promise = Promise.resolve(102);

  // Promise.resolveの返り値は、Promiseオブジェクト
  console.log(typeof promise);
  promise.then((value) => console.log(value));
};
promiseMain();

const asyncRejectMain = async () => {
  const value = await Promise.reject(new Error("エラーメッセージ"));
};
asyncRejectMain().catch((error) => console.log(error.message));
