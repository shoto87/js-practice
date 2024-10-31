const prompt = require("prompt-sync")();
let fact = (n) => {
  if (n === 1 || n === 0) {
    return 1;
  } else {
    return n * fact(n - 1);
  }
};
let num = parseInt(prompt("enter number : "));
console.log(fact(num));
