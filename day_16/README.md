# Day 16: Recursion

## Overview

In this exercise, we explored recursion in TypeScript, demonstrating how to define and implement recursive functions for various tasks such as factorial calculation, Fibonacci sequence generation, sum calculation, maximum value finding, string reversal, palindrome checking, binary search, occurrence counting, and binary tree traversal and depth calculation.

### Tasks/Activities

1. **Recursive Functions**

- Factorial Calculation

  - Function: calculateFactorial(n: number): number
  - Description: Calculates the factorial of a given number n. Includes error handling for negative numbers and non-integer inputs.

- Fibonacci Sequence Generation

  - Function: calculateFibonacci(n: number): number
  - Description: Generates the Fibonacci number at position n. Includes error handling for negative numbers and non-integer inputs.

- Sum Calculation

  - Function: calculateSum(arr: number[]): number
  - Description: Calculates the sum of all elements in a given array arr. Includes error handling for non-array inputs and arrays with non-number elements.

- Maximum Value Finding

  - Function: findMax(arr: number[]): number
  - Description: Finds the maximum value in a given array arr. Includes error handling for non-array inputs, empty arrays, and arrays with non-number elements.

- String Reversal

  - Function: reverseString(str: string): string
  - Description: Reverses a given string str. Includes error handling for non-string inputs.

- Palindrome Checking

  - Function: isPalindrome(str: string): boolean
  - Description: Checks if a given string str is a palindrome. Includes error handling for non-string inputs.

- Binary Search

  - Function: binarySearch(arr: number[], target: number, left = 0, right = arr.length - 1): number
  - Description: Performs a binary search to find the target value in a sorted array arr. Includes error handling for non-array inputs and unsorted arrays.

- Occurrence Counting

  - Function: countOccurrences(arr: any[], target: any, index = 0): number
  - Description: Counts the occurrences of a target value in a given array arr. Includes error handling for non-array inputs.

2. **Binary Tree Operations**

- TreeNode Class

  - Class: TreeNode
  - Properties: value: number, left: TreeNode | null, right: TreeNode | null
  - Constructor: Initializes a tree node with a given value and optional left and right children.

- In-Order Traversal

  - Function: inOrderTraversal(node: TreeNode | null): void
  - Description: Performs an in-order traversal of a binary tree, visiting nodes in the order of left-child, parent, right-child.

- Depth Calculation

  - Function: calculateDepth(node: TreeNode | null): number
  - Description: Calculates the depth of a binary tree, which is the number of nodes along the longest path from the root node to the farthest leaf node.

3. **Test Cases**

- _Factorial Tests_: Tested the calculateFactorial function with various inputs including positive integers, zero, negative numbers, and non-integer values.
- _Fibonacci Tests_: Tested the calculateFibonacci function with various inputs including positive integers, zero, negative numbers, and non-integer values.
- _Sum Tests_: Tested the calculateSum function with various arrays including positive numbers, mixed positive and negative numbers, empty arrays, single-element arrays, and invalid inputs.
- _Maximum Value_ Tests: Tested the findMax function with various arrays including positive numbers, mixed positive and negative numbers, single-element arrays, empty arrays, and invalid inputs.
- _String Reversal_ Tests: Tested the reverseString function with various strings including regular strings, empty strings, and invalid inputs.
- _Palindrome Tests_: Tested the isPalindrome function with various strings including palindromes, non-palindromes, empty strings, and invalid inputs.
- _Binary Search_ Tests: Tested the binarySearch function with various sorted arrays and target values including arrays with positive numbers, single-element arrays, empty arrays, and unsorted arrays.
- _Occurrence Counting_ Tests: Tested the countOccurrences function with various arrays and target values including arrays with numbers, strings, mixed types, and invalid inputs.
- _Binary Tree_ Tests: Created a binary tree and tested the inOrderTraversal and calculateDepth functions to ensure correct traversal order and depth calculation.
