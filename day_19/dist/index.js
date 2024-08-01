"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findJavaScriptOccurrences = findJavaScriptOccurrences;
exports.findAllDigits = findAllDigits;
exports.findCapitalizedWords = findCapitalizedWords;
exports.findDigitSequences = findDigitSequences;
exports.capturePhoneNumberParts = capturePhoneNumberParts;
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
function findCapitalizedWords(text) {
    const regex = /\b[A-Z][a-z]*\b/g;
    const matches = text.match(regex);
    if (matches) {
        console.log(`In the name of the Seven, we found ${matches.length} capitalized word(s) in the string.`);
    }
    else {
        console.log(`No capitalized words were found in the kingdom.`);
    }
    return matches || [];
}
const capitalizedText = "Winter is Coming. Jon Snow and Daenerys Targaryen are key figures.";
const capitalizedWords = findCapitalizedWords(capitalizedText);
console.log(`Capitalized words: ${capitalizedWords.join(", ")}`);
function findDigitSequences(text) {
    const digitSequenceRegex = /\d+/g;
    const digitSequences = text.match(digitSequenceRegex);
    if (digitSequences) {
        console.log(`By the old gods and the new, ${digitSequences.length} digit sequence(s) were found.`);
    }
    else {
        console.log(`No digit sequences were found in the realm.`);
    }
    return digitSequences || [];
}
// Example usage
const digitSequenceText = "The battle took place in 2024, with 150 soldiers and 7 dragons.";
const digitSequences = findDigitSequences(digitSequenceText);
console.log(`Digit sequences found: ${digitSequences.join(", ")}`);
function capturePhoneNumberParts(phoneNumber) {
    const phoneNumberRegex = /^\((\d{3})\) (\d{3})-(\d{4})$/;
    const match = phoneNumber.match(phoneNumberRegex);
    if (match) {
        const [_, areaCode, centralOfficeCode, lineNumber] = match;
        console.log(`By the light of the Seven, the area code is ${areaCode}, the central office code is ${centralOfficeCode}, and the line number is ${lineNumber}.`);
        return { areaCode, centralOfficeCode, lineNumber };
    }
    else {
        console.log(`Alas, the phone number does not match the expected format.`);
        return null;
    }
}
const examplePhoneNumber = "(123) 456-7890";
const phoneParts = capturePhoneNumberParts(examplePhoneNumber);
if (phoneParts) {
    console.log(`Captured parts: Area Code - ${phoneParts.areaCode}, Central Office Code - ${phoneParts.centralOfficeCode}, Line Number - ${phoneParts.lineNumber}`);
}
