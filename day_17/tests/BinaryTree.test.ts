import { describe, it, expect, vi, afterEach } from "vitest";
import { TreeNode, BinaryTree } from "../src/index";

const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});

describe("BinaryTree", () => {
  afterEach(() => {
    logSpy.mockClear();
  });

  it("should insert a root node when tree is empty", () => {
    const tree = new BinaryTree<number>();
    tree.insert(10);

    expect(logSpy).toHaveBeenCalledWith(
      "Inserted 10 as the root node. Winter is Coming!",
    );
  });

  it("should insert nodes correctly into the binary tree", () => {
    const tree = new BinaryTree<number>();
    tree.insert(10);
    tree.insert(5);
    tree.insert(15);

    expect(logSpy).toHaveBeenCalledWith(
      "Inserted 10 as the root node. Winter is Coming!",
    );
    expect(logSpy).toHaveBeenCalledWith(
      "Inserted 5 to the left of 10. The North Remembers.",
    );
    expect(logSpy).toHaveBeenCalledWith(
      "Inserted 15 to the right of 10. Fire and Blood.",
    );
  });

  it("should handle insertion into the existing nodes", () => {
    const tree = new BinaryTree<number>();
    tree.insert(10);
    tree.insert(5);
    tree.insert(15);
    tree.insert(3);
    tree.insert(7);
    tree.insert(12);
    tree.insert(17);

    expect(logSpy).toHaveBeenCalledWith(
      "Inserted 3 to the left of 5. The North Remembers.",
    );
    expect(logSpy).toHaveBeenCalledWith(
      "Inserted 7 to the right of 5. Fire and Blood.",
    );
    expect(logSpy).toHaveBeenCalledWith(
      "Inserted 12 to the left of 15. The North Remembers.",
    );
    expect(logSpy).toHaveBeenCalledWith(
      "Inserted 17 to the right of 15. Fire and Blood.",
    );
  });

  it("should perform in-order traversal correctly", () => {
    const tree = new BinaryTree<number>();
    tree.insert(10);
    tree.insert(5);
    tree.insert(15);

    tree.inOrderTraversal();

    expect(logSpy).toHaveBeenCalledWith("In-order Traversal:");
    expect(logSpy).toHaveBeenCalledWith(5);
    expect(logSpy).toHaveBeenCalledWith(10);
    expect(logSpy).toHaveBeenCalledWith(15);
    expect(logSpy).toHaveBeenCalledWith("End of Traversal. Valar Dohaeris.");
  });
});
