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
