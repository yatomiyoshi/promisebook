const dummyFetch = (path) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (path.startsWith("/resource")) {
        resolve({ body: `Response body of ${path}` });
      } else {
        reject(new Error("NOT FOUND"));
      }
    }, 1000 * Math.random());
  });
};

dummyFetch("/resource/A").then(
  (response) => {
    console.log(response);
  },
  (error) => {
    // This line will not be executed.
  }
);

dummyFetch("/not_found").then(
  (response) => {
    // This line will not be executed.
  },
  (error) => {
    console.log(error.message);
  }
);

// 上の処理自体は、以下のように書いた方が分かりやすい
dummyFetch("/resource/B")
  .then(console.log)
  .catch((error) => console.log(error.message));

dummyFetch("/not_found")
  .then(console.log)
  .catch((error) => console.log(error.message));
