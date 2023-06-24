const taskA = () => console.log("Task A");
const taskB = () => console.log("Task B");
const onRejected = (error) => console.log("Catch Error: A or B", error);
const finalTask = () => console.log("Final Task");

const promise = Promise.resolve();
promise.then(taskA).then(taskB).catch(onRejected).then(finalTask);
