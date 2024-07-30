"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickSort = exports.SelectionSort = exports.BubbleSort = void 0;
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
