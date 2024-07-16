let number: number = 5;
let factorial: number = 1;
let k: number = 1;
do {
  factorial *= k;
  k++;
} while (k <= number);
console.log(`Factorial of ${number} is ${factorial}`);
