const asyncMain = async () => {
  try {
    const value = await Promise.reject(new Error("エラーメッセージ"));
  } catch (error) {
    console.log(error.message);
  }
};
asyncMain();
