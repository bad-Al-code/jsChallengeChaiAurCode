// FEATURE REQUEST
// TODO: Write a program to find the largest of threee numbers using nested if-else statement

function findLargestNumber(a, b, c) {
  if (a >= b && a >= c) {
    console.log(`${a} is the largest number.`);
  } else if (b >= a && b >= c) {
    console.log(`${b} is the largest number.`);
  } else {
    console.log(`${c} is the largest number.`);
  }
}

findLargestNumber(50, 60, 70);
findLargestNumber(11, 12, 13);
