// 2. Comparison and logical operation script: Create a script the pcompares two numbers using different comparison operators and combines conditions using logical operators, logging the results
let num1: number = 10;
let num2: number = 5;

console.log("num1 > num2 : ", num1 > num2);
console.log("num1 < num2 : ", num1 < num2);

console.log("num1 <= num2 : ", num1 <= num2);
console.log("num1 >= num2 : ", num1 >= num2);

console.log("num1 == num2 : ", num1 == num2);
console.log("num1 === num2 : ", num1 === num2);

let firstCondition: boolean = num1 > num2;
let secondCondition: boolean = num1 < num2;

console.log(
  "firstCondition && secondCondition: ",
  firstCondition && secondCondition,
);
console.log(
  "firstCondition ||  secondCondition: ",
  firstCondition || secondCondition,
);
console.log("!firstCondition : ", !firstCondition);
console.log("!secondCondition : ", !secondCondition);
