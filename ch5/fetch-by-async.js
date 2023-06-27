const fetchBookTitle = async () => {
  const res = await fetch(bookURL);
  const json = await res.json();
  return json.title;
};

const main = async () => {
  const title = await fetchBookTitle();
  console.log(title);
};
