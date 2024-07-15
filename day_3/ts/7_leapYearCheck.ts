// FEATURE REQUEST
// 5. Leap Year Check Script: Write a script that checks if a yeat is a leap year using multiple conditions and logs the result

function checkLeapYear(year: number): void {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(`${year} is a leap year.`);
  } else {
    console.log(`${year} is not a leap year.`);
  }
}

checkLeapYear(2024);
checkLeapYear(2014);
