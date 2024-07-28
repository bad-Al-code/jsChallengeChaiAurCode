import { describe, it, expect } from "vitest";
import { binarySearch } from "../src/index";

describe("binarySearch", () => {
  it("should return 2 for target 3 in array [1, 2, 3, 4, 5]", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 3)).toBe(2);
  });

  it("should return -1 for target 25 in array [10, 20, 30, 40, 50]", () => {
    expect(binarySearch([10, 20, 30, 40, 50], 25)).toBe(-1);
  });

  it("should return 0 for target 1 in array [1]", () => {
    expect(binarySearch([1], 1)).toBe(0);
  });

  it("should return -1 for target 1 in an empty array", () => {
    expect(binarySearch([], 1)).toBe(-1);
  });

  it("should throw an error for a non-sorted array", () => {
    expect(() => binarySearch([5, 4, 3, 2, 1], 3)).toThrow(
      "Array is not sorted.",
    );
  });

  it("should return 0 for target 10 in array [10, 20, 30, 40, 50]", () => {
    expect(binarySearch([10, 20, 30, 40, 50], 10)).toBe(0);
  });
});
