# Day 23: Leetcode Hard Problems

Today, we focused on solving a series of Leetcode Hard problems using TypeScript. The tasks involved complex algorithmic challenges, including finding the median of two sorted arrays, merging sorted linked lists, calculating trapped water, solving the N-Queens puzzle, and finding the shortest transformation sequence in a word ladder problem.

### Task 1: Median of Two Sorted Arrays

- **Objective**: Write a function that takes two sorted arrays of integers and returns the median of the combined sorted arrays.

- **Method**:

  - Utilize binary search to find the median in logarithmic time.
  - Merge the two arrays conceptually without actually combining them.

- Function: `findMedianSortedArrays(nums1: number[], nums2: number[]): number`

- **Logging**: Logged the median of a few test cases, including edge cases.

### Task 2: Merge k Sorted Linked Lists

- **Objective**: Write a function that takes an array of k linked lists, each sorted in ascending order, and merges all linked lists into one sorted linked list.

- **Method**:

  - Use a min-heap to efficiently merge k sorted lists.

- Function: `mergeKLists(lists: Array<ListNode | null>): ListNode | null`

- **Logging**: Logged the merged linked list for a few test cases, including edge cases.

### Task 3: Trapping Rain Water

- **Objective**: Write a function that takes an array of k linked lists, each sorted in ascending order, and merges all linked lists into one sorted linked list.

- **Method**:

  - Use a min-heap to efficiently merge k sorted lists.

- Function: `mergeKLists(lists: Array<ListNode | null>): ListNode | null`

- **Logging**: Logged the merged linked list for a few test cases, including edge cases.

### Task 4: N-Queens Puzzle

- **Objective**: Write a function that places n queens on an n\*n chessboard such that no two queens attack each other and returns all distinct solutions to the N-Queens puzzle.

- **Method**:

  - Use backtracking to explore all valid placements of queens.

- Function: `solveNQueens(n: number): string[][]`

- **Logging**: Logged the distinct solutions for a few test cases, including edge cases.

### Task 5: Word Ladder

- **Objective**: Write a function that takes a begin word, an end word, and a dictionary of words, and finds the length of the shortest transformation sequence from the begin word to the end word.

- **Method**:

  - Use Breadth-First Search (BFS) for level-by-level exploration of possible word transformations.

- Function: `ladderLength(beginWord: string, endWord: string, wordList: string[]): number`

- **Logging**: Logged the length of the shortest transformation sequence for a few test cases, including edge cases.
