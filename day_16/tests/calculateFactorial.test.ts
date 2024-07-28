import { describe, it, expect } from "vitest";
import { calculateFactorial } from "../src/index";

describe("calculateFactorial", () => {
  it("should return 1 for input 0", () => {
    expect(calculateFactorial(0)).toBe(1);
  });

  it("should return 1 for input 1", () => {
    expect(calculateFactorial(1)).toBe(1);
  });

  it("should return 120 for input 5", () => {
    expect(calculateFactorial(5)).toBe(120);
  });

  it("should return 3628800 for input 10", () => {
    expect(calculateFactorial(10)).toBe(3628800);
  });

  it("should throw an error for negative input", () => {
    expect(() => calculateFactorial(-1)).toThrow(
      "Factorial is not defined for negative numbers.",
    );
  });

  it("should throw an error for non-integer input", () => {
    expect(() => calculateFactorial(3.5)).toThrow(
      "Factorial is only defined for integers.",
    );
  });
});
