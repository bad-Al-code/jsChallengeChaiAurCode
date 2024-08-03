"use strict";
class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}
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
console.log(result);
printLinkedList(result);
