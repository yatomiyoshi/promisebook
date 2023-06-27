const doAsync = async () => {
  console.log("doAsync!");
  return 1;
};

const asyncMain = async () => {
  await doAsync();
  console.log("Async Finished!");
};

asyncMain();
