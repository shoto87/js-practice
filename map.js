// use map function to double all the elements in the array

const prompt = require("prompt-sync")();

let doublearray = (arr) => {
  return arr.map((num) => num * 2);
};

let size = parseInt(prompt("enter size :"));
let arr = [];
for (let i = 0; i < size; i++) {
  let num = parseInt(prompt(`Enter value ${i + 1}: `));
  arr.push(num);
}

console.log("array before mapping ");
console.log(arr);
console.log("array after mapping ");
console.log(doublearray(arr));
