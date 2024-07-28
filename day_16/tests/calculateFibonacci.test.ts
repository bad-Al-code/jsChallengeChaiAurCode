import { describe, it, expect } from "vitest";
import { calculateFibonacci } from "../src/index";

describe("calculateFibonacci", () => {
  it("should return 0 for input 0", () => {
    expect(calculateFibonacci(0)).toBe(0);
  });

  it("should return 1 for input 1", () => {
    expect(calculateFibonacci(1)).toBe(1);
  });

  it("should return 5 for input 5", () => {
    expect(calculateFibonacci(5)).toBe(5);
  });

  it("should return 55 for input 10", () => {
    expect(calculateFibonacci(10)).toBe(55);
  });

  it("should throw an error for negative input", () => {
    expect(() => calculateFibonacci(-1)).toThrow(
      "Fibonacci is not defined for negative numbers.",
    );
  });

  it("should throw an error for non-integer input", () => {
    expect(() => calculateFibonacci(3.5)).toThrow(
      "Fibonacci is only defined for integers.",
    );
  });
});
