import { describe, it, expect } from "vitest";
import { isPalindrome } from "../src/index";

describe("isPalindrome", () => {
  it('should return true for "racecar"', () => {
    expect(isPalindrome("racecar")).toBe(true);
  });

  it('should return true for "madam"', () => {
    expect(isPalindrome("madam")).toBe(true);
  });

  it('should return false for "hello"', () => {
    expect(isPalindrome("hello")).toBe(false);
  });

  it("should return true for an empty string", () => {
    expect(isPalindrome("")).toBe(true);
  });

  it("should throw an error for non-string input", () => {
    expect(() => isPalindrome(12321 as any)).toThrow("Input is not a string.");
  });

  it("should throw an error for boolean input", () => {
    expect(() => isPalindrome(true as any)).toThrow("Input is not a string.");
  });
});
