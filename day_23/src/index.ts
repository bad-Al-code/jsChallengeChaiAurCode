/**
 * Finds the median of two sorted arrays.
 * @param nums1 - The first sorted array.
 * @param nums2 - The second sorted array.
 * @returns The median of the two sorted arrays.
 */
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  //  nums1 is the smaller array
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  const m = nums1.length;
  const n = nums2.length;
  let imin = 0,
    imax = m,
    halfLen = Math.floor((m + n + 1) / 2);

  while (imin <= imax) {
    const i = Math.floor((imin + imax) / 2);
    const j = halfLen - i;

    if (i < m && nums2[j - 1] > nums1[i]) {
      imin = i + 1; // i is too small
    } else if (i > 0 && nums1[i - 1] > nums2[j]) {
      imax = i - 1; // i is too big
    } else {
      let maxLeft = 0;
      if (i === 0) maxLeft = nums2[j - 1];
      else if (j === 0) maxLeft = nums1[i - 1];
      else maxLeft = Math.max(nums1[i - 1], nums2[j - 1]);

      if ((m + n) % 2 === 1) {
        return maxLeft; // Odd length, return the max of left
      }

      let minRight = 0;
      if (i === m) minRight = nums2[j];
      else if (j === n) minRight = nums1[i];
      else minRight = Math.min(nums1[i], nums2[j]);

      return (maxLeft + minRight) / 2; // Even length, return average of middle two
    }
  }

  throw new Error("Input arrays are not sorted or are invalid.");
}

console.log("Median of [1, 3] and [2]:", findMedianSortedArrays([1, 3], [2])); // Expected: 2
console.log(
  "Median of [1, 2] and [3, 4]:",
  findMedianSortedArrays([1, 2], [3, 4]),
);
console.log(
  "Median of [0, 0] and [0, 0]:",
  findMedianSortedArrays([0, 0], [0, 0]),
);
console.log("Median of [] and [1]:", findMedianSortedArrays([], [1]));
console.log("Median of [1] and []:", findMedianSortedArrays([1], []));

/*
 Time: O(log(min(m, n))), where m -> length of nums1 and n -> length of nums2
 Space: O(1)
 */ // Definition for singly-linked list.

class ListNode {
  val: number;
  next: ListNode | null = null;
  constructor(val: number, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

class MinHeap<T> {
  private heap: T[];
  private compare: (a: T, b: T) => number;

  constructor(compare: (a: T, b: T) => number) {
    this.heap = [];
    this.compare = compare;
  }

  public push(item: T): void {
    this.heap.push(item);
    this.bubbleUp(this.heap.length - 1);
  }

  public pop(): T | null {
    if (this.heap.length === 0) return null;
    const root = this.heap[0];
    const end = this.heap.pop()!;
    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.bubbleDown(0);
    }
    return root;
  }

  public get length(): number {
    return this.heap.length;
  }

  private bubbleUp(index: number): void {
    const element = this.heap[index];
    let parentIndex = Math.floor((index - 1) / 2);

    while (index > 0 && this.compare(element, this.heap[parentIndex]) < 0) {
      this.heap[index] = this.heap[parentIndex];
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }

    this.heap[index] = element;
  }

  private bubbleDown(index: number): void {
    const length = this.heap.length;
    const element = this.heap[index];
    let leftChildIndex = 2 * index + 1;
    let rightChildIndex = 2 * index + 2;
    let smallest = index;

    if (
      leftChildIndex < length &&
      this.compare(this.heap[leftChildIndex], this.heap[smallest]) < 0
    ) {
      smallest = leftChildIndex;
    }

    if (
      rightChildIndex < length &&
      this.compare(this.heap[rightChildIndex], this.heap[smallest]) < 0
    ) {
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
function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (lists.length === 0) return null;

  const minHeap = new MinHeap<ListNode>((a, b) => a.val - b.val);

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

function printList(head: ListNode | null): void {
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

/**
 * Calculates the amount of water trapped after raining.
 * @param height - An array representing the elevation map.
 * @returns The amount of water that can be trapped.
 */
function trap(height: number[]): number {
  if (height.length === 0) return 0;

  const n = height.length;
  const leftMax: number[] = new Array(n).fill(0);
  const rightMax: number[] = new Array(n).fill(0);

  // Fill left max array
  leftMax[0] = height[0];
  for (let i = 1; i < n; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i]);
  }

  // Fill right max array
  rightMax[n - 1] = height[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], height[i]);
  }

  let trappedWater = 0;
  for (let i = 0; i < n; i++) {
    trappedWater += Math.min(leftMax[i], rightMax[i]) - height[i];
  }

  return trappedWater;
}

console.log(
  "Trapped water for [0,1,0,2,1,0,1,3,2,1,2,1]:",
  trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]),
);
console.log("Trapped water for [4,2,0,3,2,5]:", trap([4, 2, 0, 3, 2, 5]));
console.log("Trapped water for [1,0,1]:", trap([1, 0, 1]));
console.log("Trapped water for [3, 0, 2, 0, 4]:", trap([3, 0, 2, 0, 4]));

