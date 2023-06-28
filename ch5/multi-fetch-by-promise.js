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

const fetchResources = (resources) => {
  const results = [];
  return resources.reduce((promise, resource) => {
    return promise.then(() => {
      return dummyFetch(resource).then((response) => {
        results.push(response.body);
        return results;
      });
    });
  }, Promise.resolve());
};

// 以下の場合、すべての処理が失敗する
// const resources = ["/resource/A", "/resource/B", "/not_found"];
const resources = ["/resource/A", "/resource/B"];
fetchResources(resources).then(console.log);
