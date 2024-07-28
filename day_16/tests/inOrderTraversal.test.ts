import { vi, describe, it, expect } from "vitest";
import { TreeNode, inOrderTraversal } from "../src/index";

describe("inOrderTraversal", () => {
  it("should log the nodes in in-order traversal", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(5);
    root.right.left = new TreeNode(6);
    root.right.right = new TreeNode(7);

    const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});

    inOrderTraversal(root);

    expect(consoleSpy).toHaveBeenCalledWith(4);
    expect(consoleSpy).toHaveBeenCalledWith(2);
    expect(consoleSpy).toHaveBeenCalledWith(5);
    expect(consoleSpy).toHaveBeenCalledWith(1);
    expect(consoleSpy).toHaveBeenCalledWith(6);
    expect(consoleSpy).toHaveBeenCalledWith(3);
    expect(consoleSpy).toHaveBeenCalledWith(7);

    consoleSpy.mockRestore();
  });
});
