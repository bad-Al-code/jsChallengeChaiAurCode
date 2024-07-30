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

const unsortedArray1 = [64, 34, 25, 12, 22, 11, 90];
const sortedArray1 = BubbleSort.sort(unsortedArray1);
console.log(`Sorted array 1: ${sortedArray1}`);

const unsortedArray2 = [5, 3, 8, 4, 2];
const sortedArray2 = BubbleSort.sort(unsortedArray2);
console.log(`Sorted array 2: ${sortedArray2}`);

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
console.log(`Selection Sorted array 1: ${selectionSortedArray}`);
