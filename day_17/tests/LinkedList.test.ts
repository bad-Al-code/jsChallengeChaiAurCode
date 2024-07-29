import { describe, it, expect, vi, afterEach } from "vitest";
import { LinkedList, LinkedListNode } from "../src/index";

const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});

describe("LinkedList", () => {
  afterEach(() => {
    logSpy.mockClear();
  });

  it("should initialize an empty list", () => {
    const list = new LinkedList<number>();
    expect(list.getHead()).toBeNull();
    expect(list.getTail()).toBeNull();
  });

  it("should add a node to the list", () => {
    const list = new LinkedList<number>();
    list.addNode(1);

    expect(logSpy).toHaveBeenCalledWith(
      "Added node with value: 1 to the end of the list. Valar Morghulis.",
    );
    expect(list.getHead()?.value).toBe(1);
    expect(list.getTail()?.value).toBe(1);
  });

  it("should add multiple nodes to the list", () => {
    const list = new LinkedList<number>();
    list.addNode(1);
    list.addNode(2);

    expect(logSpy).toHaveBeenCalledWith(
      "Added node with value: 2 to the end of the list. Valar Morghulis.",
    );

    expect(list.getHead()?.value).toBe(1);
    expect(list.getTail()?.value).toBe(2);
    expect(list.getHead()?.next?.value).toBe(2);
  });

  it("should remove a node from the list", () => {
    const list = new LinkedList<number>();
    list.addNode(1);
    list.addNode(2);

    list.removeNode();

    expect(logSpy).toHaveBeenCalledWith(
      "Removed node with value: 2. Fire and Blood!",
    );

    expect(list.getHead()?.value).toBe(1);
    expect(list.getTail()?.value).toBe(1);
  });

  it("should remove the only node from the list", () => {
    const list = new LinkedList<number>();
    list.addNode(1);
    list.removeNode();

    expect(logSpy).toHaveBeenCalledWith(
      "Removed the only node with value: 1. Dracarys!",
    );
    expect(list.getHead()).toBeNull();
    expect(list.getTail()).toBeNull();
  });

  it("should handle removing from an empty list", () => {
    const list = new LinkedList<number>();
    list.removeNode();

    expect(logSpy).toHaveBeenCalledWith(
      "The list is empty. No nodes to remove. Valar Dohaeris.",
    );
  });

  it("should display nodes correctly", () => {
    const list = new LinkedList<number>();
    list.addNode(1);
    list.addNode(2);
    list.displayNodes();

    expect(logSpy).toHaveBeenCalledWith("LinkedList: 1 -> 2 -> null");
  });

  it("should handle displaying an empty list", () => {
    const list = new LinkedList<number>();
    list.displayNodes();

    expect(logSpy).toHaveBeenCalledWith("The list is empty. Hear Me Roar.");
  });
});
