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

// which one returns first?

async2();
async1();

// surprised?

// Continue to callback.js
