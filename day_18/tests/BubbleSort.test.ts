import { describe, it, expect } from "vitest";
import { BubbleSort } from "../src/index";

describe("BubbleSort", () => {
  it("should sort the array in ascending order", () => {
    const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
    const sortedArray = [11, 12, 22, 25, 34, 64, 90];
    expect(BubbleSort.sort(unsortedArray)).toEqual(sortedArray);
  });

  it("should handle an empty array", () => {
    const unsortedArray: number[] = [];
    const sortedArray: number[] = [];
    expect(BubbleSort.sort(unsortedArray)).toEqual(sortedArray);
  });

  it("should handle an array with one element", () => {
    const unsortedArray = [1];
    const sortedArray = [1];
    expect(BubbleSort.sort(unsortedArray)).toEqual(sortedArray);
  });

  it("should handle an array that is already sorted", () => {
    const unsortedArray = [1, 2, 3, 4, 5];
    const sortedArray = [1, 2, 3, 4, 5];
    expect(BubbleSort.sort(unsortedArray)).toEqual(sortedArray);
  });

  it("should handle an array with negative numbers", () => {
    const unsortedArray = [-3, -1, -4, -2, 0];
    const sortedArray = [-4, -3, -2, -1, 0];
    expect(BubbleSort.sort(unsortedArray)).toEqual(sortedArray);
  });
});
