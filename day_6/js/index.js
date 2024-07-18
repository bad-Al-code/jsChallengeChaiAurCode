// Activity 1: Array Creations and Access
console.log("=============================================");
console.log("=== Activity 1: Array Creations and Access ===");

// TODO: Create an array of numbers from 1 to 5 and log the array to the console
const numbers = [1, 2, 3, 4, 5];
console.log("Array:", numbers);

// TODO: Access the first and last element of the array and log them to the console
console.log("First element:", numbers[0]);
console.log("Last element:", numbers[numbers.length - 1]);

console.log("=============================================");

// Activity 2: Array Methods (Basic)
console.log("=== Activity 2: Array Methods (Basic) ===");

// TODO: Use the push method to add a new number to the end of the array and log the updated array
numbers.push(6);
console.log("Array after push:", numbers);

// TODO: Use the pop method to remove the last element from the array and log the updated array
numbers.pop();
console.log("Array after pop:", numbers);

// TODO: Use the shift method to remove the first element from the array and log the updated array
numbers.shift();
console.log("Array after shift:", numbers);

// TODO: Use the unshift method to add a new element at the beginning of the array and log the updated array
numbers.unshift(0);
console.log("Array after unshift:", numbers);

console.log("=============================================");

// Activity 3: Array Methods (Intermediate)
console.log("=== Activity 3: Array Methods (Intermediate) ===");

// TODO: Use the map method to create a new array where each number is doubled and log the new array
const doubledNumbers = numbers.map((num) => num * 2);
console.log("Array after map (doubled):", doubledNumbers);

// TODO: Use the filter method to create a new array with only even numbers and log the new array
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log("Array after filter (even numbers):", evenNumbers);

// TODO: Use the reduce method to calculate the sum of all numbers in the array and log the result
const sum = numbers.reduce((total, num) => total + num, 0);
console.log("Sum of array elements using reduce:", sum);

console.log("=============================================");

// Activity 4: Array Iteration
console.log("=== Activity 4: Array Iteration ===");

// TODO: Use a for loop to iterate over the array and log each element to the console
console.log("Array elements using for loop:");
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// TODO: Use the forEach method to iterate over the array and log each element to the console
console.log("Array elements using forEach:");
numbers.forEach((num) => console.log(num));

console.log("=============================================");

// Activity 5: Multi Dimensional Array
console.log("=== Activity 5: Multi Dimensional Array ===");

// TODO: Create a 2D array (matrix) and log the entire array to the console
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log("2D Array (matrix):", matrix);

// TODO: Access and log a specific element from the 2D array
console.log("Element at [1][2]:", matrix[1][2]);

console.log("=============================================");
