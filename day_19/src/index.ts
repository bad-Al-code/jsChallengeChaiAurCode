export function findJavaScriptOccurrences(text: string): string[] {
  const regex = /\bjavascript\b/gi;
  const matches = text.match(regex);
  if (matches) {
    console.log(
      `By the old gods and the new, we found ${matches.length} occurrence(s) of "JavaScript".`,
    );
  } else {
    console.log(`No occurrences of "JavaScript" were found in the realm.`);
  }
  return matches || [];
}

const jsText = "JavaScript is a versatile language. I love JavaScript!";
const jsOccurrences = findJavaScriptOccurrences(jsText);
console.log(`Occurrences: ${jsOccurrences.join(", ")}`);

export function findAllDigits(text: string): string[] {
  const regex = /\d+/g;
  const matches = text.match(regex);
  if (matches) {
    console.log(
      `By the light of the Seven, we found ${matches.length} digit(s) in the string.`,
    );
  } else {
    console.log(`No digits were found in the land of text.`);
  }
  return matches || [];
}

const digitText = "The year is 2024 and there are 5 dragons.";
const digits = findAllDigits(digitText);
console.log(`Digits found: ${digits.join(", ")}`);

export function findCapitalizedWords(text: string): string[] {
  const regex = /\b[A-Z][a-z]*\b/g;
  const matches = text.match(regex);
  if (matches) {
    console.log(
      `In the name of the Seven, we found ${matches.length} capitalized word(s) in the string.`,
    );
  } else {
    console.log(`No capitalized words were found in the kingdom.`);
  }
  return matches || [];
}

const capitalizedText =
  "Winter is Coming. Jon Snow and Daenerys Targaryen are key figures.";
const capitalizedWords = findCapitalizedWords(capitalizedText);
console.log(`Capitalized words: ${capitalizedWords.join(", ")}`);

export function findDigitSequences(text: string): string[] {
  const digitSequenceRegex = /\d+/g;
  const digitSequences = text.match(digitSequenceRegex);
  if (digitSequences) {
    console.log(
      `By the old gods and the new, ${digitSequences.length} digit sequence(s) were found.`,
    );
  } else {
    console.log(`No digit sequences were found in the realm.`);
  }
  return digitSequences || [];
}

// Example
const digitSequenceText =
  "The battle took place in 2024, with 150 soldiers and 7 dragons.";
const digitSequences = findDigitSequences(digitSequenceText);
console.log(`Digit sequences found: ${digitSequences.join(", ")}`);

export function capturePhoneNumberParts(
  phoneNumber: string,
): { areaCode: string; centralOfficeCode: string; lineNumber: string } | null {
  const phoneNumberRegex = /^\((\d{3})\) (\d{3})-(\d{4})$/;
  const match = phoneNumber.match(phoneNumberRegex);

  if (match) {
    const [_, areaCode, centralOfficeCode, lineNumber] = match;
    console.log(
      `By the light of the Seven, the area code is ${areaCode}, the central office code is ${centralOfficeCode}, and the line number is ${lineNumber}.`,
    );
    return { areaCode, centralOfficeCode, lineNumber };
  } else {
    console.log(`Alas, the phone number does not match the expected format.`);
    return null;
  }
}

const examplePhoneNumber = "(123) 456-7890";
const phoneParts = capturePhoneNumberParts(examplePhoneNumber);
if (phoneParts) {
  console.log(
    `Captured parts: Area Code - ${phoneParts.areaCode}, Central Office Code - ${phoneParts.centralOfficeCode}, Line Number - ${phoneParts.lineNumber}`,
  );
}

export function captureEmailParts(
  email: string,
): { username: string; domainName: string } | null {
  const emailRegex = /^(.+)@(.+)$/;
  const match = email.match(emailRegex);

  if (match) {
    const [_, username, domainName] = match;
    console.log(
      `By the fire of the dragons, the username is "${username}" and the domain name is "${domainName}".`,
    );
    return { username, domainName };
  } else {
    console.log(`Alas, the email address does not match the expected format.`);
    return null;
  }
}

const exampleEmail = "arya.stark@winterfell.com";
const emailParts = captureEmailParts(exampleEmail);
if (emailParts) {
  console.log(
    `Captured parts: Username - ${emailParts.username}, Domain Name - ${emailParts.domainName}`,
  );
}

export function matchWordAtStart(text: string, word: string): boolean {
  const wordAtStartRegex = new RegExp(`^${word}\\b`, "i"); // Case-insensitive match
  const match = wordAtStartRegex.test(text);

  if (match) {
    console.log(
      `By the old gods and the new, the word "${word}" is present at the beginning of the string.`,
    );
  } else {
    console.log(`Alas, the word "${word}" does not start the string.`);
  }

  return match;
}

const exampleText = "Winter is coming.";
const wordToMatch = "Winter";
const isWordAtStart = matchWordAtStart(exampleText, wordToMatch);
console.log(`Word "${wordToMatch}" at the start: ${isWordAtStart}`);
