// Version 3
// Please note that await can only be used within async functions so we will introduce a wrapper function called main
// Please note that const main = async () => {} is fundamentally the same as async function main () {} with a few exceptions but in this use case they are the same.

const fs = require("fs").promises;

const main = async () => {
  const value = await fs.stat("/").catch((err) => {
    console.error("error returning file stats", err);
  });
  console.log(value);
};

main();

// Comment out lines 7-14
// Sleep example rewritten:
// function sleep(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// const main2 = async () => {
//   const value = await fs.stat("/").catch((err) => {
//     console.error("error returning file stats", err);
//   });
//   await sleep(5000);
//   console.log(value);
// };

// main2();

// How neat!
// Comment out Lines 22-31
// Another way to represent this. If you notice there is an issue with how we handle errors in the above solution. Let's address this using try catch.

// const main3 = async () => {
//   try {
//     const value = await fs.stat("/");
//     await sleep(5000);
//     console.log(value);
//   } catch (err) {
//     console.error("error returning file stats", err);
//   }
// };

// main3();

// In this version if fs.stat throws an error, we won't log or sleep, awesome.
// We could have thrown an error in line 24-25 to stop the program from logging in main2 but what if we didn't want the program to fully error out?
// Proceed to events.js
