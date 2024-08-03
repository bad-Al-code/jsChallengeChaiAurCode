# Day 22: Leetcode Medium Challenges

## Overview

Today's tasks involve solving several Leetcode Medium problems using TypeScript. Each problem requires implementing a function to address specific computational challenges and logging results for various test cases.

## Tasks

### 1. **Add Two Numbers**

**Description**: Implement a function that takes two non-empty linked lists representing non-negative integers. The digits are stored in reversed order, and each node contains a single digit. Add the two numbers and return the sum as a linked list.

**Function Signature**:

```typescript
function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null;
```

### 2. Length of Longest Substring Without Repeating Characters

**Description**: Implement a function that takes a string and returns the length of the longest substring without repeating characters.

**Function Signature**:

```typescript
function lengthOfLongestSubstring(s: string): number;
```

### 3. Container With Most Water

**Description**: mplement a function that takes an array of non-negative integers where each integer represents the height of a line drawn at each point. Find the two lines that together with the x-axis form a container, such that the container holds the most water.

**Function Signature**:

```typescript
function maxArea(height: number[]): number;
```

### 4. Group Anagrams

**Description**: Description: Implement a function that takes an array of strings and groups anagrams together.

**Function Signature**:

```typescript
function groupAnagrams(strs: string[]): string[][];
```

### 5. Three Sum

**Description**: Implement a function that takes an array of integers and finds all unique triplets in the array which give the sum of zero.

**Function Signature**:

```typescript
function threeSum(nums: number[]): number[][];
```

## Development Nodes

- **TypeScript**: Ensure type safety and proper typing throughout the functions.
- **Testing**: Implement unit tests for each function to validate functionality.

## Running the Code

To compile and run the code, use the following commands:

```bash
npm install
npm run start
npm run test:ui # for running the unit test in vitest:ui
```
