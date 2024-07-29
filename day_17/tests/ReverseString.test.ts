import { describe, it, expect, vi } from "vitest";
import { Stack, reverseString } from "../src/index";

vi.spyOn(console, "log").mockImplementation(() => {});

describe("reverseString", () => {
  it("should reverse a string", () => {
    const result = reverseString("hello");
    expect(result).toBe("olleh");
  });

  it("should handle an empty string", () => {
    const result = reverseString("");
    expect(result).toBe("");
  });

  it("should handle a single character string", () => {
    const result = reverseString("a");
    expect(result).toBe("a");
  });

  it("should handle a palindrome", () => {
    const result = reverseString("madam");
    expect(result).toBe("madam");
  });

  it("should handle a string with spaces", () => {
    const result = reverseString("a b c");
    expect(result).toBe("c b a");
  });
});
