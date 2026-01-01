console.log(require("./functions.js"));

// Output
// { add: [Function: add] }

const functions = require("./functions.js");

console.log(functions.add(1, 2));

// Output 
// 3

const { add } = require("./functions.js");

console.log(add(1, 2));

// Output 
// 3
