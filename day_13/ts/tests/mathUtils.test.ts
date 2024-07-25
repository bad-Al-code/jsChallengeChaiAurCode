import { describe, it, expect } from "vitest";
import { addTwoNumbers } from "../src/mathUtils";

describe("addTwoNumbers", () => {
  it("should add two numbers correctly", () => {
    expect(addTwoNumbers(1, 2)).toBe(3);
    expect(addTwoNumbers(-1, 1)).toBe(0);
    expect(addTwoNumbers(-1, -1)).toBe(-2);
  });
});
