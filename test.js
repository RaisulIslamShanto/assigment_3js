// const greet = (name) => {
//   console.log(`hello ${name}`);
// };

// greet("Raisul");
// greet("MAhmud");

// function gret(name) {
//   console.log(`hello, ${name}`);
// }

// gret("Zabin");
// gret("Zafrin");

// console.log(global);

global.setTimeout(() => {
  console.log("hi");
  clearInterval(int);
}, 3000);
const int = setInterval(() => {
  console.log("in the interval");
}, 1000);
