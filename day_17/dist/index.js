"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = exports.LinkedListNode = void 0;
class LinkedListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.logCreation();
    }
    logCreation() {
        console.log(`A new node has been created with the value: ${this.value}. Winter is Coming!`);
    }
    setNext(nextNode) {
        this.next = nextNode;
        if (nextNode) {
            console.log(`Node with value: ${this.value} now points to node with value: ${nextNode.value}. The North Remembers.`);
        }
        else {
            console.log(`Node with value: ${this.value} now points to null. The King in the North!`);
        }
    }
}
exports.LinkedListNode = LinkedListNode;
const firstNode = new LinkedListNode(1);
const secondNode = new LinkedListNode(2);
firstNode.setNext(secondNode);
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    addNode(value) {
        const newNode = new LinkedListNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            if (this.tail) {
                this.tail.setNext(newNode);
                this.tail = newNode;
            }
        }
        console.log(`Added node with value: ${value} to the end of the list. Valar Morghulis.`);
    }
    removeNode() {
        if (!this.head) {
            console.log("The list is empty. No nodes to remove. Valar Dohaeris.");
            return;
        }
        if (this.head === this.tail) {
            console.log(`Removed the only node with value: ${this.head.value}. Dracarys!`);
            this.head = null;
            this.tail = null;
            return;
        }
        let current = this.head;
        while (current.next && current.next !== this.tail) {
            current = current.next;
        }
        if (this.tail) {
            console.log(`Removed node with value: ${this.tail.value}. Fire and Blood!`);
        }
        current.next = null;
        this.tail = current;
    }
    displayNodes() {
        if (!this.head) {
            console.log("The list is empty. Hear Me Roar.");
            return;
        }
        let current = this.head;
        let nodes = "LinkedList: ";
        while (current) {
            nodes += `${current.value} -> `;
            current = current.next;
        }
        nodes += "null";
        console.log(nodes);
    }
}
exports.LinkedList = LinkedList;
const list = new LinkedList();
list.addNode(1);
list.addNode(2);
list.displayNodes();
list.removeNode();
list.displayNodes();
list.removeNode();
list.displayNodes();
class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        this.items.push(item);
        console.log(`Pushed ${item} onto the stack. The stack grows!`);
    }
    pop() {
        const item = this.items.pop();
        if (item !== undefined) {
            console.log(`Popped ${item} from the stack. Fire and Blood!`);
        }
        else {
            console.log("The stack is empty. No item to pop. Winter is Coming!");
        }
        return item;
    }
    peek() {
        const item = this.items[this.items.length - 1];
        if (item !== undefined) {
            console.log(`Peeked at ${item} on the stack. The North Remembers.`);
        }
        else {
            console.log("The stack is empty. Nothing to peek. Valar Dohaeris.");
        }
        return item;
    }
    isEmpty() {
        return this.items.length === 0;
    }
    display() {
        if (this.isEmpty()) {
            console.log("The stack is empty. Hear Me Roar.");
            return;
        }
        console.log("Stack:", this.items.join(" -> "));
    }
}
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.peek();
stack.display();
stack.pop();
stack.display();
stack.pop();
stack.pop();
stack.display();
function reverseString(str) {
    const stack = new Stack();
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
class Queue {
    constructor() {
        this.items = [];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    enqueue(item) {
        this.items.push(item);
        console.log(`Enqueued ${item} to the queue. The queue grows!`);
    }
    dequeue() {
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
    front() {
        const item = this.items[0];
        if (item !== undefined) {
            console.log(`Front of the queue is ${item}. The North Remembers.`);
        }
        else {
            console.log("The queue is empty. Nothing at the front. Valar Dohaeris.");
        }
        return item;
    }
    display() {
        if (this.isEmpty()) {
            console.log(`The queue is empty. Hear Me Roar`);
            return;
        }
        console.log("Queue:", this.items.join(" <- "));
    }
}
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.front();
queue.display();
queue.dequeue();
queue.display();
queue.dequeue();
queue.dequeue();
queue.display();
class PrinterQueue {
    constructor() {
        this.queue = new Queue();
    }
    addPrintJob(job) {
        this.queue.enqueue(job);
        console.log(`Added print job: "${job}". A new scroll for the Iron Throne.`);
    }
    processPrintJob() {
        const job = this.queue.dequeue();
        if (job) {
            console.log(`Processing print job: "${job}". The realm will be pleased.`);
        }
    }
    displayJobs() {
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
class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
        this.logCreation();
    }
    logCreation() {
        console.log(`Created a new tree node with value: ${this.value}. The Seven Kingdoms await!`);
    }
    setLeft(leftNode) {
        var _a;
        this.left = leftNode;
        console.log(`Node with value: ${this.value} now has a left child with value: ${(_a = leftNode === null || leftNode === void 0 ? void 0 : leftNode.value) !== null && _a !== void 0 ? _a : "null"}. The North Remembers.`);
    }
    setRight(rightNode) {
        var _a;
        this.right = rightNode;
        console.log(`Node with value: ${this.value} now has a right child with value: ${(_a = rightNode === null || rightNode === void 0 ? void 0 : rightNode.value) !== null && _a !== void 0 ? _a : "null"}. Fire and Blood.`);
    }
}
const root = new TreeNode(10);
const leftChild = new TreeNode(5);
const rightChild = new TreeNode(15);
root.setLeft(leftChild);
root.setRight(rightChild);
console.log(`Root Node: ${root.value}`);
console.log(`Left Child of Root: ${(_a = root.left) === null || _a === void 0 ? void 0 : _a.value}`);
console.log(`Right Child of Root: ${(_b = root.right) === null || _b === void 0 ? void 0 : _b.value}`);
class BinaryTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new TreeNode(value);
        if (this.root === null) {
            this.root = newNode;
            console.log(`Inserted ${value} as the root node. Winter is Coming!`);
        }
        else {
            this.insertNode(this.root, newNode);
        }
    }
    insertNode(current, newNode) {
        if (newNode.value < current.value) {
            if (current.left === null) {
                current.left = newNode;
                console.log(`Inserted ${newNode.value} to the left of ${current.value}. The North Remembers.`);
            }
            else {
                this.insertNode(current.left, newNode);
            }
        }
        else {
            if (current.right === null) {
                current.right = newNode;
                console.log(`Inserted ${newNode.value} to the right of ${current.value}. Fire and Blood.`);
            }
            else {
                this.insertNode(current.right, newNode);
            }
        }
    }
    inOrderTraversal() {
        console.log("In-order Traversal:");
        this.inOrder(this.root);
        console.log("End of Traversal. Valar Dohaeris.");
    }
    inOrder(node) {
        if (node !== null) {
            this.inOrder(node.left);
            console.log(node.value);
            this.inOrder(node.right);
        }
    }
}
const binaryTree = new BinaryTree();
binaryTree.insert(10);
binaryTree.insert(5);
binaryTree.insert(15);
binaryTree.insert(3);
binaryTree.insert(7);
binaryTree.insert(12);
binaryTree.insert(18);
binaryTree.inOrderTraversal();
class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }
    addVertex(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, new Set());
            console.log(`Vertex ${vertex} added. The Seven Kingdoms are expanding!`);
        }
        else {
            console.log(`Vertex ${vertex} already exists. Winter is Coming!`);
        }
    }
    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList.has(vertex1) || !this.adjacencyList.has(vertex2)) {
            console.log(`One or both vertices ${vertex1} and ${vertex2} do not exist. Hear Me Roar.`);
            return;
        }
        this.adjacencyList.get(vertex1).add(vertex2);
        this.adjacencyList.get(vertex2).add(vertex1); // Undirected graph
        console.log(`Edge added between ${vertex1} and ${vertex2}. The Wall stands strong.`);
    }
    breadthFirstSearch(startVertex, endVertex) {
        if (!this.adjacencyList.has(startVertex)) {
            console.log(`Start vertex ${startVertex} does not exist. The King in the North is missing!`);
            return new Map();
        }
        const visited = new Set();
        const queue = [startVertex];
        const previous = new Map();
        visited.add(startVertex);
        previous.set(startVertex, null);
        while (queue.length > 0) {
            const vertex = queue.shift();
            if (vertex === endVertex) {
                return previous;
            }
            this.adjacencyList.get(vertex).forEach((neighbor) => {
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
    constructor(graph) {
        this.graph = graph;
    }
    findShortestPath(startVertex, endVertex) {
        const previous = this.graph.breadthFirstSearch(startVertex, endVertex);
        if (previous.size === 0 || !previous.has(endVertex)) {
            console.log("No path found. Valar Morghulis.");
            return;
        }
        const path = [];
        let current = endVertex;
        while (current !== null) {
            path.unshift(current);
            current = previous.get(current) || null;
        }
        if (path[0] === startVertex) {
            console.log(`Shortest path from ${startVertex} to ${endVertex}: ${path.join(" -> ")}. The North Remembers.`);
        }
        else {
            console.log(`No path found from ${startVertex} to ${endVertex}. Winterfell stands alone.`);
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
