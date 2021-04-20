// Events/Streams is another way javascript does async activity

// Read a file -> print data
const fs = require("fs");

const readStream = fs.createReadStream("helloWorld.txt", "utf-8");
readStream.on("data", (data) => {
  console.log(data); // Prints Hello World!
});
readStream.on("error", (data) => {
  console.error("error reading file", error);
});

// Using promises!

const util = require("util");
const { finished } = require("stream");
const finishedPromise = util.promisify(finished);

const main = async () => {
  const rs = fs.createReadStream("helloWorld.txt", "utf-8");
  rs.on("data", (data) => {
    console.log(data);
  });

  try {
    await finishedPromise(rs);
  } catch (error) {
    console.error("error reading file", error);
  }
};

main();

// Or in Node 15 you can use the finish promise in the require("stream").promises library which means you can remove util.promisify

// Async Iterators!
// Uncomment

// const main2 = async () => {
//   const rs = fs.createReadStream("helloWorld.txt", "utf-8");
//   try {
//     for await (const chunk of rs) {
//       console.log(chunk);
//     }
//   } catch (error) {
//     console.error("error reading file", error);
//   }
// };

// main2();

// Advanced stuff Pipeline to perform multiple operations, handling all the .on events! Very advanced!
// in Node 15 you can use the finish promise in the require("stream").promises library which means you can remove util.promisify
//Uncomment and run

// const util = require("util");

// const { pipeline } = require("stream");
// const zlib = require("zlib");
// const pipelinePromise = util.promisify(pipeline);

// const main3 = async () => {
//   try {
//     await pipelinePromise(
//       fs.createReadStream("helloWorld.txt"),
//       zlib.createGzip(),
//       fs.createWriteStream("archive.tar.gz")
//     );
//   } catch (error) {
//     console.error("pipeline failed", error);
//   }
// };

// main3();
