// var argument = process.argv;

// const add = (a, b) => {
//   return a + b;
// };

// console.log("argument[2]:", argument[2]);
// console.log("argument:", argument[2](argument[3], argument[4]));
// `q2`;

const fs = require("fs");

fs.readFile("./test.js", { encoding: "utf8" }, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
