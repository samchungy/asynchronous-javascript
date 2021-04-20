// So why do we use callbacks? Well, javascript is old and some libraries still use callbacks but we can transform them into promises using the node util library!

const util = require("util");
const fs = require("fs");

const stat = util.promisify(fs.stat);

stat(".")
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.error("error returning file stats", err);
  });

// We can even hook it up to the sleep function and use then chains! Awesome!

// continue to promises-async-await