/**
 * Solves the N-Queens puzzle and returns all distinct solutions.
 * @param n - The size of the chessboard (n*n).
 * @returns A list of distinct solutions, where each solution is a list of strings.
 */
function solveNQueens(n: number): string[][] {
  const solutions: string[][] = [];
  const board: string[][] = Array.from({ length: n }, () => Array(n).fill("."));

  const isSafe = (row: number, col: number): boolean => {
    for (let i = 0; i < row; i++) {
      if (board[i][col] === "Q") return false;
    }

    // Check upper left diagonal
    for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === "Q") return false;
    }

    // Check upper right diagonal
    for (let i = row, j = col; i >= 0 && j < n; i--, j++) {
      if (board[i][j] === "Q") return false;
    }

    return true;
  };

  const solve = (row: number): void => {
    if (row === n) {
      solutions.push(board.map((row) => row.join("")));
      return;
    }

    for (let col = 0; col < n; col++) {
      if (isSafe(row, col)) {
        board[row][col] = "Q";
        solve(row + 1);
        board[row][col] = "."; // Backtrack
      }
    }
  };

  solve(0);
  return solutions;
}

const n = 4;
const solutions = solveNQueens(n);
console.log(`Distinct solutions for ${n}-Queens puzzle:`);
solutions.forEach((solution, index) => {
  console.log(`Solution ${index + 1}:`);
  solution.forEach((row) => console.log(row));
  console.log("");
});

/**
 * Finds the length of the shortest transformation sequence from beginWord to endWord.
 * @param beginWord - The starting word.
 * @param endWord - The target word.
 * @param wordList - The list of available words for transformation.
 * @returns The length of the shortest transformation sequence.
 */
function ladderLength(
  beginWord: string,
  endWord: string,
  wordList: string[],
): number {
  const wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) return 0;

  const queue: [string, number][] = [[beginWord, 1]];

  while (queue.length > 0) {
    const [currentWord, level] = queue.shift()!;

    if (currentWord === endWord) {
      return level;
    }

    for (let i = 0; i < currentWord.length; i++) {
      const currentCharArray = currentWord.split("");

      for (let char = 97; char <= 122; char++) {
        // a to z
        currentCharArray[i] = String.fromCharCode(char);
        const nextWord = currentCharArray.join("");

        if (wordSet.has(nextWord)) {
          queue.push([nextWord, level + 1]);
          wordSet.delete(nextWord);
        }
      }
    }
  }

  return 0;
}

console.log(
  "Shortest transformation sequence length:",
  ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]),
);
console.log(
  "Shortest transformation sequence length:",
  ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log"]),
);
console.log(
  "Shortest transformation sequence length:",
  ladderLength("a", "c", ["a", "b", "c"]),
);
