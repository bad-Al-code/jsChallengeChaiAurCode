let initialValue: string = "initial value";
console.log(initialValue);

initialValue = "reassigned value";
console.log(initialValue);

const constantValue: string = "Constant Value";
try {
} catch (error) {
  console.error("Error: Cannot reassign a variable declared with const.");
  console.error(error.message);
}

console.log(constantValue); // { unchanged value }
