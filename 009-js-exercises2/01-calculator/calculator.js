function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function sum(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr.reduce((total, arg) => {
    return total + arg;
  }, 0);
}

function multiply(arr) {
  return arr.reduce((total, arg) => {
    return total * arg;
  }, 1);
}

function power(num, pwr) {
  return num ** pwr;
}

function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
