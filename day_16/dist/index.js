"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeNode = void 0;
exports.calculateFactorial = calculateFactorial;
exports.calculateFibonacci = calculateFibonacci;
exports.calculateSum = calculateSum;
exports.findMax = findMax;
exports.reverseString = reverseString;
exports.isPalindrome = isPalindrome;
exports.binarySearch = binarySearch;
exports.countOccurrences = countOccurrences;
exports.inOrderTraversal = inOrderTraversal;
exports.calculateDepth = calculateDepth;
function calculateFactorial(n) {
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers. As the Starks say, 'Winter is Coming' for those who try to defy math.");
    }
    if (!Number.isInteger(n)) {
        throw new Error("Factorial is only defined for integers. As Arya would say, 'Stick them with the pointy end' of correct types.");
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * calculateFactorial(n - 1);
}
// Test cases with Game of Thrones references
const testValues = [0, 1, 5, 10, -1, 3.5];
testValues.forEach((value) => {
    try {
        const result = calculateFactorial(value);
        console.log(`The factorial of ${value} is ${result}. As Tyrion would say, 'That's what I do. I calculate, and I know things.'`);
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(`Error calculating factorial for ${value}: ${error.message}. As Cersei would say, 'When you play the game of factorials, you win or you die.'`);
        }
        else {
            console.error(`Unknown error calculating factorial for ${value}. As the Maesters would say, 'Knowledge is power, and we need more of it.'`);
        }
    }
});
function calculateFibonacci(n) {
    if (n < 0) {
        throw new Error("Fibonacci is not defined for negative numbers.");
    }
    if (!Number.isInteger(n)) {
        throw new Error("Fibonacci is only defined for integers.");
    }
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    return calculateFibonacci(n - 1) + calculateFibonacci(n - 2);
}
// Test Cases
const fibonacciTestValues = [0, 1, 5, 10, -1, 3.5];
fibonacciTestValues.forEach((value) => {
    try {
        const result = calculateFibonacci(value);
        console.log(`The Fibonacci number at position ${value} is ${result}.`);
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(`Error calculating Fibonacci for ${value}: ${error.message}`);
        }
        else {
            console.error(`Unknown error calculating Fibonacci for ${value}.`);
        }
    }
});
function calculateSum(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("Input is not an array.");
    }
    if (arr.length === 0) {
        return 0;
    }
    if (typeof arr[0] !== "number") {
        throw new Error("Array contains non-number elements.");
    }
    if (arr.length === 1) {
        return arr[0];
    }
    return arr[0] + calculateSum(arr.slice(1));
}
// Test cases
const sumTestValues = [
    [1, 2, 3, 4, 5],
    [10, -2, 3, 7],
    [],
    [42],
    "not an array",
    [1, "string", 3],
];
sumTestValues.forEach((value) => {
    try {
        const result = calculateSum(value);
        console.log(`The sum of [${value}] is ${result}.`);
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(`Error calculating sum for [${value}]: ${error.message}`);
        }
        else {
            console.error(`Unknown error calculating sum for [${value}].`);
        }
    }
});
function findMax(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("Input is not an array.");
    }
    if (arr.length === 0) {
        throw new Error("Array is empty.");
    }
    if (typeof arr[0] !== "number") {
        throw new Error("Array contains non-number elements.");
    }
    if (arr.length === 1) {
        return arr[0];
    }
    const subMax = findMax(arr.slice(1));
    return arr[0] > subMax ? arr[0] : subMax;
}
// Test cases
const maxTestValues = [
    [1, 2, 3, 4, 5],
    [10, -2, 3, 7],
    [42],
    [],
    "not an array",
    [1, "string", 3],
];
maxTestValues.forEach((value) => {
    try {
        const result = findMax(value);
        console.log(`The maximum element in [${value}] is ${result}.`);
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(`Error finding max for [${value}]: ${error.message}`);
        }
        else {
            console.error(`Unknown error finding max for [${value}].`);
        }
    }
});
function reverseString(str) {
    if (typeof str !== "string") {
        throw new Error("Input is not a string.");
    }
    if (str.length === 0) {
        return str;
    }
    return reverseString(str.slice(1)) + str[0];
}
// Test cases
const stringTestValues = [
    "hello",
    "world",
    "",
    "TypeScript",
    12345,
    true,
];
stringTestValues.forEach((value) => {
    try {
        const result = reverseString(value);
        console.log(`The reverse of "${value}" is "${result}".`);
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(`Error reversing "${value}": ${error.message}`);
        }
        else {
            console.error(`Unknown error reversing "${value}".`);
        }
    }
});
function isPalindrome(str) {
    if (typeof str !== "string") {
        throw new Error("Input is not a string.");
    }
    if (str.length <= 1) {
        return true;
    }
    if (str[0] !== str[str.length - 1]) {
        return false;
    }
    return isPalindrome(str.slice(1, str.length - 1));
}
// Test cases
const palindromeTestValues = [
    "racecar",
    "madam",
    "hello",
    "A man, a plan, a canal, Panama",
    "",
    12321,
    true,
];
palindromeTestValues.forEach((value) => {
    try {
        const result = isPalindrome(value);
        console.log(`"${value}" is ${result ? "" : "not "}a palindrome.`);
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(`Error checking palindrome for "${value}": ${error.message}`);
        }
        else {
            console.error(`Unknown error checking palindrome for "${value}".`);
        }
    }
});
function binarySearch(arr, target, left = 0, right = arr.length - 1) {
    if (!Array.isArray(arr)) {
        throw new Error("Input is not an array.");
    }
    if (arr.length === 0) {
        return -1;
    }
    if (!arr.every((val, i, array) => !i || array[i - 1] <= val)) {
        throw new Error("Array is not sorted.");
    }
    if (left > right) {
        return -1;
    }
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
        return mid;
    }
    else if (arr[mid] > target) {
        return binarySearch(arr, target, left, mid - 1);
    }
    else {
        return binarySearch(arr, target, mid + 1, right);
    }
}
// Test cases
const searchTestValues = [
    { arr: [1, 2, 3, 4, 5], target: 3 },
    { arr: [10, 20, 30, 40, 50], target: 25 },
    { arr: [1], target: 1 },
    { arr: [], target: 1 },
    { arr: [5, 4, 3, 2, 1], target: 3 },
    { arr: [10, 20, 30, 40, 50], target: 10 },
];
searchTestValues.forEach(({ arr, target }) => {
    try {
        const result = binarySearch(arr, target);
        console.log(`The target ${target} is ${result !== -1 ? `at index ${result}` : "not found"} in [${arr}].`);
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(`Error performing binary search for ${target} in [${arr}]: ${error.message}`);
        }
        else {
            console.error(`Unknown error performing binary search for ${target} in [${arr}].`);
        }
    }
});
function countOccurrences(arr, target, index = 0) {
    if (!Array.isArray(arr)) {
        throw new Error("Input is not an array.");
    }
    if (index >= arr.length) {
        return 0;
    }
    return ((arr[index] === target ? 1 : 0) + countOccurrences(arr, target, index + 1));
}
// Test cases
const countTestValues = [
    { arr: [1, 2, 3, 4, 5, 3, 3], target: 3 },
    { arr: [10, 20, 30, 40, 50], target: 25 },
    { arr: ["a", "b", "c", "a", "a"], target: "a" },
    { arr: [], target: 1 },
    { arr: [true, false, true, true], target: true },
    { arr: [1, 2, 3, 4, 5], target: 6 },
];
countTestValues.forEach(({ arr, target }) => {
    try {
        const result = countOccurrences(arr, target);
        console.log(`The target ${target} occurs ${result} time(s) in [${arr}].`);
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(`Error counting occurrences of ${target} in [${arr}]: ${error.message}`);
        }
        else {
            console.error(`Unknown error counting occurrences of ${target} in [${arr}].`);
        }
    }
});
class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}
exports.TreeNode = TreeNode;
function inOrderTraversal(node) {
    if (node === null) {
        return;
    }
    inOrderTraversal(node.left);
    console.log(node.value);
    inOrderTraversal(node.right);
}
// Test Cases
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);
console.log("In-order traversal of the binary tree:");
inOrderTraversal(root);
function calculateDepth(node) {
    if (node === null) {
        return 0;
    }
    const leftDepth = calculateDepth(node.left);
    const rightDepth = calculateDepth(node.right);
    return Math.max(leftDepth, rightDepth) + 1;
}
// Test Cases
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);
console.log("Depth of the binary tree:", calculateDepth(root));
