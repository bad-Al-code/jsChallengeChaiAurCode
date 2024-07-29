import { describe, it, expect, vi, afterEach } from "vitest";
import { Graph } from "../src/index";

const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});

describe("Graph", () => {
  afterEach(() => {
    logSpy.mockClear();
  });

  it("should add a vertex correctly", () => {
    const graph = new Graph();
    graph.addVertex("A");

    expect(logSpy).toHaveBeenCalledWith(
      "Vertex A added. The Seven Kingdoms are expanding!",
    );
  });

  it("should not add a vertex if it already exists", () => {
    const graph = new Graph();
    graph.addVertex("A");
    graph.addVertex("A");

    expect(logSpy).toHaveBeenCalledWith(
      "Vertex A added. The Seven Kingdoms are expanding!",
    );
    expect(logSpy).toHaveBeenCalledWith(
      "Vertex A already exists. Winter is Coming!",
    );
  });

  it("should add an edge between two vertices", () => {
    const graph = new Graph();
    graph.addVertex("A");
    graph.addVertex("B");
    graph.addEdge("A", "B");

    expect(logSpy).toHaveBeenCalledWith(
      "Vertex A added. The Seven Kingdoms are expanding!",
    );
    expect(logSpy).toHaveBeenCalledWith(
      "Vertex B added. The Seven Kingdoms are expanding!",
    );
    expect(logSpy).toHaveBeenCalledWith(
      "Edge added between A and B. The Wall stands strong.",
    );
  });

  it("should not add an edge if one or both vertices do not exist", () => {
    const graph = new Graph();
    graph.addVertex("A");
    graph.addEdge("A", "B");

    expect(logSpy).toHaveBeenCalledWith(
      "Vertex A added. The Seven Kingdoms are expanding!",
    );
    expect(logSpy).toHaveBeenCalledWith(
      "One or both vertices A and B do not exist. Hear Me Roar.",
    );
  });

  it("should perform breadth-first search correctly", () => {
    const graph = new Graph();
    graph.addVertex("A");
    graph.addVertex("B");
    graph.addVertex("C");
    graph.addEdge("A", "B");
    graph.addEdge("B", "C");

    const result = graph.breadthFirstSearch("A", "C");

    expect(result.get("A")).toBeNull();
    expect(result.get("B")).toBe("A");
    expect(result.get("C")).toBe("B");
    expect(result.get("D")).toBeUndefined();
  });

  it("should handle breadth-first search when start vertex does not exist", () => {
    const graph = new Graph();
    graph.addVertex("A");
    graph.addVertex("B");

    const result = graph.breadthFirstSearch("X");

    expect(logSpy).toHaveBeenCalledWith(
      "Start vertex X does not exist. The King in the North is missing!",
    );
    expect(result).toEqual(new Map());
  });
});
