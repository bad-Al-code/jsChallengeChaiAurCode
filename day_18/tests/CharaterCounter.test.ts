import { describe, it, expect } from "vitest";
import { CharacterCounter } from "../src/index";

describe("CharacterCounter", () => {
  it("should count the occurrences of each character in a string", () => {
    const input = "Winter is coming";
    const expectedOutput = {
      W: 1,
      i: 3,
      n: 2,
      t: 1,
      e: 1,
      r: 1,
      " ": 2,
      s: 1,
      c: 1,
      o: 1,
      m: 1,
      g: 1,
    };
    expect(CharacterCounter.countOccurrences(input)).toEqual(expectedOutput);
  });

  it("should handle an empty string", () => {
    const input = "";
    const expectedOutput = {};
    expect(CharacterCounter.countOccurrences(input)).toEqual(expectedOutput);
  });

  it("should handle a string with repeated characters", () => {
    const input = "aaaa";
    const expectedOutput = { a: 4 };
    expect(CharacterCounter.countOccurrences(input)).toEqual(expectedOutput);
  });

  it("should handle a string with different characters", () => {
    const input = "A Lannister always pays his debts";
    const expectedOutput = {
      A: 1,
      " ": 5,
      L: 1,
      a: 4,
      n: 2,
      i: 2,
      s: 5,
      t: 2,
      e: 2,
      r: 1,
      l: 1,
      w: 1,
      y: 2,
      p: 1,
      h: 1,
      d: 1,
      b: 1,
    };
    expect(CharacterCounter.countOccurrences(input)).toEqual(expectedOutput);
  });
});
