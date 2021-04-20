// Promises are made up of a resolve (success state) and a reject (error state)

// Resolves flow to a happy state -> (.then)
new Promise((resolve, reject) => {
  resolve("hello world");
}).then(() => {
  console.log("hello world");
  console.log("resolved");
});

// Reject sflow to a caught error state -> (.catch)
new Promise((resolve, reject) => {
  reject("hello world");
})
  .then(() => {
    console.log("resolved");
  })
  .catch((error) => {
    console.error(error);
    console.error("rejected");
  });

// You'll notice that you cannot simply console.log a promise as you need a .then() or other methods to use the value from it. eg:

console.log(
  new Promise((resolve, reject) => {
    resolve("hello world");
  })
);

// This should return Promise { 'hello world' } with a promise wrapper surrounding hello world.

// Jump to then.js
