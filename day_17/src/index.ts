export class LinkedListNode<T> {
  public value: T;
  public next: LinkedListNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
    this.logCreation();
  }

  private logCreation(): void {
    console.log(
      `A new node has been created with the value: ${this.value}. Winter is Coming!`,
    );
  }

  public setNext(nextNode: LinkedListNode<T> | null): void {
    this.next = nextNode;
    if (nextNode) {
      console.log(
        `Node with value: ${this.value} now points to node with value: ${nextNode.value}. The North Remembers.`,
      );
    } else {
      console.log(
        `Node with value: ${this.value} now points to null. The King in the North!`,
      );
    }
  }
}

const firstNode = new LinkedListNode<number>(1);
const secondNode = new LinkedListNode<number>(2);
firstNode.setNext(secondNode);

export class LinkedList<T> {
  private head: LinkedListNode<T> | null;
  private tail: LinkedListNode<T> | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  public addNode(value: T): void {
    const newNode = new LinkedListNode<T>(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      if (this.tail) {
        this.tail.setNext(newNode);
        this.tail = newNode;
      }
    }
    console.log(
      `Added node with value: ${value} to the end of the list. Valar Morghulis.`,
    );
  }

  public removeNode(): void {
    if (!this.head) {
      console.log("The list is empty. No nodes to remove. Valar Dohaeris.");
      return;
    }

    if (this.head === this.tail) {
      console.log(
        `Removed the only node with value: ${this.head.value}. Dracarys!`,
      );
      this.head = null;
      this.tail = null;
      return;
    }

    let current: LinkedListNode<T> | null = this.head;
    while (current.next && current.next !== this.tail) {
      current = current.next;
    }

    if (this.tail) {
      console.log(
        `Removed node with value: ${this.tail.value}. Fire and Blood!`,
      );
    }
    current.next = null;
    this.tail = current;
  }

  public displayNodes(): void {
    if (!this.head) {
      console.log("The list is empty. Hear Me Roar.");
      return;
    }

    let current: LinkedListNode<T> | null = this.head;
    let nodes = "LinkedList: ";
    while (current) {
      nodes += `${current.value} -> `;
      current = current.next;
    }
    nodes += "null";
    console.log(nodes);
  }

  public getHead(): LinkedListNode<T> | null {
    return this.head;
  }
  public getTail(): LinkedListNode<T> | null {
    return this.tail;
  }
}

const list = new LinkedList<number>();
list.addNode(1);
list.addNode(2);
list.displayNodes();
list.removeNode();
list.displayNodes();
list.removeNode();
list.displayNodes();

export class Stack<T> {
  private items: T[];

  constructor() {
    this.items = [];
  }

  public push(item: T): void {
    this.items.push(item);
    console.log(`Pushed ${item} onto the stack. The stack grows!`);
  }

  public pop(): T | undefined {
    const item = this.items.pop();
    if (item !== undefined) {
      console.log(`Popped ${item} from the stack. Fire and Blood!`);
    } else {
      console.log("The stack is empty. No item to pop. Winter is Coming!");
    }
    return item;
  }

  public peek(): T | undefined {
    const item = this.items[this.items.length - 1];
    if (item !== undefined) {
      console.log(`Peeked at ${item} on the stack. The North Remembers.`);
    } else {
      console.log("The stack is empty. Nothing to peek. Valar Dohaeris.");
    }

    return item;
  }

  public isEmpty(): boolean {
    return this.items.length === 0;
  }

  public display(): void {
    if (this.isEmpty()) {
      console.log("The stack is empty. Hear Me Roar.");
      return;
    }
    console.log(`Stack: ${this.items.join(" -> ")}`);
  }
}

const stack = new Stack<number>();
stack.push(10);
stack.push(20);
stack.peek();
stack.display();
stack.pop();
stack.display();
stack.pop();
stack.pop();
stack.display();

export function reverseString(str: string): string {
  const stack = new Stack<string>();

  for (const char of str) {
    stack.push(char);
  }

  let reversedString = "";
  while (!stack.isEmpty()) {
    reversedString += stack.pop();
  }

  return reversedString;
}

const originalString = "WinterIsComing";
const reversedString = reverseString(originalString);
console.log(`Original String: ${originalString}`);
console.log(`Reversed String: ${reversedString}`);

