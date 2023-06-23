Promise.resolve(200);
new Promise((resolve) => resolve(200));
Promise.resolve(200).then((value) => console.log(value));

Promise.reject(new Error("Error"));
new Promise((resolve, reject) => reject(new Error("Error")));
Promise.reject(new Error("Error")).catch((error) => console.log(error));
