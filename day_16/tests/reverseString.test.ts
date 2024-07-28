import { describe, it, expect } from "vitest";
import { reverseString } from "../src/index";

describe("reverseString", () => {
  it('should return "olleh" for input "hello"', () => {
    expect(reverseString("hello")).toBe("olleh");
  });

  it('should return "dlrow" for input "world"', () => {
    expect(reverseString("world")).toBe("dlrow");
  });

  it("should return an empty string for an empty input", () => {
    expect(reverseString("")).toBe("");
  });

  it('should return "tpircSepyT" for input "TypeScript"', () => {
    expect(reverseString("TypeScript")).toBe("tpircSepyT");
  });

  it("should throw an error for non-string input", () => {
    expect(() => reverseString(12345 as any)).toThrow("Input is not a string.");
  });

  it("should throw an error for boolean input", () => {
    expect(() => reverseString(true as any)).toThrow("Input is not a string.");
  });
});
