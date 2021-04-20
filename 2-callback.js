// Callbacks

const fs = require("fs");

// Version 1 -> fs stat completes an asynchronous task and returns the value to the function (err, value).
// Err is contained in err;

fs.stat("/", (err, value) => {
  if (err) {
    console.error("error returning file stats", err);
  }
  console.log(value);
});

// Very old fashioned way of handling async javascript. What if we want to use the value of "value?"
// Leads to callback hell http://callbackhell.com/
// Uncomment the below lines

function otherAsyncAction(value, callback) {
  console.log("In the other action");
  callback(null, "another value");
}

// Eg:
fs.stat("/", (err, value) => {
  if (err) {
    console.error("error returning file stats", err);
  }
  otherAsyncAction(value, (err, value2) => {
    if (err) {
      console.error("error running other async task", err);
    }
    console.log(value2);
  });
});

// Proceed to promises-intro.js