export class Queue<T> {
  private items: T[];

  constructor() {
    this.items = [];
  }

  public isEmpty(): boolean {
    return this.items.length === 0;
  }

  public enqueue(item: T): void {
    this.items.push(item);
    console.log(`Enqueued ${item} to the queue. The queue grows!`);
  }

  public dequeue(): T | undefined {
    if (this.isEmpty()) {
      console.log("The queue is empty. No item to dequeue. Winter is Coming!");
      return undefined;
    }

    const item = this.items.shift();
    if (item !== undefined) {
      console.log(`Dequeued ${item} from the queue. Fire and Blood!`);
    }

    return item;
  }

  public front(): T | undefined {
    const item = this.items[0];

    if (item !== undefined) {
      console.log(`Front of the queue is ${item}. The North Remembers.`);
    } else {
      console.log("The queue is empty. Nothing at the front. Valar Dohaeris.");
    }
    return item;
  }

  public display(): void {
    if (this.isEmpty()) {
      console.log(`The queue is empty. Hear Me Roar`);
      return;
    }

    console.log(`Queue: ${this.items.join(" <- ")}`);
  }
}

const queue = new Queue<number>();
queue.enqueue(1);
queue.enqueue(2);
queue.front();
queue.display();
queue.dequeue();
queue.display();
queue.dequeue();
queue.dequeue();
queue.display();

export class PrinterQueue {
  private queue: Queue<string>;

  constructor() {
    this.queue = new Queue<string>();
  }

  public addPrintJob(job: string): void {
    this.queue.enqueue(job);
    console.log(`Added print job: "${job}". A new scroll for the Iron Throne.`);
  }

  public processPrintJob(): void {
    const job = this.queue.dequeue();
    if (job) {
      console.log(`Processing print job: "${job}". The realm will be pleased.`);
    }
  }

  public displayJobs(): void {
    console.log("Current print jobs in the queue:");
    this.queue.display();
  }
}

const printerQueue = new PrinterQueue();
printerQueue.addPrintJob("Report on the Wall");
printerQueue.addPrintJob("Scroll of House Stark");
printerQueue.displayJobs();

printerQueue.processPrintJob();
printerQueue.displayJobs();

printerQueue.processPrintJob();
printerQueue.processPrintJob();
printerQueue.displayJobs();

export class TreeNode<T> {
  public value: T;
  public left: TreeNode<T> | null;
  public right: TreeNode<T> | null;

  constructor(
    value: T,
    left: TreeNode<T> | null = null,
    right: TreeNode<T> | null = null,
  ) {
    this.value = value;
    this.left = left;
    this.right = right;
    this.logCreation();
  }

  private logCreation(): void {
    console.log(
      `Created a new tree node with value: ${this.value}. The Seven Kingdoms await!`,
    );
  }

  public setLeft(leftNode: TreeNode<T> | null): void {
    this.left = leftNode;
    console.log(
      `Node with value: ${this.value} now has a left child with value: ${leftNode?.value ?? "null"}. The North Remembers.`,
    );
  }

  public setRight(rightNode: TreeNode<T> | null): void {
    this.right = rightNode;
    console.log(
      `Node with value: ${this.value} now has a right child with value: ${rightNode?.value ?? "null"}. Fire and Blood.`,
    );
  }
}

const root = new TreeNode<number>(10);
const leftChild = new TreeNode<number>(5);
const rightChild = new TreeNode<number>(15);

root.setLeft(leftChild);
root.setRight(rightChild);

console.log(`Root Node: ${root.value}`);
console.log(`Left Child of Root: ${root.left?.value}`);
console.log(`Right Child of Root: ${root.right?.value}`);

class BinaryTree<T> {
  private root: TreeNode<T> | null = null;

