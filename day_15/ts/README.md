# Day 15: Understanding Closures

## Tasks/Activities

1. **Understanding Closures**

- _Task 1: Basic Closure_

  - `houseStark()`: Function that returns another function, where the inner function accesses a variable from the outer function's scope.
  - `messageFromStark()`: Function call to houseStark() that logs the result.

- _Task 2: Private Counter with Closures_

  - `createCounter()`: Function that creates a closure to maintain a private counter.
  - `Counter`: Interface defining methods to increment and get the current value of the counter.
  - `counter`: Instance of createCounter() to demonstrate counter increment and retrieval.

- _Task 3: Unique ID Generator_

  - `uniqueIdGenerator()`: Function that generates unique IDs using a closure to keep track of the last generated ID.
  - `generateId()`: Instance of uniqueIdGenerator() to demonstrate unique ID generation.

- _Task 4: Greeting Closure_

  - `greetHouseMember()`: Function that captures a user's name and returns a function to greet the user by name.
  - `greetNed()`: Instance of greetHouseMember('Ned') to demonstrate personalized greeting.

- _Task 5: Logging Indices in a Loop_

  - `createLoggers()`: Function that creates an array of functions. Each function logs its index when called, using a closure to ensure correct logging.

- _Task 6: Item Collection Management_

  - `ItemCollection`: Interface defining methods to add, remove, and list items.
  - `houseStarkCollection`: Closure-based module for managing a collection of items, implementing methods to add, remove, and list items.

- _Task 7: Memoizing Function Results_

  - `memoize`(fn): Function that memoizes the results of another function using a closure to store previous computations.

- _Task 8: Memoized Factorial Function_

  - `factorial()`: Memoized version of a function to calculate the factorial of a number.
