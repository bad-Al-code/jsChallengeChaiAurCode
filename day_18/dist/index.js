"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fibonacci = exports.ArrayMerger = exports.ArrayRotator = exports.LongestUniqueSubstring = exports.CharacterCounter = exports.BinarySearch = exports.LinearSearch = exports.QuickSort = exports.SelectionSort = exports.BubbleSort = void 0;
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
class LongestUniqueSubstring {
    static findLongestSubstring(input) {
        let maxLength = 0;
        let start = 0;
        let longestSubstring = "";
        const seenChars = {};
        for (let end = 0; end < input.length; end++) {
            const currentChar = input[end];
            if (seenChars[currentChar] !== undefined &&
                seenChars[currentChar] >= start) {
                start = seenChars[currentChar] + 1;
            }
            seenChars[currentChar] = end;
            const currentLength = end - start + 1;
            if (currentLength > maxLength) {
                maxLength = currentLength;
                longestSubstring = input.slice(start, end + 1);
            }
        }
        return longestSubstring;
    }
}
exports.LongestUniqueSubstring = LongestUniqueSubstring;
const longestString = "Daenerys Targaryen";
const longestSubstring1 = LongestUniqueSubstring.findLongestSubstring(longestString);
console.log(`Longest unique substring in '${longestString}': ${longestSubstring1}`);
class ArrayRotator {
    static rotate(array, k) {
        const n = array.length;
        if (n === 0 || k % n === 0)
            return array;
        k = k % n;
        return array.slice(-k).concat(array.slice(0, n - k));
    }
}
exports.ArrayRotator = ArrayRotator;
const gotArray1 = [
    "Stark",
    "Lannister",
    "Targaryen",
    "Baratheon",
    "Greyjoy",
    "Martell",
];
const rotatedArray1 = ArrayRotator.rotate(gotArray1, 2);
console.log(`Array rotated by 2 positions: ${rotatedArray1}`);
class ArrayMerger {
    static mergeSortedArrays(array1, array2) {
        const mergedArray = [];
        let i = 0, j = 0;
        while (i < array1.length && j < array2.length) {
            if (array1[i] < array2[j]) {
                mergedArray.push(array1[i]);
                i++;
            }
            else {
                mergedArray.push(array2[j]);
                j++;
            }
        }
        while (i < array1.length) {
            mergedArray.push(array1[i]);
            i++;
        }
        while (j < array2.length) {
            mergedArray.push(array2[j]);
            j++;
        }
        return mergedArray;
    }
}
exports.ArrayMerger = ArrayMerger;
const array1 = ["Arya", "Bran", "Jon", "Sansa"];
const array2 = ["Daenerys", "Jaime", "Tyrion"];
const mergedArray = ArrayMerger.mergeSortedArrays(array1, array2);
console.log(`Merged sorted array: ${mergedArray}`);
class Fibonacci {
    static calculate(n) {
        if (n <= 1)
            return n;
        const dp = [0, 1];
        for (let i = 2; i <= n; i++) {
            dp[i] = dp[i - 1] + dp[i - 2];
        }
        return dp[n];
    }
}
exports.Fibonacci = Fibonacci;
const position1 = 4;
const fibValue1 = Fibonacci.calculate(position1);
console.log(`Fibonacci value at position ${position1}: ${fibValue1}`);
