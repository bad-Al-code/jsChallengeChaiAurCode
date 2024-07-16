// FEATURE REQUEST
// 5. Factorial Calculation Script: Create a script that calculates the factorial of aumber suing a do...while loop
let number = 10;
let factorial = 1;

let k = 1;

do {
  factorial *= k;
  k++;
} while (k <= number);

console.log(`Factorial of ${number} is ${factorial}`);
