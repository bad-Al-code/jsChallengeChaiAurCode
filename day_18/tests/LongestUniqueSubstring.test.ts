import { describe, it, expect } from "vitest";
import { LongestUniqueSubstring } from "../src/index";

describe("LongestUniqueSubstring", () => {
  it("should find the longest substring without repeating characters", () => {
    const input = "Daenerys Targaryen";
    const expectedOutput = "nerys Ta";
    expect(LongestUniqueSubstring.findLongestSubstring(input)).toBe(
      expectedOutput,
    );
  });

  it("should handle an empty string", () => {
    const input = "";
    const expectedOutput = "";
    expect(LongestUniqueSubstring.findLongestSubstring(input)).toBe(
      expectedOutput,
    );
  });

  it("should handle a string with all unique characters", () => {
    const input = "abcdefg";
    const expectedOutput = "abcdefg";
    expect(LongestUniqueSubstring.findLongestSubstring(input)).toBe(
      expectedOutput,
    );
  });

  it("should handle a string with all repeating characters", () => {
    const input = "aaaaa";
    const expectedOutput = "a";
    expect(LongestUniqueSubstring.findLongestSubstring(input)).toBe(
      expectedOutput,
    );
  });

  it("should handle a string with spaces and punctuation", () => {
    const input = "Jon Snow knows nothing";
    const expectedOutput = "ws nothi";
    expect(LongestUniqueSubstring.findLongestSubstring(input)).toBe(
      expectedOutput,
    );
  });
});
