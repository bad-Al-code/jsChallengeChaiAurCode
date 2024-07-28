import { describe, it, expect } from "vitest";
import { findMax } from "../src/index";

describe("findMax", () => {
  it("should return 5 for input [1, 2, 3, 4, 5]", () => {
    expect(findMax([1, 2, 3, 4, 5])).toBe(5);
  });

  it("should return 10 for input [10, -2, 3, 7]", () => {
    expect(findMax([10, -2, 3, 7])).toBe(10);
  });

  it("should return 42 for input [42]", () => {
    expect(findMax([42])).toBe(42);
  });

  it("should throw an error for an empty array", () => {
    expect(() => findMax([])).toThrow("Array is empty.");
  });

  it("should throw an error for non-array input", () => {
    expect(() => findMax("not an array" as any)).toThrow(
      "Input is not an array.",
    );
  });

  it("should throw an error for array with non-number elements", () => {
    expect(() => findMax([1, "string", 3] as any)).toThrow(
      "Array contains non-number elements.",
    );
  });
});
