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

const fetchResources = async (resources) => {
  const results = [];
  console.log("1. fetchResourcesを開始");
  // forEach自体は、Asyncでない関数
  // そのため、forEach自体は同期的に実行される
  // そのため、4.の出力も同期的に実行される
  resources.forEach(async (resource) => {
    console.log(`2. ${resource}の取得開始`);
    const response = await dummyFetch(resource);
    console.log(`3. ${resource}の取得完了`);
    results.push(response.body);
  });
  console.log("4. fetchResourcesを終了");
  return results;
};

const resources = ["/resource/A", "/resource/B"];
fetchResources(resources).then(console.log);
