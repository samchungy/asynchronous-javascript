// .then chains look ugly and the only way to pass context is to pass them via a chain
// So.. ECMAScript 2017 introduced async/await!
// Async functions always return Promises so here's an example

async function helloWorld() {
  return "hello world";
}

console.log(helloWorld());

// this will return Promise { 'hello world' } like in our earlier example in promises-intro.js
// async functions allow us to use a special phrase called `await` to unpack our promises. Here's an example.
// Comment out line 9

async function Unpack() {
  const hello = await helloWorld();
  console.log(hello);
}

Unpack();

// Notice how Promise is now unwrapped. So we can use await instead of then! Let's convert our other functions
// Jump to then-to-async-await.js
