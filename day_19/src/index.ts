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
