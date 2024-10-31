// function that takes array of numbers and returns even array
let array = [10, 20, 30, 44, 23, 34, 11, 111, 121, 212];

let filter = (array) => {
  return array.filter((num) => num % 2 === 0);
};

console.log(filter(array));
