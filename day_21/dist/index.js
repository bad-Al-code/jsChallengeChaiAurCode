"use strict";
function twoSumProblem(numbers, target) {
    // map
    const numberMap = new Map();
    for (let i = 0; i < numbers.length; i++) {
        const currentNumber = numbers[i];
        const remainingNumber = target - currentNumber;
        if (numberMap.has(remainingNumber)) {
            console.log(`Found: ${currentNumber} and ${remainingNumber} adds up to ${target}`);
            console.log(`Indices are: ${i} and ${numberMap.get(remainingNumber)}`);
            return [numberMap.get(remainingNumber), i];
        }
        numberMap.set(currentNumber, i);
    }
    console.log(`Fuck off, there is no two number's add up to ${target} in the array`);
    return null;
}
const numbers = [1, 2, 4, 5, 10];
const target = 9;
console.log(twoSumProblem(numbers, target));
class IntergerReverse {
    static reverseIntergers(number) {
        const negativeNumber = number < 0;
        const reversedString = Math.abs(number)
            .toString()
            .split("")
            .reverse()
            .join("");
        const reversedNumber = parseInt(reversedString);
        return negativeNumber ? -reversedNumber : reversedNumber;
    }
}
const number = -10121;
console.log(IntergerReverse.reverseIntergers(number));
// TODO: function takes an integer and returns true if it is a palindrome and false otherwise.
// NOTE: Handle edge cases like -> negative numbers
class PalindromeValidator {
    static isPalindrome(number) {
        if (number < 0)
            return false;
        const numberString = number.toString();
        const isPalindrome = numberString === numberString.split("").reverse().join("");
        return isPalindrome;
    }
}
const palindromeNumber = -12321;
console.log(PalindromeValidator.isPalindrome(palindromeNumber));
