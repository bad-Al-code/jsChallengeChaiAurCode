// Variable Types Console Log
// Write a script that declares variables of different data types and logs both the value and type of each variable to the console

// Activity 1: Variable Declaration
// Declare a variable using var, assign it a number, and log the value to the console
var aNumber = 1;
console.log(aNumber);

// Declare a variable using let, assign it a string, and log the value to the console
let aString = "chaiAurCode";
console.log(aString);

// Activity 2: Constant Declaration
// Declare a variable using const, assign it a boolean, and log the value to the console
const aBoolean = false;
console.log(aBoolean);

// Activity 3: Data Types
// Create variables of different data types (number, string, boolean, object, array) and log each value's type using the typeof operator
let aArray = [1, 2, 3];
let aObject = {
  name: "Al",
};

console.log(typeof aNumber); // "number"
console.log(typeof aString); // "string"
console.log(typeof aBoolean); // "boolean"
console.log(typeof aObject); // "object"
console.log(typeof aArray); // "object"

// NOTE: Arrays are actually of type 'object' in JavaScript
console.log(Array.isArray(aArray)); // true
