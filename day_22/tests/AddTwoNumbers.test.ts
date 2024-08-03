import { describe, it, expect } from "vitest";
import { addTwoNumbers, ListNode } from "../src/index";

function createLinkedList(values: number[]): ListNode | null {
  let head: ListNode | null = new ListNode(0);
  let current = head;
  for (let value of values) {
    current.next = new ListNode(value);
    current = current.next;
  }
  return head.next;
}

describe("addTwoNumbers", () => {
  it("should add two numbers represented by linked lists", () => {
    const list1 = createLinkedList([2, 4, 3]);
    const list2 = createLinkedList([5, 6, 4]);
    const result = addTwoNumbers(list1, list2);

    const expectedResult = createLinkedList([7, 0, 8]);
    expect(result).toEqual(expectedResult);
  });

  it("should handle lists of different lengths", () => {
    const list1 = createLinkedList([9, 9]);
    const list2 = createLinkedList([1]);
    const result = addTwoNumbers(list1, list2);

    const expectedResult = createLinkedList([0, 0, 1]);
    expect(result).toEqual(expectedResult);
  });

  it("should handle carry over", () => {
    const list1 = createLinkedList([9, 9, 9]);
    const list2 = createLinkedList([1]);
    const result = addTwoNumbers(list1, list2);

    const expectedResult = createLinkedList([0, 0, 0, 1]);
    expect(result).toEqual(expectedResult);
  });
});
