"use strict";
/**
 * Finds the median of two sorted arrays.
 * @param nums1 - The first sorted array.
 * @param nums2 - The second sorted array.
 * @returns The median of the two sorted arrays.
 */
function findMedianSortedArrays(nums1, nums2) {
    //  nums1 is the smaller array
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }
    const m = nums1.length;
    const n = nums2.length;
    let imin = 0, imax = m, halfLen = Math.floor((m + n + 1) / 2);
    while (imin <= imax) {
        const i = Math.floor((imin + imax) / 2);
        const j = halfLen - i;
        if (i < m && nums2[j - 1] > nums1[i]) {
            imin = i + 1; // i is too small
        }
        else if (i > 0 && nums1[i - 1] > nums2[j]) {
            imax = i - 1; // i is too big
        }
        else {
            let maxLeft = 0;
            if (i === 0)
                maxLeft = nums2[j - 1];
            else if (j === 0)
                maxLeft = nums1[i - 1];
            else
                maxLeft = Math.max(nums1[i - 1], nums2[j - 1]);
            if ((m + n) % 2 === 1) {
                return maxLeft; // Odd length, return the max of left
            }
            let minRight = 0;
            if (i === m)
                minRight = nums2[j];
            else if (j === n)
                minRight = nums1[i];
            else
                minRight = Math.min(nums1[i], nums2[j]);
            return (maxLeft + minRight) / 2; // Even length, return average of middle two
        }
    }
    throw new Error("Input arrays are not sorted or are invalid.");
}
console.log("Median of [1, 3] and [2]:", findMedianSortedArrays([1, 3], [2])); // Expected: 2
console.log("Median of [1, 2] and [3, 4]:", findMedianSortedArrays([1, 2], [3, 4]));
console.log("Median of [0, 0] and [0, 0]:", findMedianSortedArrays([0, 0], [0, 0]));
console.log("Median of [] and [1]:", findMedianSortedArrays([], [1]));
console.log("Median of [1] and []:", findMedianSortedArrays([1], []));
/*
 Time: O(log(min(m, n))), where m -> length of nums1 and n -> length of nums2
 Space: O(1)
 */ // Definition for singly-linked list.
class ListNode {
    constructor(val, next = null) {
        this.next = null;
        this.val = val;
        this.next = next;
    }
}
class MinHeap {
    constructor(compare) {
        this.heap = [];
        this.compare = compare;
    }
    push(item) {
        this.heap.push(item);
        this.bubbleUp(this.heap.length - 1);
    }
    pop() {
        if (this.heap.length === 0)
            return null;
        const root = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.bubbleDown(0);
        }
        return root;
    }
    get length() {
        return this.heap.length;
    }
    bubbleUp(index) {
        const element = this.heap[index];
        let parentIndex = Math.floor((index - 1) / 2);
        while (index > 0 && this.compare(element, this.heap[parentIndex]) < 0) {
            this.heap[index] = this.heap[parentIndex];
            index = parentIndex;
            parentIndex = Math.floor((index - 1) / 2);
        }
        this.heap[index] = element;
    }
    bubbleDown(index) {
        const length = this.heap.length;
        const element = this.heap[index];
        let leftChildIndex = 2 * index + 1;
        let rightChildIndex = 2 * index + 2;
        let smallest = index;
        if (leftChildIndex < length &&
            this.compare(this.heap[leftChildIndex], this.heap[smallest]) < 0) {
            smallest = leftChildIndex;
        }
        if (rightChildIndex < length &&
            this.compare(this.heap[rightChildIndex], this.heap[smallest]) < 0) {
            smallest = rightChildIndex;
        }
        if (smallest !== index) {
            [this.heap[index], this.heap[smallest]] = [
                this.heap[smallest],
                this.heap[index],
            ];
            this.bubbleDown(smallest);
        }
    }
}
/**
 * Merges k sorted linked lists into one sorted linked list.
 * @param lists - An array of k sorted linked lists.
 * @returns The merged sorted linked list.
 */
function mergeKLists(lists) {
    if (lists.length === 0)
        return null;
    const minHeap = new MinHeap((a, b) => a.val - b.val);
    for (const list of lists) {
        if (list) {
            minHeap.push(list);
        }
    }
    const dummyHead = new ListNode(0);
    let current = dummyHead;
    while (minHeap.length > 0) {
        const node = minHeap.pop();
        if (node) {
            current.next = node;
            current = current.next;
            // If there's a next node, push it into the heap
            if (node.next) {
                minHeap.push(node.next);
            }
        }
    }
    return dummyHead.next;
}
function printList(head) {
    let result = "";
    let current = head;
    while (current) {
        result += `${current.val} -> `;
        current = current.next;
    }
    console.log(result + "null");
}
const list1 = new ListNode(1, new ListNode(4, new ListNode(5)));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
const list3 = new ListNode(2, new ListNode(6));
const mergedList = mergeKLists([list1, list2, list3]);
printList(mergedList); // Expected: 1 -> 1 -> 2 -> 3 -> 4 -> 4 -> 5 -> 6 -> null
