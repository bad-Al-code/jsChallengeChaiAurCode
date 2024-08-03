"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListNode = void 0;
exports.addTwoNumbers = addTwoNumbers;
exports.lengthOfLongestSubstring = lengthOfLongestSubstring;
exports.maxArea = maxArea;
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