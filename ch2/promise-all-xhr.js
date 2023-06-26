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

const request = {
  comment() {
    return fetchURL(commentURL).then(JSON.parse);
  },
  people() {
    return fetchURL(peopleURL).then(JSON.parse);
  },
};

const main = () => {
  return Promise.all([request.comment(), request.people()]);
};

main()
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.error(error);
  });
