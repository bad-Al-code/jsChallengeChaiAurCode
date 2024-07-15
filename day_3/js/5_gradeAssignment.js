// FEATURE REQUEST
// 4. Grade Assignment Script: Create a script that uses a switch case to assign a grade based on a score and logs the grade

function assignGrade(score) {
  let grade;
  switch (true) {
    case score >= 90:
      grade = "A";
      break;
    case score >= 80:
      grade = "B";
      break;
    case score >= 70:
      grade = "C";
      break;
    case score >= 60:
      grade = "D";
      break;
    default:
      grade = "F";
  }
  console.log(`Score: ${score}, Grade: ${grade}`);
}

assignGrade(100);
assignGrade(33);
assignGrade(45);
assignGrade(80);
assignGrade(65);
