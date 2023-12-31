let isLoading = false;

const fetchResource = (URL) => {
  isLoading = true;
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.open("GET", URL, true);
    req.onload = () => {
      if (200 <= req.status && req.status < 300) {
        resolve(req.responseText);
      } else {
        reject(new Error(req.statusText));
      }
    };
    req.onerror = () => {
      reject(new Error(req.statusText));
    };
    req.send();
  }).finally(() => (isLoading = false));
};

console.log("Start loading resource", isLoading);
fetchResource("https://httpbin.org/get")
  .then((value) => {
    console.log("Resource acquisition succeeded");
    console.log(value);
  })
  .catch((error) => {
    console.log("Resource acquisition failured");
  });
console.log("Now loading...", isLoading);
