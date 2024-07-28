import { describe, it, expect } from "vitest";
import { calculateSum } from "../src/index";

describe("calculateSum", () => {
  it("should return 15 for input [1, 2, 3, 4, 5]", () => {
    expect(calculateSum([1, 2, 3, 4, 5])).toBe(15);
  });

  it("should return 18 for input [10, -2, 3, 7]", () => {
    expect(calculateSum([10, -2, 3, 7])).toBe(18);
  });

  it("should return 0 for an empty array", () => {
    expect(calculateSum([])).toBe(0);
  });

  it("should return 42 for input [42]", () => {
    expect(calculateSum([42])).toBe(42);
  });

  it("should throw an error for non-array input", () => {
    expect(() => calculateSum("not an array" as any)).toThrow(
      "Input is not an array.",
    );
  });

  it("should throw an error for array with non-number elements", () => {
    expect(() => calculateSum([1, "string", 3] as any)).toThrow(
      "Array contains non-number elements.",
    );
  });
});
