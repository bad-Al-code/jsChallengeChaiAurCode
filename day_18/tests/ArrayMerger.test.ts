import { describe, it, expect } from "vitest";
import { ArrayMerger } from "../src/index";

describe("ArrayMerger", () => {
  it("should merge two sorted arrays into one sorted array", () => {
    const array1 = ["Arya", "Bran", "Jon", "Sansa"];
    const array2 = ["Daenerys", "Jaime", "Tyrion"];
    const expectedOutput = [
      "Arya",
      "Bran",
      "Daenerys",
      "Jaime",
      "Jon",
      "Sansa",
      "Tyrion",
    ];
    expect(ArrayMerger.mergeSortedArrays(array1, array2)).toEqual(
      expectedOutput,
    );
  });

  it("should handle merging when one array is empty", () => {
    const array1 = ["Arya", "Bran"];
    const array2: string[] = [];
    const expectedOutput = ["Arya", "Bran"];
    expect(ArrayMerger.mergeSortedArrays(array1, array2)).toEqual(
      expectedOutput,
    );
  });

  it("should handle merging when both arrays are empty", () => {
    const array1: string[] = [];
    const array2: string[] = [];
    const expectedOutput: string[] = [];
    expect(ArrayMerger.mergeSortedArrays(array1, array2)).toEqual(
      expectedOutput,
    );
  });

  it("should handle merging when arrays have no common elements", () => {
    const array1 = ["Arya", "Bran"];
    const array2 = ["Daenerys", "Tyrion"];
    const expectedOutput = ["Arya", "Bran", "Daenerys", "Tyrion"];
    expect(ArrayMerger.mergeSortedArrays(array1, array2)).toEqual(
      expectedOutput,
    );
  });

  it("should handle merging when arrays have overlapping elements", () => {
    const array1 = ["Arya", "Bran", "Jon"];
    const array2 = ["Bran", "Daenerys", "Tyrion"];
    const expectedOutput = [
      "Arya",
      "Bran",
      "Bran",
      "Daenerys",
      "Jon",
      "Tyrion",
    ];
    expect(ArrayMerger.mergeSortedArrays(array1, array2)).toEqual(
      expectedOutput,
    );
  });
});
