const os = require("os"); //builtin

//info about current users
const user = os.userInfo();
console.log(user);
//returns the system uptime in seconds
console.log(`The System uptime is ${os.uptime()} seconds`);
//creating a object
const currentos = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentos);
