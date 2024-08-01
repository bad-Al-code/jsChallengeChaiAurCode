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

const text = "JavaScript is a versatile language. I love JavaScript!";
const occurrences = findJavaScriptOccurrences(text);
console.log(`Occurrences: ${occurrences.join(", ")}`);
