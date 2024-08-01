import { describe, it, expect } from "vitest";
import { findCapitalizedWords } from "../src/index";

describe("findCapitalizedWords", () => {
  it("should return all words that start with a capital letter in a string", () => {
    const text =
      "In the North, Jon Snow and Daenerys Targaryen are key players.";
    const result = findCapitalizedWords(text);
    expect(result).toEqual([
      "In",
      "North",
      "Jon",
      "Snow",
      "Daenerys",
      "Targaryen",
    ]);
  });

  it("should return an empty array if there are no capitalized words", () => {
    const text = "winter is coming.";
    const result = findCapitalizedWords(text);
    expect(result).toEqual([]);
  });

  it("should handle sentences with mixed capitalization", () => {
    const text =
      "Eddard Stark, also known as Ned, had many children: Arya, Sansa, and Bran.";
    const result = findCapitalizedWords(text);
    expect(result).toEqual(["Eddard", "Stark", "Ned", "Arya", "Sansa", "Bran"]);
  });
});
