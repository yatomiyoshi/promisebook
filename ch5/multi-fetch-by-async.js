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
  for (let i = 0; i < resources.length; i++) {
    const resource = resources[i];
    console.log(`2. ${resource}の取得開始`);
    const response = await dummyFetch(resource);
    console.log(`3. ${resource}の取得完了`);
    results.push(response.body);
  }
  console.log("4. fetchResourcesを終了");
  return results;
};

// 1件でもデータ取得不可だとすべてのデータが取得できない
const resources = ["/resource/A", "/resource/B"];
fetchResources(resources)
  .then(console.log)
  .catch((error) => console.log("エラー：" + error.message));
