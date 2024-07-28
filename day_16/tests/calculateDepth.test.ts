import { describe, it, expect } from "vitest";
import { TreeNode, calculateDepth } from "../src/index";

describe("calculateDepth", () => {
  it("should return the correct depth for a balanced tree", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(5);
    root.right.left = new TreeNode(6);
    root.right.right = new TreeNode(7);

    expect(calculateDepth(root)).toBe(3);
  });

  it("should return the correct depth for a tree with only left children", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.left.left = new TreeNode(3);
    root.left.left.left = new TreeNode(4);

    expect(calculateDepth(root)).toBe(4);
  });

  it("should return the correct depth for a tree with only right children", () => {
    const root = new TreeNode(1);
    root.right = new TreeNode(2);
    root.right.right = new TreeNode(3);
    root.right.right.right = new TreeNode(4);

    expect(calculateDepth(root)).toBe(4);
  });

  it("should return 0 for an empty tree (null root)", () => {
    expect(calculateDepth(null)).toBe(0);
  });

  it("should return 1 for a tree with only the root node", () => {
    const root = new TreeNode(1);

    expect(calculateDepth(root)).toBe(1);
  });
});
