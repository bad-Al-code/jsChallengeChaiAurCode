interface Person {
  name: string;
  age: number;
}

interface Book {
  title: string;
  author: string;
  year: number;
}

interface Library {
  name: string;
  books: Book[];
  greet: () => void;
}

// Activity 1: Template Literal
const person: Person = {
  name: "Al",
  age: 20,
};

console.log(`Person name is ${person.name} and age is ${person.age}`);
console.log(`Person name is ${person.name}\nAge is ${person.age}`);

// Activity 2: Destructuring
const myArray: (number | string)[] = [1, 2, "Al", "BADAL"];
const [firstElement, secondElement] = myArray;

console.log(`First element is ${firstElement}`);
console.log(`Second element is ${secondElement}`);

const book: Book = {
  title: "A Game of Thrones",
  author: "George R. R. Martin",
  year: 1996,
};

const { title, author } = book;
console.log(`Book title is ${title}`);
console.log(`Book author is ${author}`);

// Activity 3: Spread and Rest Operators
const mySecondArray: (number | string)[] = [
  "asdasd",
  12,
  ...myArray,
  "this",
  45.5,
];
console.log(`My Second Array: ${mySecondArray}`);

// Activity 4: Default Parameters
function multiply(a: number, b: number = 1): number {
  return a * b;
}

console.log(`Multiply with both parameters: ${multiply(10, 1)}`);
console.log(`Multiply without second parameter: ${multiply(10)}`);

// Activity 5
const library: Library = {
  name: "City Library",
  books: [
    { title: "A Clash of Kings", author: "George R. R. Martin", year: 1998 },
    { title: "A Storm of Swords", author: "George R. R. Martin", year: 2000 },
    { title: "A Feast for Crows", author: "George R. R. Martin", year: 2005 },
  ],
  greet() {
    console.log(`Book title is ${this.books[0].title}`);
  },
};

console.log(library.name);
library.greet();
