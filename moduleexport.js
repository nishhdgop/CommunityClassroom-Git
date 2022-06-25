//Modules
//commonJS,every file is module(by default)
//const jhon = "jhon";
const names = require("./4-names");
const sayHi = require("./function");
//console.log(names);

//sayHi("susan");
sayHi(names.jhon);
sayHi(names.peter);
//sayHi(quad);
// const add = (a, b) => {
//   console.log(a + b);
// };
// add(4, 6);
