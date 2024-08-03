import { describe, it, expect } from "vitest";
import { threeSum } from "../src/index";

describe("threeSum", () => {
  it("should find all unique triplets that sum to zero", () => {
    expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([
      [-1, -1, 2],
      [-1, 0, 1],
    ]);
    expect(threeSum([])).toEqual([]);
    expect(threeSum([0])).toEqual([]);
    expect(threeSum([0, 0, 0])).toEqual([[0, 0, 0]]);
    expect(threeSum([-2, 0, 1, 1, 2])).toEqual([
      [-2, 0, 2],
      [-2, 1, 1],
    ]);
  });
});
