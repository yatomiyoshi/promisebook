const fetchURL = (URL) => {
  return new Promise((resolve, reject) => {
    // const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    const req = new XMLHttpRequest();
    req.open("GET", URL, true);
    req.onload = () => {
      if (200 <= req.status && req.status < 300) {
        // 重要：resolveが呼ばれることで、promiseオブジェクトがFulfilledになる
        resolve(req.responseText);
        // 続いて、.then内の処理が呼ばれる
      } else {
        // rejectが呼ばれることで、promiseオブジェクトがRejectedになる
        reject(new Error(req.statusText));
      }
    };
    req.onerror = () => {
      reject(new Error(req.statusText));
    };
    req.send();
  });
};

const URL = "https://httpbin.org/get";
fetchURL(URL)
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });
