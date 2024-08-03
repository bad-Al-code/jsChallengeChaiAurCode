import { describe, it, expect } from "vitest";
import { lengthOfLongestSubstring } from "../src/index";

describe("lengthOfLongestSubstring", () => {
  it("should return the length of the longest substring without repeating characters", () => {
    expect(lengthOfLongestSubstring("targaryen")).toBe(6);
  });

  it("should handle empty string", () => {
    expect(lengthOfLongestSubstring("")).toBe(0);
  });

  it("should handle string with all unique characters", () => {
    expect(lengthOfLongestSubstring("jon")).toBe(3);
  });

  it("should handle string with all same characters", () => {
    expect(lengthOfLongestSubstring("aaaa")).toBe(1);
  });

  it("should handle string with multiple repeating characters", () => {
    expect(lengthOfLongestSubstring("sersei")).toBe(4);
  });
});
