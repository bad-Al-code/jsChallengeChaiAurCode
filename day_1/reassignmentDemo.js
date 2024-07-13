// Reassignment Demo
// Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment

// Activity 4: Reassigning Variables
// Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console
let initialValue = "initial value";
console.log(initialValue); // "initial value"

initialValue = "reassigned value";
console.log(initialValue); // "reassigned value"

// Activity 5: Understanding const
// Try reassigning a variable declared with const, and observe the error
const constantValue = "Constant Value";
constantValue = "aslkdjaskdj";

console.log(constantValue);
// ERROR: connot reassign a varaible decalred with const
