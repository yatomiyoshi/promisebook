// 非同期的に処理が呼ばれる可能性がある場合、
// 同期的に呼ばれる個所があってはならない
const onReady = (fn) => {
  const readyState = document.readyState;
  if (readyState === "interactive" || readyState === "complete") {
    // 同期的に呼び出している　<- これは良くない
    fn();
  } else {
    // 非同期的に呼び出している
    window.addEventListener("DOMContentLoaded", fn);
  }
};
onReady(() => console.log("DOM fully loaded and parsed"));
console.log("==Starting==");
