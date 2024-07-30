import { describe, it, expect } from "vitest";
import { BinarySearch } from "../src/index";

describe("BinarySearch", () => {
  it("should return the correct index when the target is found", () => {
    const houseArray = [
      "Baratheon",
      "Greyjoy",
      "Lannister",
      "Martell",
      "Stark",
      "Targaryen",
    ];
    const targetHouse = "Lannister";
    const index = BinarySearch.search(houseArray, targetHouse);
    expect(index).toBe(2);
  });

  it("should return -1 when the target is not found", () => {
    const houseArray = [
      "Baratheon",
      "Greyjoy",
      "Lannister",
      "Martell",
      "Stark",
      "Targaryen",
    ];
    const targetHouse = "Bolton";
    const index = BinarySearch.search(houseArray, targetHouse);
    expect(index).toBe(-1);
  });

  it("should handle an empty array", () => {
    const houseArray: string[] = [];
    const targetHouse = "Stark";
    const index = BinarySearch.search(houseArray, targetHouse);
    expect(index).toBe(-1);
  });

  it("should handle an array with one element", () => {
    const houseArray = ["Targaryen"];
    const targetHouse = "Targaryen";
    const index = BinarySearch.search(houseArray, targetHouse);
    expect(index).toBe(0);
  });

  it("should handle an array with different names", () => {
    const houseArray = ["Arya", "Bran", "Jon", "Rickon", "Sansa"];
    const targetHouse = "Arya";
    const index = BinarySearch.search(houseArray, targetHouse);
    expect(index).toBe(0);
  });
});
