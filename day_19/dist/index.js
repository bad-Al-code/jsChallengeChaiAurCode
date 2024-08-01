"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findJavaScriptOccurrences = findJavaScriptOccurrences;
exports.findAllDigits = findAllDigits;
function findJavaScriptOccurrences(text) {
    const regex = /\bjavascript\b/gi;
    const matches = text.match(regex);
    if (matches) {
        console.log(`By the old gods and the new, we found ${matches.length} occurrence(s) of "JavaScript".`);
    }
    else {
        console.log(`No occurrences of "JavaScript" were found in the realm.`);
    }
    return matches || [];
}
const jsText = "JavaScript is a versatile language. I love JavaScript!";
const jsOccurrences = findJavaScriptOccurrences(jsText);
console.log(`Occurrences: ${jsOccurrences.join(", ")}`);
function findAllDigits(text) {
    const regex = /\d+/g;
    const matches = text.match(regex);
    if (matches) {
        console.log(`By the light of the Seven, we found ${matches.length} digit(s) in the string.`);
    }
    else {
        console.log(`No digits were found in the land of text.`);
    }
    return matches || [];
}
const digitText = "The year is 2024 and there are 5 dragons.";
const digits = findAllDigits(digitText);
console.log(`Digits found: ${digits.join(", ")}`);