  public insert(value: T): void {
    const newNode = new TreeNode(value);
    if (this.root === null) {
      this.root = newNode;
      console.log(`Inserted ${value} as the root node. Winter is Coming!`);
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  private insertNode(current: TreeNode<T>, newNode: TreeNode<T>): void {
    if (newNode.value < current.value) {
      if (current.left === null) {
        current.left = newNode;
        console.log(
          `Inserted ${newNode.value} to the left of ${current.value}. The North Remembers.`,
        );
      } else {
        this.insertNode(current.left, newNode);
      }
    } else {
      if (current.right === null) {
        current.right = newNode;
        console.log(
          `Inserted ${newNode.value} to the right of ${current.value}. Fire and Blood.`,
        );
      } else {
        this.insertNode(current.right, newNode);
      }
    }
  }

  public inOrderTraversal(): void {
    console.log("In-order Traversal:");
    this.inOrder(this.root);
    console.log("End of Traversal. Valar Dohaeris.");
  }

  private inOrder(node: TreeNode<T> | null): void {
    if (node !== null) {
      this.inOrder(node.left);
      console.log(node.value);
      this.inOrder(node.right);
    }
  }
}

const binaryTree = new BinaryTree<number>();

binaryTree.insert(10);
binaryTree.insert(5);
binaryTree.insert(15);
binaryTree.insert(3);
binaryTree.insert(7);
binaryTree.insert(12);
binaryTree.insert(18);

binaryTree.inOrderTraversal();

class Graph {
  private adjacencyList: Map<string, Set<string>>;

  constructor() {
    this.adjacencyList = new Map();
  }

  public addVertex(vertex: string): void {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, new Set());
      console.log(`Vertex ${vertex} added. The Seven Kingdoms are expanding!`);
    } else {
      console.log(`Vertex ${vertex} already exists. Winter is Coming!`);
    }
  }

  public addEdge(vertex1: string, vertex2: string): void {
    if (!this.adjacencyList.has(vertex1) || !this.adjacencyList.has(vertex2)) {
      console.log(
        `One or both vertices ${vertex1} and ${vertex2} do not exist. Hear Me Roar.`,
      );
      return;
    }
    this.adjacencyList.get(vertex1)!.add(vertex2);
    this.adjacencyList.get(vertex2)!.add(vertex1); // Undirected graph
    console.log(
      `Edge added between ${vertex1} and ${vertex2}. The Wall stands strong.`,
    );
  }

  public breadthFirstSearch(
    startVertex: string,
    endVertex?: string,
  ): Map<string, string | null> {
    if (!this.adjacencyList.has(startVertex)) {
      console.log(
        `Start vertex ${startVertex} does not exist. The King in the North is missing!`,
      );
      return new Map();
    }

    const visited = new Set<string>();
    const queue: string[] = [startVertex];
    const previous: Map<string, string | null> = new Map();
    visited.add(startVertex);
    previous.set(startVertex, null);

    while (queue.length > 0) {
      const vertex = queue.shift()!;
      if (vertex === endVertex) {
        return previous;
      }

      this.adjacencyList.get(vertex)!.forEach((neighbor) => {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
          previous.set(neighbor, vertex);
        }
      });
    }
    return previous;
  }
}

class ShortestPathFinder {
  private graph: Graph;

  constructor(graph: Graph) {
    this.graph = graph;
  }

  public findShortestPath(startVertex: string, endVertex: string): void {
    const previous = this.graph.breadthFirstSearch(startVertex, endVertex);
    if (previous.size === 0 || !previous.has(endVertex)) {
      console.log("No path found. Valar Morghulis.");
      return;
    }

    const path: string[] = [];
    let current: string | null = endVertex;

    while (current !== null) {
      path.unshift(current);
      current = previous.get(current) || null;
    }

    if (path[0] === startVertex) {
      console.log(
        `Shortest path from ${startVertex} to ${endVertex}: ${path.join(" -> ")}. The North Remembers.`,
      );
    } else {
      console.log(
        `No path found from ${startVertex} to ${endVertex}. Winterfell stands alone.`,
      );
    }
  }
}

const graph = new Graph();

graph.addVertex("Winterfell");
graph.addVertex("Kings Landing");
graph.addVertex("The Wall");
graph.addVertex("Dragonstone");
graph.addVertex("Dorne");

graph.addEdge("Winterfell", "Kings Landing");
graph.addEdge("Winterfell", "The Wall");
graph.addEdge("Kings Landing", "Dragonstone");
graph.addEdge("Dragonstone", "Dorne");
graph.addEdge("The Wall", "Dorne");

const pathFinder = new ShortestPathFinder(graph);
pathFinder.findShortestPath("Winterfell", "Dorne");
