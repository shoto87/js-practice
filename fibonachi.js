// fibonacci series
let fib = (num) => {
  let series = [0, 1];
  for (let i = 2; i < num; i++) {
    series[i] = series[i - 1] + series[i - 2];
  }
  return series;
};
const prompt = require("prompt-sync")();
let num = parseInt(prompt("Enter the number of terms: "));
console.log(fib(num));
