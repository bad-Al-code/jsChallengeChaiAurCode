import { describe, it, expect, vi, afterEach } from "vitest";
import { TreeNode } from "../src/index";

const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});

describe("TreeNode", () => {
  afterEach(() => {
    logSpy.mockClear();
  });

  it("should create a new tree node", () => {
    const node = new TreeNode(1);

    expect(node.value).toBe(1);
    expect(node.left).toBeNull();
    expect(node.right).toBeNull();
    expect(logSpy).toHaveBeenCalledWith(
      "Created a new tree node with value: 1. The Seven Kingdoms await!",
    );
  });

  it("should set the left child of a node", () => {
    const parent = new TreeNode(1);
    const child = new TreeNode(2);
    parent.setLeft(child);

    expect(parent.left).toBe(child);
    expect(logSpy).toHaveBeenCalledWith(
      "Node with value: 1 now has a left child with value: 2. The North Remembers.",
    );
  });

  it("should handle setting left child to null", () => {
    const parent = new TreeNode(1);
    parent.setLeft(null);

    expect(parent.left).toBeNull();
    expect(logSpy).toHaveBeenCalledWith(
      "Node with value: 1 now has a left child with value: null. The North Remembers.",
    );
  });

  it("should set the right child of a node", () => {
    const parent = new TreeNode(1);
    const child = new TreeNode(2);
    parent.setRight(child);

    expect(parent.right).toBe(child);
    expect(logSpy).toHaveBeenCalledWith(
      "Node with value: 1 now has a right child with value: 2. Fire and Blood.",
    );
  });

  it("should handle setting right child to null", () => {
    const parent = new TreeNode(1);
    parent.setRight(null);

    expect(parent.right).toBeNull();
    expect(logSpy).toHaveBeenCalledWith(
      "Node with value: 1 now has a right child with value: null. Fire and Blood.",
    );
  });
});
