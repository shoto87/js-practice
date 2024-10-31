// prototype for adding product values etc
function Product(name, price, quantity) {
  this.name = name;
  this.price = price;
  this.quantity = quantity;
}

Product.prototype.calculateTotalValue = function () {
  return this.price * this.quantity;
};

let product1 = new Product("item 1", 17, 4);
console.log(product1.calculateTotalValue()); // output: 68
console.log(Product.prototype);
console.log(product1);
