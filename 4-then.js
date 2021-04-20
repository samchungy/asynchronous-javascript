// Version 2 -> Promises! Using our callback.js example we can change this into a much more workable solution
// fs.stat("/", (err, value) => {
//   if (err) {
//     console.error("error returning file stats", err);
//   }
//   console.log(value);
// });
// For this purpose we are using the fs promises library (Node v10+)

// Promises

const fs = require("fs").promises;

fs.stat("/")
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.error("error returning file stats", err);
  });

// But don't we run into the callback hell situation? Nope!
// Comment out the top function and we'll see what happens

// A function which simply sleeps for X milliseoconds (don't worry about the syntax)
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function waitFiveSecondsAndPrint(value) {
  sleep(5000).then(() => {
    console.log(value);
  });
}

fs.stat("/")
  .then((value) => {
    return value;
  })
  .then(waitFiveSecondsAndPrint)
  .catch((err) => {
    console.error("error returning file stats", err);
  });

// You will notice that we waited 5 seconds before printing! So what's happening here?
// The first .then receives the value from fs.stat -> and returns it. The second .then takes the value, sleeps for 5 seconds and then
// passes it to console, neat! These are called then chains.

// Jump to callback-to-then.js
