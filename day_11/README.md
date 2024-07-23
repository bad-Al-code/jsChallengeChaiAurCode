# Day 11: Working with Promises and Async/Await

## Tasks/Activities

### Activity 1: Basic Promise Handling

- **Resolved Promise**: Created a `resolvePromise` that resolves with the value "resolve" after 2 seconds. Logged the resolved value to the console.
- **Rejected Promise**: Created a `rejectPromise` that rejects with the value "reject" after 2 seconds. Handled the rejection and logged the error to the console.

### Activity 2: Fetching Data with Promises

- **Fetch Data Function**: Implemented `fetchDataFromUrl(url)` function that fetches data from a given URL and returns a Promise. Handled both successful data fetching and errors.

- **Data Processing**: Used the `fetchDataFromUrl` function to fetch data from `apiURLs[0]`. Sequentially processed the fetched data with delays and logged the results at each step.

### Activity 3: Handling Promises with Async/Await

- **Async Function for Resolved Promise**: Implemented `logPromiseResolution(promise)` that uses `async/await` to handle a resolved promise and logs the result.
- **Async Function for Rejected Promise**: Implemented `handleRejectedPromise(promise)` that uses `async/await` to handle a rejected promise and logs the error message.

### Activity 4: Fetching and Logging API Responses

- **Fetch API with Promises**: Implemented `logApiResponseWithPromises()` function that fetches data from `apiURLs[0]` using Promises and logs the response data or error.

- **Fetch API with Async/Await**: Implemented `fetchAndLogApiResponseWithAsync()` function that fetches data from `apiURLs[0]` using `async/await` and logs the response data or error.

### Activity 5: Handling Multiple Promises

- **Promise.all**: Used `Promise.all` to fetch data from multiple URLs in `apiURLs`. Logged the responses from all URLs.

- **Promise.race**: Used `Promise.race` to fetch data from multiple URLs in `apiURLs` and logged the response from the first resolved promise.
