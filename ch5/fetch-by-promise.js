const bookURL = "https://azu.github.io/promises-book/json/book.json";

const fetchBookTitle = () => {
  return fetch(bookURL)
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      return json.title;
    });
};

const main = () => {
  fetchBookTitle().then(console.log);
  // 上のように、thenにはコールバック関数のみを渡す書き方も可能
  // fetchBookTitle().then((title) => console.log(title));
};

main();
