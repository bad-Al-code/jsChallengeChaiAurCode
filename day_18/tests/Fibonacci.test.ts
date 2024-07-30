import { describe, it, expect } from "vitest";
import { Fibonacci } from "../src/index";

describe("Fibonacci", () => {
  it("should calculate the Fibonacci value at position 10", () => {
    const position = 10;
    const expectedOutput = 55;
    expect(Fibonacci.calculate(position)).toBe(expectedOutput);
  });

  it("should calculate the Fibonacci value at position 15", () => {
    const position = 15;
    const expectedOutput = 610;
    expect(Fibonacci.calculate(position)).toBe(expectedOutput);
  });

  it("should handle the Fibonacci value at position 0", () => {
    const position = 0;
    const expectedOutput = 0;
    expect(Fibonacci.calculate(position)).toBe(expectedOutput);
  });

  it("should handle the Fibonacci value at position 1", () => {
    const position = 1;
    const expectedOutput = 1;
    expect(Fibonacci.calculate(position)).toBe(expectedOutput);
  });

  it("should calculate the Fibonacci value at position 20", () => {
    const position = 20;
    const expectedOutput = 6765;
    expect(Fibonacci.calculate(position)).toBe(expectedOutput);
  });
});
