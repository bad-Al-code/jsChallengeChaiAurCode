function callFunctionNTimes(func, n) {
  for (let i = 0; i < n; i++) {
    func();
  }
}

// Higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result
function applyFunctions(func1, func2, value) {
  return func2(func1(value));
}

// Example usage
function sayName() {
  console.log("Al!");
}

callFunctionNTimes(sayName, 3);

function addOne(x) {
  return x + 1;
}

function square(x) {
  return x * x;
}

console.log(applyFunctions(addOne, square, 2)); // Output: 9
