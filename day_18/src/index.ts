export class BubbleSort {
  public static sort(array: number[]): number[] {
    let n = array.length;
    let swapped: boolean;

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

const bubbleUnsortedArray = [64, 34, 25, 12, 22, 11, 90];
const bubbleSortedArray = BubbleSort.sort(bubbleUnsortedArray);
console.log(`Bubble Sorted array: ${bubbleSortedArray}`);

export class SelectionSort {
  public static sort(arr: string[]): string[] {
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

export class QuickSort {
  public static sort(array: string[]): string[] {
    if (array.length <= 1) {
      return array;
    }

    const pivot = array[array.length - 1];
    const left: string[] = [];
    const right: string[] = [];

    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] < pivot) {
        left.push(array[i]);
      } else {
        right.push(array[i]);
      }
    }

    return [...QuickSort.sort(left), pivot, ...QuickSort.sort(right)];
  }
}

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

export class LinearSearch {
  public static search(array: string[], target: string): number {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === target) {
        return i;
      }
    }
    return -1;
  }
}

const linearSearchArray = [
  "Stark",
  "Lannister",
  "Targaryen",
  "Baratheon",
  "Greyjoy",
  "Martell",
];
const linearSearchTarget1 = "Lannister";
const linearSearchIndex1 = LinearSearch.search(
  linearSearchArray,
  linearSearchTarget1,
);
console.log(
  `Index of ${linearSearchTarget1} in linear search: ${linearSearchIndex1}`,
);

export class BinarySearch {
  public static search(array: string[], target: string): number {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (array[mid] === target) {
        return mid;
      } else if (array[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return -1;
  }
}

const binarySearchArray = [
  "Baratheon",
  "Greyjoy",
  "Lannister",
  "Martell",
  "Stark",
  "Targaryen",
];
const binarySearchTarget1 = "Lannister";
const binarySearchIndex1 = BinarySearch.search(
  binarySearchArray,
  binarySearchTarget1,
);
console.log(
  `Index of ${binarySearchTarget1} in binary search: ${binarySearchIndex1}`,
);

export class CharacterCounter {
  public static countOccurrences(input: string): Record<string, number> {
    const charCount: Record<string, number> = {};

    for (const char of input) {
      charCount[char] = (charCount[char] || 0) + 1;
    }

    return charCount;
  }
}

const gotString1 = "Winter is coming";
const count1 = CharacterCounter.countOccurrences(gotString1);
console.log(`Character occurrences in '${gotString1}':`, count1);

export class LongestUniqueSubstring {
  public static findLongestSubstring(input: string): string {
    let maxLength = 0;
    let start = 0;
    let longestSubstring = "";
    const seenChars: Record<string, number> = {};

    for (let end = 0; end < input.length; end++) {
      const currentChar = input[end];

      if (
        seenChars[currentChar] !== undefined &&
        seenChars[currentChar] >= start
      ) {
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

const longestString = "Daenerys Targaryen";
const longestSubstring1 =
  LongestUniqueSubstring.findLongestSubstring(longestString);
console.log(
  `Longest unique substring in '${longestString}': ${longestSubstring1}`,
);

export class ArrayRotator {
  public static rotate(array: string[], k: number): string[] {
    const n = array.length;
    if (n === 0 || k % n === 0) return array;
    k = k % n;
    return array.slice(-k).concat(array.slice(0, n - k));
  }
}

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

export class ArrayMerger {
  public static mergeSortedArrays(
    array1: string[],
    array2: string[],
  ): string[] {
    const mergedArray: string[] = [];
    let i = 0,
      j = 0;

    while (i < array1.length && j < array2.length) {
      if (array1[i] < array2[j]) {
        mergedArray.push(array1[i]);
        i++;
      } else {
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

const array1 = ["Arya", "Bran", "Jon", "Sansa"];
const array2 = ["Daenerys", "Jaime", "Tyrion"];
const mergedArray = ArrayMerger.mergeSortedArrays(array1, array2);
console.log(`Merged sorted array: ${mergedArray}`);
