import { describe, it, expect, vi, afterEach } from "vitest";
import { Queue } from "../src/index";

const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});

describe("Queue", () => {
  afterEach(() => {
    logSpy.mockClear();
  });

  it("should initialize an empty queue", () => {
    const queue = new Queue<number>();
    expect(queue.isEmpty()).toBe(true);
  });

  it("should enqueue an item to the queue", () => {
    const queue = new Queue<number>();
    queue.enqueue(1);

    expect(queue.isEmpty()).toBe(false);
    expect(logSpy).toHaveBeenCalledWith(
      "Enqueued 1 to the queue. The queue grows!",
    );
  });

  it("should dequeue an item from the queue", () => {
    const queue = new Queue<number>();
    queue.enqueue(1);
    const dequeuedItem = queue.dequeue();

    expect(dequeuedItem).toBe(1);
    expect(queue.isEmpty()).toBe(true);
    expect(logSpy).toHaveBeenCalledWith(
      "Dequeued 1 from the queue. Fire and Blood!",
    );
  });

  it("should handle dequeueing from an empty queue", () => {
    const queue = new Queue<number>();
    const dequeuedItem = queue.dequeue();

    expect(dequeuedItem).toBeUndefined();
    expect(logSpy).toHaveBeenCalledWith(
      "The queue is empty. No item to dequeue. Winter is Coming!",
    );
  });

  it("should return the front item of the queue", () => {
    const queue = new Queue<number>();
    queue.enqueue(1);
    const frontItem = queue.front();

    expect(frontItem).toBe(1);
    expect(logSpy).toHaveBeenCalledWith(
      "Front of the queue is 1. The North Remembers.",
    );
  });

  it("should handle getting the front item from an empty queue", () => {
    const queue = new Queue<number>();
    const frontItem = queue.front();

    expect(frontItem).toBeUndefined();
    expect(logSpy).toHaveBeenCalledWith(
      "The queue is empty. Nothing at the front. Valar Dohaeris.",
    );
  });

  it("should display the queue correctly", () => {
    const queue = new Queue<number>();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.display();

    expect(logSpy).toHaveBeenCalledWith("Queue: 1 <- 2");
  });

  it("should handle displaying an empty queue", () => {
    const queue = new Queue<number>();
    queue.display();

    expect(logSpy).toHaveBeenCalledWith("The queue is empty. Hear Me Roar");
  });
});
