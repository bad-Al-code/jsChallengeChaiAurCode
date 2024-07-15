// FEATURE REQUEST
// 2. Voting Eligibility Script: Create a script to check if a person is eligible to vote based on their age and log the result

function checkVotingEligibilty(age) {
  if (age >= 18) {
    console.log("Eligible to vote");
  } else {
    console.log("Not eligible to vote");
  }
}

checkVotingEligibilty(21);
checkVotingEligibilty(10);
