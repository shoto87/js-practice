let arr = [10, 20, 30, 47];

let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum = sum + arr[i];
}
console.log("Sum of all elements in the array: " + sum);

// *****using function *****

let arr2 = [1, 2, 3, 4, 5, 6, 122];
let size = arr2.length;
let total = 0;

let sum2 = (arr2, size) => {
  for (let i = 0; i < size; i++) {
    total = total + arr2[i];
  }
  return total;
};
console.log("Sum of all elements " + sum2(arr2, size));
