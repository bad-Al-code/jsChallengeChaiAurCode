export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val: number, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

export function addTwoNumbers(
  lannisterList: ListNode | null,
  starkList: ListNode | null,
): ListNode | null {
  let head: ListNode | null = new ListNode(0);
  let current: ListNode | null = head;
  let carry: number = 0;

  while (lannisterList !== null || starkList !== null) {
    let lannisterVal = lannisterList !== null ? lannisterList.val : 0;
    let starkVal = starkList !== null ? starkList.val : 0;

    let sum = lannisterVal + starkVal + carry;
    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;

    if (lannisterList !== null) lannisterList = lannisterList.next;
    if (starkList !== null) starkList = starkList.next;
  }

  if (carry > 0) {
    current.next = new ListNode(carry);
  }

  console.log("Sum list created successfully, Your Grace.");
  return head.next;
}

function printLinkedList(node: ListNode | null) {
  let result = [];
  while (node !== null) {
    result.push(node.val);
    node = node.next;
  }

  console.log(result.join(" -> "));
}

const list1 = new ListNode(2, new ListNode(4, new ListNode(3)));
const list2 = new ListNode(5, new ListNode(6, new ListNode(4)));
const result = addTwoNumbers(list1, list2);
// console.log(result);
printLinkedList(result);

export function lengthOfLongestSubstring(daenerysStr: string): number {
  let dragonMap: Map<string, number> = new Map();
  let maxLength: number = 0;
  let start: number = 0;

  for (let end = 0; end < daenerysStr.length; end++) {
    let currentChar = daenerysStr[end];
    if (dragonMap.has(currentChar)) {
      start = Math.max(start, (dragonMap.get(currentChar) || 0) + 1);
    }
    dragonMap.set(currentChar, end);
    maxLength = Math.max(maxLength, end - start + 1);
  }

  console.log("Longest unique substring found, Your Grace.");
  return maxLength;
}

const testCases = ["targaryen", "", "jon", "aaaa", "sersei"];
testCases.forEach((testCase) => {
  const result = lengthOfLongestSubstring(testCase);
  console.log(`Input: "${testCase}", Output: ${result}`);
});
