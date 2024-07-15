// FEATURE REQUEST
// 1. Number Check Script: Write a script that check if a number is positive, negative, or zero using if-else statements and logs the result

function checkNumber(number) {
  if (number > 0) {
    console.log(`${number} is positive.`);
  } else if (number < 0) {
    console.log(`${number} is negative.`);
  } else {
    console.log(`${number} is zero.`);
  }
}

checkNumber(5);
checkNumber(-5);
checkNumber(0);
