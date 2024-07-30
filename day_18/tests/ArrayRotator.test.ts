import { describe, it, expect } from "vitest";
import { ArrayRotator } from "../src/index";

describe("ArrayRotator", () => {
  it("should rotate the array by k positions", () => {
    const array = ["a", "b", "c", "d", "e"];
    const rotatedArray = ArrayRotator.rotate(array, 2);
    expect(rotatedArray).toEqual(["d", "e", "a", "b", "c"]);
  });

  it("should handle rotating by more than the array length", () => {
    const array = ["a", "b", "c", "d", "e"];
    const rotatedArray = ArrayRotator.rotate(array, 7); // 7 % 5 == 2
    expect(rotatedArray).toEqual(["d", "e", "a", "b", "c"]);
  });

  it("should return the same array when k is 0", () => {
    const array = ["a", "b", "c", "d", "e"];
    const rotatedArray = ArrayRotator.rotate(array, 0);
    expect(rotatedArray).toEqual(["a", "b", "c", "d", "e"]);
  });

  it("should return the same array when k is a multiple of array length", () => {
    const array = ["a", "b", "c", "d", "e"];
    const rotatedArray = ArrayRotator.rotate(array, 5); // 5 % 5 == 0
    expect(rotatedArray).toEqual(["a", "b", "c", "d", "e"]);
  });

  it("should handle rotating an empty array", () => {
    const array: string[] = [];
    const rotatedArray = ArrayRotator.rotate(array, 3);
    expect(rotatedArray).toEqual([]);
  });
});
