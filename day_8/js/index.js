// Activity 1: Template Literal
let person = {
  name: "al",
  age: 20,
};

console.log(`Person name is ${person.name} and age is ${person.age}`);
console.log(`Person name is ${person.name}\nAge is ${person.age}`);

// Activity 2: Destructuring
const myArray = [1, 2, "Asdasd", "laskdlaskd"];
const [firstElement, secondElement] = myArray;
console.log(`First element is ${firstElement}`);
console.log(`Second element is ${secondElement}`);

const book = {
  title: "A Game of Thrones",
  author: "George R. R. Martin",
  year: 1996,
};

const { title, author } = book;
console.log(`Book title is ${title}`);
console.log(`Book Author is ${author}`);

// Activity 3: Spread and Rest Operators
const mySecondArray = ["asdasd", 12, ...myArray, "this", 45.5];
console.log(`My Second Array: ${mySecondArray}`);

// Activity 4: Default parameters
function multiply(a, b = 1) {
  return a * b;
}

console.log(`Multiply with both parameter: ${multiply(10, 1)} `);
console.log(`Multiply without second parameter: ${multiply(10)}`);

// Acticity 5: Enhanced Object Literals
const library = {
  name: "City Library",
  books: [
    { title: "A Clash of Kings", author: "George R. R. Martin", year: 1998 },
  ],
  greet: function () {
    console.log(`Book title is ${this.books[0].title}`);
  },
};
library.greet();
console.log(library.name);
