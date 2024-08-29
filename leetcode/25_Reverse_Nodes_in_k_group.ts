// Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.
//
// k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.
//
// You may not alter the values in the list's nodes, only nodes themselves may be changed.

/*
 * BruteForce Approach:
 *   -> count the total number of nodes
 *   -> iterate through the list, reversing k nodes at a time
 *   -> if we reach a point, where there are fewer than k nodes left, we stop reversing
 *
 * Efficient Approach:
 *  -> solve in a single pass
 *  -> use dummy node to handle edge cases easily and reverse k nodes at a time
 *
 * TODO: Optimize the Solution
 *  -> Instead of counting all nodes upfront, we'll count k nodes at a time
 *  -> If we count k nodes, we reverse them. If not, we leve the remaining nodes as is
 * -> Even though TIME COMPLEXITY Remains same as O(n) but more Efficient in practice { it makes only one traversal, stop processing as soon as it can't fing k more nodes, potentially sacing time on very long lists
 */

interface ListNode {
  val: number;
  next: ListNode | null;
}

class Solution {
  reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    // Base case: ih head is null or k is 1, no reverse in nedded
    if (!head || k === 1) return head;

    const dummy: ListNode = { val: 0, next: head };
    let prev: ListNode | null = dummy;
    let curr: ListNode | null = head;
    let next: ListNode | null = null;

    let count: number = 0;

    while (curr) {
      count++;
      curr = curr.next;
    }

    curr = head;

    while (count >= k) {
      curr = prev.next; // First node of kth group
      if (curr) {
        next = curr.next; // Seconf node of the k group

        for (let i = 1; i < k && curr && next; i++) {
          curr.next = next.next;
          next.next = prev.next;
          prev.next = next;

          next = curr.next;
        }

        prev = curr;
        count -= k;
      }
    }

    return dummy.next;
  }
}
