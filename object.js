// object andmethod simple functions

let car1 = {
  name: "mcLarren",
  model: "c1",
  start: function () {
    console.log("starting");
  },
};
console.log(car1);
car1.start();

// **usinng arrow function**********

let car2 = {
  name: "Buggati",
  model: "Veyron",
  year: 2020,
  color: "Red",
  enginestarted: () => {
    console.log(" is started");
  },
};
console.log(car2);
car2.enginestarted();

// ***using this keyword********
let car3 = {
  name: "Wolksvegan",
  model: "Hyper Lyken",
  year: 2018,
  enginestarted: function () {
    let self = this;
    let start = () => {
      console.log(self.name + " is started");
    };
    start();
  },
};
console.log(car3);
car3.enginestarted();
