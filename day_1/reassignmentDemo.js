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
// constantValue = "aslkdjaskdj";

// ERROR: connot reassign a varaible decalred with const

try {
  constantValue = "asdjalksjdklajsdkljsa";
} catch (error) {
  console.error("Error: Cannot reassign a variable devclared with const.");
  console.error(error.message);
}

console.log(constantValue); // unchanged value
