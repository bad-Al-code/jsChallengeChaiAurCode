import { describe, it, expect } from "vitest";
import { SelectionSort } from "../src/index";

describe("SelectionSort", () => {
  it("should sort the array in ascending order", () => {
    const unsortedArray = [
      "Stark",
      "Lannister",
      "Targaryen",
      "Baratheon",
      "Greyjoy",
      "Martell",
    ];
    const sortedArray = [
      "Baratheon",
      "Greyjoy",
      "Lannister",
      "Martell",
      "Stark",
      "Targaryen",
    ];
    expect(SelectionSort.sort(unsortedArray)).toEqual(sortedArray);
  });

  it("should handle an empty array", () => {
    const unsortedArray: string[] = [];
    const sortedArray: string[] = [];
    expect(SelectionSort.sort(unsortedArray)).toEqual(sortedArray);
  });

  it("should handle an array with one element", () => {
    const unsortedArray = ["Targaryen"];
    const sortedArray = ["Targaryen"];
    expect(SelectionSort.sort(unsortedArray)).toEqual(sortedArray);
  });

  it("should handle an array that is already sorted", () => {
    const unsortedArray = [
      "Baratheon",
      "Greyjoy",
      "Lannister",
      "Martell",
      "Stark",
      "Targaryen",
    ];
    const sortedArray = [
      "Baratheon",
      "Greyjoy",
      "Lannister",
      "Martell",
      "Stark",
      "Targaryen",
    ];
    expect(SelectionSort.sort(unsortedArray)).toEqual(sortedArray);
  });

  it("should handle an array with different names", () => {
    const unsortedArray = ["Bran", "Jon", "Arya", "Sansa", "Rickon"];
    const sortedArray = ["Arya", "Bran", "Jon", "Rickon", "Sansa"];
    expect(SelectionSort.sort(unsortedArray)).toEqual(sortedArray);
  });
});
