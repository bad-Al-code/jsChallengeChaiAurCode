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
class ListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}
class LinkedListMerger {
    static mergeSortedLists(list1, list2) {
        const dummy = new ListNode(0);
        let current = dummy;
        while (list1 !== null && list2 !== null) {
            if (list1.value < list2.value) {
                current.next = list1;
                list1 = list1.next;
            }
            else {
                current.next = list2;
                list2 = list2.next;
            }
            current = current.next;
        }
        // remiining nodes
        current.next = list1 !== null ? list1 : list2;
        console.log("Merged list created successfully. The North remembers.");
        return dummy.next;
    }
}
function printList(head) {
    let current = head;
    const values = [];
    while (current !== null) {
        values.push(current.value);
        current = current.next;
    }
    console.log(values.join(" -> "));
}
const list1 = new ListNode(1, new ListNode(3, new ListNode(5)));
const list2 = new ListNode(2, new ListNode(4, new ListNode(6)));
const mergedList = LinkedListMerger.mergeSortedLists(list1, list2);
printList(mergedList);
