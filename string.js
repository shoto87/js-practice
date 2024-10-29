// string manipulation
// reverse string
let string = "this is a string";

let reverseString = (string) => {
  return string.split("").reverse().join("");
};
// console.log(reverseString(string));

let split = (string) => {
  return string.split(" ");
};
console.log(split(string));

let splitReversed = (string) => {
  return string.split(" ").reverse();
};
console.log(splitReversed(string));

let join = (string) => {
  return string.split("").reverse().join("");
};
console.log(join(string));
