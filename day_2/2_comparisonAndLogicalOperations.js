let num1 = 10;
let num2 = 5;

console.log("num1 > num2 : ", num1 > num2);
console.log("num1 < num2 : ", num1 < num2);

console.log("num1 <= num2 : ", num1 <= num2);
console.log("num1 >= num2 : ", num1 >= num2);

console.log("num1 == num2 : ", num1 == num2);
console.log("num1 === num2 : ", num1 === num2);

let firstCondition = num1 > num2;
let secondCondition = num1 < num2;

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
