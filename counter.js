// create a counter using closure function

let counter = () => {
  let count = 0;
  return () => {
    return ++count;
  };
};
let counterNumber = counter();
console.log(counterNumber()); // output: 1
console.log(counterNumber()); // output: 1

console.log(counterNumber()); // output: 1
console.log(counterNumber()); // output: 1
