"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListNode = void 0;
exports.addTwoNumbers = addTwoNumbers;
exports.lengthOfLongestSubstring = lengthOfLongestSubstring;
exports.maxArea = maxArea;
exports.groupAnagrams = groupAnagrams;
exports.threeSum = threeSum;
class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}
exports.ListNode = ListNode;
function addTwoNumbers(lannisterList, starkList) {
    let head = new ListNode(0);
    let current = head;
    let carry = 0;
    while (lannisterList !== null || starkList !== null) {
        let lannisterVal = lannisterList !== null ? lannisterList.val : 0;
        let starkVal = starkList !== null ? starkList.val : 0;
        let sum = lannisterVal + starkVal + carry;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
        if (lannisterList !== null)
            lannisterList = lannisterList.next;
        if (starkList !== null)
            starkList = starkList.next;
    }
    if (carry > 0) {
        current.next = new ListNode(carry);
    }
    console.log("Sum list created successfully, Your Grace.");
    return head.next;
}
function printLinkedList(node) {
    let result = [];
    while (node !== null) {
        result.push(node.val);
        node = node.next;
    }
    console.log(result.join(" -> "));
}
const list1 = new ListNode(2, new ListNode(4, new ListNode(3)));
const list2 = new ListNode(5, new ListNode(6, new ListNode(4)));
const result = addTwoNumbers(list1, list2);
// console.log(result);
printLinkedList(result);
function lengthOfLongestSubstring(daenerysStr) {
    let dragonMap = new Map();
    let maxLength = 0;
    let start = 0;
    for (let end = 0; end < daenerysStr.length; end++) {
        let currentChar = daenerysStr[end];
        if (dragonMap.has(currentChar)) {
            start = Math.max(start, (dragonMap.get(currentChar) || 0) + 1);
        }
        dragonMap.set(currentChar, end);
        maxLength = Math.max(maxLength, end - start + 1);
    }
    console.log("Longest unique substring found, Your Grace.");
    return maxLength;
}
const testCases = ["targaryen", "", "jon", "aaaa", "sersei"];
testCases.forEach((testCase) => {
    const result = lengthOfLongestSubstring(testCase);
    console.log(`Input: "${testCase}", Output: ${result}`);
});
function maxArea(brienneHeights) {
    let left = 0;
    let right = brienneHeights.length - 1;
    let maxWater = 0;
    while (left < right) {
        const height = Math.min(brienneHeights[left], brienneHeights[right]);
        const width = right - left;
        const currentWater = height * width;
        maxWater = Math.max(maxWater, currentWater);
        if (brienneHeights[left] < brienneHeights[right]) {
            left++;
        }
        else {
            right--;
        }
    }
    console.log(`Maximum water contained, Your Grace: ${maxWater}`);
    return maxWater;
}
const testHeights1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const testHeights2 = [4, 3, 2, 1, 4];
const testHeights3 = [1, 2, 1];
const testHeights4 = [1, 1];
const testHeights5 = [2, 3, 10, 5, 7, 8, 9];
console.log(maxArea(testHeights1));
console.log(maxArea(testHeights2));
console.log(maxArea(testHeights3));
console.log(maxArea(testHeights4));
console.log(maxArea(testHeights5));
function groupAnagrams(daenerysWords) {
    let dragonMap = new Map();
    daenerysWords.forEach((word) => {
        let sortedWord = word.split("").sort().join("");
        if (!dragonMap.has(sortedWord)) {
            dragonMap.set(sortedWord, []);
        }
        dragonMap.get(sortedWord).push(word);
    });
    console.log("Anagrams grouped successfully, Your Grace.");
    return Array.from(dragonMap.values());
}
const testWords1 = ["eat", "tea", "tan", "ate", "nat", "bat"];
const testWords2 = [""];
const testWords3 = ["a"];
const testWords4 = ["cider", "cried", "dicer", "repaid", "diaper", "paired"];
const testWords5 = ["listen", "silent", "enlist", "inlets", "google", "gogole"];
console.log(groupAnagrams(testWords1));
console.log(groupAnagrams(testWords2));
console.log(groupAnagrams(testWords3));
console.log(groupAnagrams(testWords4));
console.log(groupAnagrams(testWords5));
function threeSum(tyrionNumbers) {
    let results = [];
    if (tyrionNumbers.length < 3) {
        console.log("Not enough elements for triplets, Your Grace.");
        return results;
    }
    tyrionNumbers.sort((a, b) => a - b);
    for (let i = 0; i < tyrionNumbers.length - 2; i++) {
        if (i > 0 && tyrionNumbers[i] === tyrionNumbers[i - 1]) {
            continue;
        }
        let left = i + 1;
        let right = tyrionNumbers.length - 1;
        while (left < right) {
            const sum = tyrionNumbers[i] + tyrionNumbers[left] + tyrionNumbers[right];
            if (sum === 0) {
                results.push([
                    tyrionNumbers[i],
                    tyrionNumbers[left],
                    tyrionNumbers[right],
                ]);
                console.log(`Triplet found, Your Grace: [${tyrionNumbers[i]}, ${tyrionNumbers[left]}, ${tyrionNumbers[right]}]`);
                while (left < right && tyrionNumbers[left] === tyrionNumbers[left + 1])
                    left++;
                while (left < right &&
                    tyrionNumbers[right] === tyrionNumbers[right - 1])
                    right--;
                left++;
                right--;
            }
            else if (sum < 0) {
                left++;
            }
            else {
                right--;
            }
        }
    }
    console.log("All triplets have been logged, Your Grace.");
    return results;
}
const testNumbers1 = [-1, 0, 1, 2, -1, -4];
const testNumbers2 = [];
const testNumbers3 = [0];
const testNumbers4 = [0, 0, 0];
const testNumbers5 = [-2, 0, 1, 1, 2];
console.log(threeSum(testNumbers1));
console.log(threeSum(testNumbers2));
console.log(threeSum(testNumbers3));
console.log(threeSum(testNumbers4));
console.log(threeSum(testNumbers5));
