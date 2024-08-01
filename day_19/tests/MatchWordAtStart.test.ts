import { describe, it, expect } from "vitest";
import { matchWordAtStart } from "../src/index";

describe("matchWordAtStart", () => {
  it("should return true if the word is at the beginning of the string", () => {
    const text = "Winter is coming.";
    const word = "Winter";
    const result = matchWordAtStart(text, word);
    expect(result).toBe(true);
  });

  it("should return false if the word is not at the beginning of the string", () => {
    const text = "The cold wind blows.";
    const word = "Winter";
    const result = matchWordAtStart(text, word);
    expect(result).toBe(false);
  });

  it("should handle case insensitivity", () => {
    const text = "winter is coming.";
    const word = "Winter";
    const result = matchWordAtStart(text, word);
    expect(result).toBe(true);
  });
});
