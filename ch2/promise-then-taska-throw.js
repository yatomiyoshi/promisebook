const taskA = () => {
  console.log("Task A");
  throw new Error("throw Error @ Task A");
};
const taskB = () => console.log("Task B");
const onRejected = (error) => console.error(error);
const finalTask = () => console.log("Final Task");

// このときも、start -> going -> end -> TaskA -> Error -> Final Taskの順番で呼ばれる
// すなわち、then内のコールバック関数は非同期で呼ばれている
console.log("start");
const promise = Promise.resolve();
console.log("going");
promise.then(taskA).then(taskB).catch(onRejected).then(finalTask);
console.log("end");
