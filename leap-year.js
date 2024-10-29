let check = (year) => {
  if (year % 4 == 0 && year % 100 != 0 && year % 400 == 0) {
    return "leap year";
  } else {
    return "not a leap year";
  }
};
console.log(check(1900));
