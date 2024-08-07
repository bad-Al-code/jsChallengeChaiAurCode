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

export class Fibonacci {
  public static calculate(n: number): number {
    if (n <= 1) return n;

    const dp: number[] = [0, 1];
    for (let i = 2; i <= n; i++) {
      dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
  }
}

const position1 = 4;
const fibValue1 = Fibonacci.calculate(position1);
console.log(`Fibonacci value at position ${position1}: ${fibValue1}`);

export interface Item {
  name: string;
  weight: number;
  value: number;
}

export class Knapsack {
  public static solveKnapsack(items: Item[], capacity: number): number {
    const n = items.length;
    const dp: number[][] = Array.from({ length: n + 1 }, () =>
      Array(capacity + 1).fill(0),
    );

    for (let i = 1; i <= n; i++) {
      const { weight, value } = items[i - 1];
      for (let w = 1; w <= capacity; w++) {
        if (weight <= w) {
          dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - weight] + value);
        } else {
          dp[i][w] = dp[i - 1][w];
        }
      }
    }

    return dp[n][capacity];
  }
}

const items: Item[] = [
  { name: "Dragon Glass", weight: 1, value: 1500 },
  { name: "Valyrian Steel", weight: 3, value: 3000 },
  { name: "Golden Crown", weight: 4, value: 2000 },
  { name: "Direwolf", weight: 2, value: 1800 },
];

const capacity = 5;
const maxValue = Knapsack.solveKnapsack(items, capacity);
console.log(`Maximum value for knapsack capacity ${capacity}: ${maxValue}`);
