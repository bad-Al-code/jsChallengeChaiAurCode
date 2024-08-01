import { describe, it, expect } from "vitest";
import { findDigitSequences } from "../src/index";

describe("findDigitSequences", () => {
  it("should return all sequences of one or more digits in a string", () => {
    const text =
      "The battle took place in 2024, with 150 soldiers and 7 dragons.";
    const result = findDigitSequences(text);
    expect(result).toEqual(["2024", "150", "7"]);
  });

  it("should return an empty array if there are no digit sequences", () => {
    const text = "There are no numbers here.";
    const result = findDigitSequences(text);
    expect(result).toEqual([]);
  });

  it("should handle a string with mixed content", () => {
    const text = "There were 3 armies: 2 from the North and 1 from the South.";
    const result = findDigitSequences(text);
    expect(result).toEqual(["3", "2", "1"]);
  });
});
