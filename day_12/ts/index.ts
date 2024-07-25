interface DivisionParams {
  numerator: number;
  denominator: number;
}

class CustomError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "CustomError";
  }
}

class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}

function isError(error: unknown): error is Error {
  return error instanceof Error;
}

function throwErrorFunction(): void {
  throw new Error("This is an intentional error");
}

function handleError(): void {
  try {
    throwErrorFunction();
  } catch (error) {
    if (isError(error)) {
      console.error("ERROR :: ", error.message);
    } else {
      console.error("ERROR :: ", "An unknown error occurred");
    }
  }
}

function divideNumbers({ numerator, denominator }: DivisionParams): number {
  if (denominator === 0) {
    throw new Error("Denominator cannot be zero");
  }
  return numerator / denominator;
}

function handleDivision({ numerator, denominator }: DivisionParams): void {
  try {
    const result = divideNumbers({ numerator, denominator });
    console.log(
      `The result of dividing ${numerator} by ${denominator} is ${result}`,
    );
  } catch (error) {
    if (isError(error)) {
      console.error("An error occurred: ", error.message);
    } else {
      console.error("An error occurred: ", "An unknown error occurred");
    }
  }
}

function executeWithTryCatchFinally(): void {
  try {
    console.log("Entering try block");
    throw new Error("This is an intentional error");
  } catch (error) {
    if (isError(error)) {
      console.log("Entering catch block");
      console.error("An error occurred: ", error.message);
    } else {
      console.error("An error occurred: ", "An unknown error occurred");
    }
  } finally {
    console.log("Entering finally block");
  }
}

function functionThatThrowsCustomError(): void {
  throw new CustomError("This is a custom error");
}

function handleCustomError(): void {
  try {
    functionThatThrowsCustomError();
  } catch (error) {
    if (isError(error)) {
      console.error("Caught a custom error: ", error.message);
    } else if (isError(error)) {
      console.error("Caught an unexpected error: ", error.message);
    } else {
      console.error(
        "Caught an unexpected error: ",
        "An unknown error occurred",
      );
    }
  } finally {
    console.log("Execution completed, finally block executed.");
  }
}

function validateInput(input: string): void {
  if (input.trim() === "") {
    throw new ValidationError("Input cannot be empty");
  }
  console.log("Input is valid");
}

function handleValidation(): void {
  const userInput = "";

  try {
    validateInput(userInput);
  } catch (error) {
    if (error instanceof ValidationError) {
      console.error("Validation error: ", error.message);
    } else if (error instanceof Error) {
      console.error("Unexpected error: ", error.message);
    } else {
      console.error("Unexpected error: ", "An unknown error occurred");
    }
  } finally {
    console.log("Validation attempt completed");
  }
}

function randomPromise(): Promise<string> {
  return new Promise((resolve, reject) => {
    const isSuccess = Math.random() > 0.5;

    setTimeout(() => {
      if (isSuccess) {
        resolve("Promise resolved successfully!");
      } else {
        reject(new Error("Promise rejected with an error"));
      }
    }, 1000);
  });
}

randomPromise()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    if (error instanceof Error) {
      console.error("An error occurred: ", error.message);
    } else {
      console.error("An error occurred: ", "An unknown error occurred");
    }
  });

function unpredictablePromise(): Promise<string> {
  return new Promise((resolve, reject) => {
    const isSuccess = Math.random() > 0.5;

    setTimeout(() => {
      if (isSuccess) {
        resolve("Promise resolved successfully!");
      } else {
        reject(new Error("Promise rejected with an error"));
      }
    }, 1000);
  });
}

async function handlePromise(): Promise<void> {
  try {
    const result = await unpredictablePromise();
    console.log(result);
  } catch (error) {
    if (isError(error)) {
      console.error("An error occurred: ", error.message);
    } else {
      console.error("An error occurred: ", "An unknown error occurred");
    }
  }
}

function fetchData(): void {
  fetch("https://invalid.url/endpoint")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Data received:", data);
    })
    .catch((error) => {
      if (isError(error)) {
        console.error("An error occurred:", error.message);
      } else {
        console.error("An error occurred:", "An unknown error occurred");
      }
    });
}

async function requestData(): Promise<void> {
  try {
    const response = await fetch("https://invalid.url/endpoint");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Data received:", data);
  } catch (error) {
    if (isError(error)) {
      console.error("An error occurred:", error.message);
    } else {
      console.error("An error occurred:", "An unknown error occurred");
    }
  }
}

handleError();
handleDivision({ numerator: 10, denominator: 0 });
executeWithTryCatchFinally();
handleCustomError();
handleValidation();
randomPromise()
  .then((result) => console.log(result))
  .catch((error) => {
    if (isError(error)) {
      console.error("An error occurred: ", error.message);
    } else {
      console.error("An error occurred: ", "An unknown error occurred");
    }
  });
handlePromise();
fetchData();
requestData();
