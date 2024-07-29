import { describe, it, expect, vi, afterEach } from "vitest";
import { Graph, ShortestPathFinder } from "../src/index";

const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});

describe("ShortestPathFinder", () => {
  afterEach(() => {
    logSpy.mockClear();
  });

  it("should find and log the shortest path correctly", () => {
    const graph = new Graph();
    graph.addVertex("A");
    graph.addVertex("B");
    graph.addVertex("C");
    graph.addEdge("A", "B");
    graph.addEdge("B", "C");

    const pathFinder = new ShortestPathFinder(graph);
    pathFinder.findShortestPath("A", "C");

    expect(logSpy).toHaveBeenCalledWith(
      "Shortest path from A to C: A -> B -> C. The North Remembers.",
    );
  });

  it("should handle start vertex or end vertex not existing", () => {
    const graph = new Graph();
    graph.addVertex("A");
    graph.addVertex("B");

    const pathFinder = new ShortestPathFinder(graph);
    pathFinder.findShortestPath("A", "C");

    expect(logSpy).toHaveBeenCalledWith("No path found. Valar Morghulis.");
  });
});
