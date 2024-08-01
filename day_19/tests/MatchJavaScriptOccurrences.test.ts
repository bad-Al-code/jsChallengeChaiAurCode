import { describe, it, expect } from "vitest";
import { findJavaScriptOccurrences } from "../src/index";

describe("findJavaScriptOccurrences", () => {
  it('should return all occurrences of the word "JavaScript" in a string', () => {
    const text = "JavaScript is a versatile language. I love JavaScript!";
    const result = findJavaScriptOccurrences(text);
    expect(result).toEqual(["JavaScript", "JavaScript"]);
  });

  it('should return an empty array if there are no occurrences of the word "JavaScript"', () => {
    const text = "TypeScript is great.";
    const result = findJavaScriptOccurrences(text);
    expect(result).toEqual([]);
  });

  it("should be case insensitive", () => {
    const text = "JavaScript, javascript, and JAVASCRIPT are all the same.";
    const result = findJavaScriptOccurrences(text);
    expect(result).toEqual(["JavaScript", "javascript", "JAVASCRIPT"]);
  });
});
