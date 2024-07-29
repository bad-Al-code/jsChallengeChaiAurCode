import { describe, it, expect, afterEach, vi } from "vitest";
import { Stack } from "../src/index";

const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});

describe("Stack", () => {
  afterEach(() => {
    logSpy.mockClear();
  });

  it("should initialize an empty stack", () => {
    const stack = new Stack<number>();
    expect(stack.isEmpty()).toBe(true);
  });

  it("should push an item onto the stack", () => {
    const stack = new Stack<number>();
    stack.push(1);

    expect(stack.isEmpty()).toBe(false);
    expect(logSpy).toHaveBeenCalledWith(
      "Pushed 1 onto the stack. The stack grows!",
    );
  });

  it("should pop an item from the stack", () => {
    const stack = new Stack<number>();
    stack.push(1);
    const poppedItem = stack.pop();

    expect(poppedItem).toBe(1);
    expect(stack.isEmpty()).toBe(true);
    expect(logSpy).toHaveBeenCalledWith(
      "Popped 1 from the stack. Fire and Blood!",
    );
  });

  it("should handle popping from an empty stack", () => {
    const stack = new Stack<number>();
    const poppedItem = stack.pop();

    expect(poppedItem).toBeUndefined();
    expect(logSpy).toHaveBeenCalledWith(
      "The stack is empty. No item to pop. Winter is Coming!",
    );
  });

  it("should peek at the top item on the stack", () => {
    const stack = new Stack<number>();
    stack.push(1);
    const peekedItem = stack.peek();

    expect(peekedItem).toBe(1);
    expect(logSpy).toHaveBeenCalledWith(
      "Peeked at 1 on the stack. The North Remembers.",
    );
  });

  it("should handle peeking at an empty stack", () => {
    const stack = new Stack<number>();
    const peekedItem = stack.peek();

    expect(peekedItem).toBeUndefined();
    expect(logSpy).toHaveBeenCalledWith(
      "The stack is empty. Nothing to peek. Valar Dohaeris.",
    );
  });

  it("should display the stack correctly", () => {
    const stack = new Stack<number>();
    stack.push(1);
    stack.push(2);
    stack.display();

    expect(logSpy).toHaveBeenCalledWith("Stack: 1 -> 2");
  });

  it("should handle displaying an empty stack", () => {
    const stack = new Stack<number>();
    stack.display();

    expect(logSpy).toHaveBeenCalledWith("The stack is empty. Hear Me Roar.");
  });
});
