// create a function that generates a random number between given range
const prompt = require("prompt-sync")();
let randomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

let min = parseInt(prompt("enter min :"));
let max = parseInt(prompt("enter max :"));

console.log(randomNum(min, max));
