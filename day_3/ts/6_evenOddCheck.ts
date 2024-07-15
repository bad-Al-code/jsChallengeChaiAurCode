// FEATURE REQUEST
// TODO:  Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console

function checkEvenOdd(number: number): void {
  const result = number % 2 === 0 ? "even" : "odd";
  console.log(`${number} is ${result}`);
}

checkEvenOdd(3);
checkEvenOdd(4);
