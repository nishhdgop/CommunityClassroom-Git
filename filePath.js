const path = require("path");
console.log(path.sep);
const base = path.basename("/node");
console.log(base);
const absolute = path.resolve(__dirname, "function.js");
console.log(absolute);
