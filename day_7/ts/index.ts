// Activity 1: Object Creation and Access
console.log("=============================================");
console.log("=== Activity 1: Object Creation and Access ===");

type Book = {
  title: string;
  author: string;
  year: number;
  getDetails?: () => string;
  updateYear?: (newYear: number) => void;
  getTitleAndYear?: () => string;
};

const book: Book = {
  title: "A Game of Thrones",
  author: "George R. R. Martin",
  year: 1996,
};
console.log("Book Object:", book);

console.log("Title:", book.title);
console.log("Author:", book.author);

console.log("=============================================");

// Activity 2: Object Methods
console.log("=== Activity 2: Object Methods ===");

book.getDetails = function () {
  return `${this.title} by ${this.author}`;
};
console.log("Book Details:", book.getDetails());

book.updateYear = function (newYear: number) {
  this.year = newYear;
};
book.updateYear(2024);
console.log("Updated Book Object:", book);

console.log("=============================================");

// Activity 3: Nested Objects
console.log("=== Activity 3: Nested Objects ===");

type Library = {
  name: string;
  books: Book[];
};

const library: Library = {
  name: "City Library",
  books: [
    { title: "A Clash of Kings", author: "George R. R. Martin", year: 1998 },
    { title: "A Storm of Swords", author: "George R. R. Martin", year: 2000 },
    { title: "A Feast for Crows", author: "George R. R. Martin", year: 2005 },
  ],
};
console.log("Library Object:", library);

console.log("Library Name:", library.name);
library.books.forEach((book) => {
  console.log("Book Title:", book.title);
});

console.log("=============================================");

// Activity 4: The this keyword
console.log("=== Activity 4: The this keyword ===");

book.getTitleAndYear = function () {
  return `${this.title} (${this.year})`;
};
console.log("Title and Year:", book.getTitleAndYear());

console.log("=============================================");

// Activity 5: Object Iteration
console.log("=== Activity 5: Object Iteration ===");

for (let prop in book) {
  if (book.hasOwnProperty(prop)) {
    console.log(`${prop}: ${book[prop as keyof Book]}`);
  }
}

console.log("Book Keys:", Object.keys(book));
console.log("Book Values:", Object.values(book));

console.log("=============================================");
