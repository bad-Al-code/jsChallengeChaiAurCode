// FEATURE REQUEST
// 3. Day of the week script: Create a script that uses a switch cas to determine the day of the week based on a number (1-7) and logs the day name

function getDayOfWeek(dayNumber: number): void {
  switch (dayNumber) {
    case 1:
      console.log("Sunday");
      break;
    case 2:
      console.log("Monday");
      break;
    case 3:
      console.log("Tuesday");
      break;
    case 4:
      console.log("Wednesday");
      break;
    case 5:
      console.log("Thursday");
      break;
    case 6:
      console.log("Friday");
      break;
    case 7:
      console.log("Saturday");
      break;

    default:
      console.log("Invalid day number");
      break;
  }
}

getDayOfWeek(4);
getDayOfWeek(1);
getDayOfWeek(10);
