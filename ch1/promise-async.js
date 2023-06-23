const promise = new Promise((resolve) => {
  console.log("inner promise");
  resolve(42);
});

// thenに記載されたコールバック関数は、非同期で実行される
// そのため、このログ出力は３番目に実行される
promise.then((value) => {
  console.log(value);
});

console.log("outer promise");
