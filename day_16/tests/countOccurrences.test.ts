import { describe, it, expect } from "vitest";
import { countOccurrences } from "../src/index";

describe("countOccurrences", () => {
  it("should return 3 for target 3 in array [1, 2, 3, 4, 5, 3, 3]", () => {
    expect(countOccurrences([1, 2, 3, 4, 5, 3, 3], 3)).toBe(3);
  });

  it("should return 0 for target 25 in array [10, 20, 30, 40, 50]", () => {
    expect(countOccurrences([10, 20, 30, 40, 50], 25)).toBe(0);
  });

  it('should return 3 for target "a" in array ["a", "b", "c", "a", "a"]', () => {
    expect(countOccurrences(["a", "b", "c", "a", "a"], "a")).toBe(3);
  });

  it("should return 0 for target 1 in an empty array", () => {
    expect(countOccurrences([], 1)).toBe(0);
  });

  it("should return 3 for target true in array [true, false, true, true]", () => {
    expect(countOccurrences([true, false, true, true], true)).toBe(3);
  });

  it("should return 0 for target 6 in array [1, 2, 3, 4, 5]", () => {
    expect(countOccurrences([1, 2, 3, 4, 5], 6)).toBe(0);
  });

  it("should throw an error for a non-array input", () => {
    expect(() => countOccurrences("not an array" as any, 3)).toThrow(
      "Input is not an array.",
    );
  });
});
