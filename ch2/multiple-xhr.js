const fetchURL = (URL) => {
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
  });
};

const commentURL = "https://azu.github.io/promises-book/json/comment.json";
const peopleURL = "https://azu.github.io/promises-book/json/people.json";

// thenには、コールバック関数のみを渡すこともできる
// resolveの引数が、コールバック関数の引数として自動的に与えられる
const request = {
  comment() {
    return fetchURL(commentURL).then(JSON.parse);
  },
  people() {
    return fetchURL(this.peopleURL).then(JSON.parse);
  },
};

const main = () => {
  const recordValue = (results, value) => {
    results.push(value);
    return results;
  };
  const pushValue = recordValue.bind(null, []);
  // thenの引数はすべてコールバック関数であることに注意
  return request.comment().then(pushValue).then(request.people).then(pushValue);
};

main()
  .then((value) => {
    console.log(value);
  })
  .catch((error) => console.error(error));
