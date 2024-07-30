"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterCounter = exports.BinarySearch = exports.LinearSearch = exports.QuickSort = exports.SelectionSort = exports.BubbleSort = void 0;
class BubbleSort {
    static sort(array) {
        let n = array.length;
        let swapped;
        do {
            swapped = false;
            for (let i = 0; i < n - 1; i++) {
                if (array[i] > array[i + 1]) {
                    [array[i], array[i + 1]] = [array[i + 1], array[i]];
                    swapped = true;
                }
            }
            n--;
        } while (swapped);
        return array;
    }
}
exports.BubbleSort = BubbleSort;
const bubbleUnsortedArray = [64, 34, 25, 12, 22, 11, 90];
const bubbleSortedArray = BubbleSort.sort(bubbleUnsortedArray);
console.log(`Bubble Sorted array: ${bubbleSortedArray}`);
class SelectionSort {
    static sort(arr) {
        let n = arr.length;
        for (let i = 0; i < n - 1; i++) {
            let minIndex = i;
            for (let j = i + 1; j < n; j++) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }
            if (minIndex !== i) {
                [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
            }
        }
        return arr;
    }
}
exports.SelectionSort = SelectionSort;
const selectionUnsortedArray = [
    "Stark",
    "Lannister",
    "Targaryen",
    "Baratheon",
    "Greyjoy",
    "Martell",
];
const selectionSortedArray = SelectionSort.sort(selectionUnsortedArray);
console.log(`Selection Sorted array: ${selectionSortedArray}`);
class QuickSort {
    static sort(array) {
        if (array.length <= 1) {
            return array;
        }
        const pivot = array[array.length - 1];
        const left = [];
        const right = [];
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] < pivot) {
                left.push(array[i]);
            }
            else {
                right.push(array[i]);
            }
        }
        return [...QuickSort.sort(left), pivot, ...QuickSort.sort(right)];
    }
}
exports.QuickSort = QuickSort;
const quickUnsortedArray = [
    "Stark",
    "Lannister",
    "Targaryen",
    "Baratheon",
    "Greyjoy",
    "Martell",
];
const quickSortedArray = QuickSort.sort(quickUnsortedArray);
console.log(`Quick Sorted array: ${quickSortedArray}`);
class LinearSearch {
    static search(array, target) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === target) {
                return i;
            }
        }
        return -1;
    }
}
exports.LinearSearch = LinearSearch;
const linearSearchArray = [
    "Stark",
    "Lannister",
    "Targaryen",
    "Baratheon",
    "Greyjoy",
    "Martell",
];
const linearSearchTarget1 = "Lannister";
const linearSearchIndex1 = LinearSearch.search(linearSearchArray, linearSearchTarget1);
console.log(`Index of ${linearSearchTarget1} in linear search: ${linearSearchIndex1}`);
class BinarySearch {
    static search(array, target) {
        let left = 0;
        let right = array.length - 1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (array[mid] === target) {
                return mid;
            }
            else if (array[mid] < target) {
                left = mid + 1;
            }
            else {
                right = mid - 1;
            }
        }
        return -1;
    }
}
exports.BinarySearch = BinarySearch;
const binarySearchArray = [
    "Baratheon",
    "Greyjoy",
    "Lannister",
    "Martell",
    "Stark",
    "Targaryen",
];
const binarySearchTarget1 = "Lannister";
const binarySearchIndex1 = BinarySearch.search(binarySearchArray, binarySearchTarget1);
console.log(`Index of ${binarySearchTarget1} in binary search: ${binarySearchIndex1}`);
class CharacterCounter {
    static countOccurrences(input) {
        const charCount = {};
        for (const char of input) {
            charCount[char] = (charCount[char] || 0) + 1;
        }
        return charCount;
    }
}
exports.CharacterCounter = CharacterCounter;
const gotString1 = "Winter is coming";
const count1 = CharacterCounter.countOccurrences(gotString1);
console.log(`Character occurrences in '${gotString1}':`, count1);
