const fetchURLCallback = (URL, callback) => {
  const req = new XMLHttpRequest();
  req.open("GET", URL, true);
  req.onload = () => {
    if (200 <= req.status && req.status < 300) {
      callback(null, req.responseText);
    } else {
      callback(new Error(req.statusText), req.response);
    }
  };
  req.onerror = () => {
    callback(new Error(req.statusText));
  };
  req.send();
};

const jsonParse = (callback, error, value) => {
  if (error) {
    callback(error, value);
  } else {
    try {
      const result = JSON.parse(value);
      callback(null, result);
    } catch (e) {
      callback(e, value);
    }
  }
};

const commentURL = "https://azu.github.io/promises-book/json/comment.json";
const peopleURL = "https://azu.github.io/promises-book/json/people.json";

const request = {
  comment(callback) {
    return fetchURLCallback(commentURL, jsonParse.bind(null, callback));
  },
  people(callback) {
    return fetchURLCallback(peopleURL, jsonParse.bind(null, callback));
  },
};
