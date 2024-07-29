import { vi, describe, expect, it, afterEach } from "vitest";

import { LinkedListNode } from "../src/index";

const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});

describe("LinkedListNode", () => {
  afterEach(() => {
    logSpy.mockClear();
  });

  it("should create a new node with the given value", () => {
    const node = new LinkedListNode<number>(42);
    expect(node.value).toBe(42);
    expect(node.next).toBeNull();
    expect(logSpy).toHaveBeenCalledWith(
      "A new node has been created with the value: 42. Winter is Coming!",
    );
  });

  it("should set the next node correctly", () => {
    const node1 = new LinkedListNode<number>(1);
    const node2 = new LinkedListNode<number>(2);
    node1.setNext(node2);
    expect(node1.next).toBe(node2);
    expect(logSpy).toHaveBeenCalledWith(
      "Node with value: 1 now points to node with value: 2. The North Remembers.",
    );
  });

  it("should set the next node to null correctly", () => {
    const node = new LinkedListNode<number>(3);
    node.setNext(null);
    expect(node.next).toBeNull();
    expect(logSpy).toHaveBeenCalledWith(
      "Node with value: 3 now points to null. The King in the North!",
    );
  });
});
