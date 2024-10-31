let removeElement = (arr, target) => {
  return arr.filter((item) => item !== target);
};
let arr = [12, 11, 10, 123, 11, 14, 11, 12, 14, 15, 10];
let target = 11;
console.log(removeElement(arr, target));
console.log(`removed element : ${target}`);
