const apiURLs = [
  "https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10",
  "https://api.freeapi.app/api/v1/public/randomusers?page=2&limit=10",
  "https://api.freeapi.app/api/v1/public/randomusers?page=3&limit=10",
];

const resolvePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolve");
  }, 2000);
});

const rejectPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("reject");
  }, 2000);
});

resolvePromise.then((value) => {
  console.log(value);
});

rejectPromise.catch((error) => {
  console.error(error);
});

function fetchDataFromUrl(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
}

fetchDataFromUrl(apiURLs[0])
  .then((data) => {
    console.log("First log: Data fetched successfully");
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Second log: Processed data after 1 second");
        resolve(data);
      }, 1000);
    });
  })
  .then((data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Third log: Processed data after 2 seconds");
        resolve(data);
      }, 2000);
    });
  })
  .then((data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Fourth log: Processed data after 3 seconds");
        console.log("Final data:", data);
        resolve();
      }, 3000);
    });
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

async function logPromiseResolution(promise) {
  try {
    const result = await promise;
    console.log("Resolved value: ", result);
  } catch (error) {
    console.error("Error: ", error);
  }
}

async function handleRejectedPromise(promise) {
  try {
    const result = await promise;
    console.log("Resolved value: ", result);
  } catch (error) {
    console.error("Error: ", error.message);
  }
}

const sampleResolvedPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is the resolved value!");
  }, 2000);
});

const sampleRejectedPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("This is rejection error message"));
  }, 2000);
});

logPromiseResolution(sampleResolvedPromise);
handleRejectedPromise(sampleRejectedPromise);

function logApiResponseWithPromises() {
  fetch(apiURLs[0])
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Response data:", data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

async function fetchAndLogApiResponseWithAsync() {
  try {
    const response = await fetch(apiURLs[0]);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    console.log("Response data:", data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchAndLogApiResponseWithAsync();

function fetchAllDataFromUrls(url) {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });
}

const fetchPromisesAll = apiURLs.map((url) => fetchDataFromUrl(url));

Promise.all(fetchPromisesAll)
  .then((responses) => {
    console.log("All data fetched successfully:");
    responses.forEach((data, index) => {
      console.log(`Response data from URL ${index + 1}:`, data);
    });
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

const fetchPromisesRace = apiURLs.map((url) => fetchDataFromUrl(url));

Promise.race(fetchPromisesRace)
  .then((response) => {
    console.log("First data fetched successfully:", response);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
