import { describe, it, expect } from "vitest";
import { findAllDigits } from "../src/index";

describe("findAllDigits", () => {
  it("should return all digit sequences in a string", () => {
    const text = "The year is 2024 and there are 5 dragons.";
    const result = findAllDigits(text);
    expect(result).toEqual(["2024", "5"]);
  });

  it("should return an empty array if there are no digits in the string", () => {
    const text = "No numbers here.";
    const result = findAllDigits(text);
    expect(result).toEqual([]);
  });

  it("should handle multiple digit sequences", () => {
    const text = "123 and 4567 and 89";
    const result = findAllDigits(text);
    expect(result).toEqual(["123", "4567", "89"]);
  });
});
