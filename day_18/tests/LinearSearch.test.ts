import { describe, it, expect } from "vitest";
import { LinearSearch } from "../src/index";

describe("LinearSearch", () => {
  it("should return the correct index when the target is found", () => {
    const houseArray = [
      "Stark",
      "Lannister",
      "Targaryen",
      "Baratheon",
      "Greyjoy",
      "Martell",
    ];
    const targetHouse = "Lannister";
    const index = LinearSearch.search(houseArray, targetHouse);
    expect(index).toBe(1);
  });

  it("should return -1 when the target is not found", () => {
    const houseArray = [
      "Stark",
      "Lannister",
      "Targaryen",
      "Baratheon",
      "Greyjoy",
      "Martell",
    ];
    const targetHouse = "Bolton";
    const index = LinearSearch.search(houseArray, targetHouse);
    expect(index).toBe(-1);
  });

  it("should handle an empty array", () => {
    const houseArray: string[] = [];
    const targetHouse = "Stark";
    const index = LinearSearch.search(houseArray, targetHouse);
    expect(index).toBe(-1);
  });

  it("should handle an array with one element", () => {
    const houseArray = ["Targaryen"];
    const targetHouse = "Targaryen";
    const index = LinearSearch.search(houseArray, targetHouse);
    expect(index).toBe(0);
  });

  it("should handle an array with different names", () => {
    const houseArray = ["Bran", "Jon", "Arya", "Sansa", "Rickon"];
    const targetHouse = "Arya";
    const index = LinearSearch.search(houseArray, targetHouse);
    expect(index).toBe(2);
  });
});
