// Going back to the very first example, so what if we want to run this in order?
// // Generic wait function
// const sleep = (ms) => {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// };

// const async1 = async () => {
//   console.log("hello world");
// };

// const async2 = async () => {
//   await sleep(5000);
//   console.log("delayed hello world");
// };

// // // which one returns first?

// async2();
// async1();

// Generic wait function
const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const async1 = async () => {
  console.log("hello world");
};

const async2 = async () => {
  await sleep(5000);
  console.log("delayed hello world");
};

const main = async () => {
  await async2();
  await async1();
};

main();

// We should see no output for 5 seconds and then delayed hello world and then hello world.
// The first example is cool and runs them in parallel but doesn't account for errors.
// How do we run them in parallel but throw an error if just one fails?
// Uncomment the bottom

// const async3 = async () => {
//   console.log("hello world");
// };

// const async4 = async () => {
//   await sleep(5000);
//   console.log("delayed hello world");
// };

// const main2 = async () => {
//   try {
//     await Promise.all([async3(), async4()]);
//   } catch (error) {
//     console.error("one of the promises failed");
//   }
// };

// main2();

// What happens when we return a promise in a promise?

// const async5 = async () => {
//   return new Promise((resolve) => resolve(console.log("hello world")));
// };

// const async6 = async () => {
//   await sleep(5000);
//   console.log("delayed hello world");
// };

// const main3 = async () => {
//   try {
//     await Promise.all([async5(), async6()]);
//   } catch (error) {
//     console.error("one of the promises failed");
//   }
// };

// main3();

// Nothing! A Promise which returns a promise auto unpacks the inside promise wrapper so the result is always just a single promise.
