let largestElement = (arr) => {
  return arr.reduce((max, current) => (current > max ? current : max));
};

let arr = [1, 2, 3, 4, 5];
let lar = largestElement(arr);
console.log(lar);
