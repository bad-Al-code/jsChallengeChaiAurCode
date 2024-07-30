import { describe, it, expect } from "vitest";
import { Knapsack, Item } from "../src/index";

describe("Knapsack", () => {
  it("should calculate the maximum value for given items and capacity", () => {
    const items: Item[] = [
      { name: "Dragon Glass", weight: 1, value: 1500 },
      { name: "Valyrian Steel", weight: 3, value: 3000 },
      { name: "Golden Crown", weight: 4, value: 2000 },
      { name: "Direwolf", weight: 2, value: 1800 },
    ];
    const capacity = 5;
    const expectedOutput = 4800; // Selecting Dragon Glass, Valyrian Steel, and Direwolf
    expect(Knapsack.solveKnapsack(items, capacity)).toBe(expectedOutput);
  });

  it("should handle the case where the capacity is 0", () => {
    const items: Item[] = [
      { name: "Dragon Glass", weight: 1, value: 1500 },
      { name: "Valyrian Steel", weight: 3, value: 3000 },
    ];
    const capacity = 0;
    const expectedOutput = 0;
    expect(Knapsack.solveKnapsack(items, capacity)).toBe(expectedOutput);
  });

  it("should handle the case where no items can be selected", () => {
    const items: Item[] = [
      { name: "Dragon Glass", weight: 10, value: 1500 },
      { name: "Valyrian Steel", weight: 20, value: 3000 },
    ];
    const capacity = 5;
    const expectedOutput = 0;
    expect(Knapsack.solveKnapsack(items, capacity)).toBe(expectedOutput);
  });

  it("should handle the case where all items can be selected", () => {
    const items: Item[] = [
      { name: "Dragon Glass", weight: 1, value: 1500 },
      { name: "Valyrian Steel", weight: 2, value: 3000 },
    ];
    const capacity = 5;
    const expectedOutput = 4500;
    expect(Knapsack.solveKnapsack(items, capacity)).toBe(expectedOutput);
  });

  it("should handle a larger capacity and multiple items", () => {
    const items: Item[] = [
      { name: "Dragon Glass", weight: 1, value: 1500 },
      { name: "Valyrian Steel", weight: 3, value: 3000 },
      { name: "Golden Crown", weight: 4, value: 2000 },
      { name: "Direwolf", weight: 2, value: 1800 },
    ];
    const capacity = 10;
    const expectedOutput = 8300;
    expect(Knapsack.solveKnapsack(items, capacity)).toBe(expectedOutput);
  });
});
