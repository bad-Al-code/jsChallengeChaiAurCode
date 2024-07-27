function houseStark() {
  const winterfell = "Winter is Coming";

  return function () {
    return winterfell;
  };
}

const messageFromStark = houseStark();
console.log(messageFromStark());

function createCounter() {
  let count = 0;

  return {
    increment() {
      count++;
    },
    getCurrentCount() {
      return count;
    },
  };
}

const counter = createCounter();
counter.increment();
counter.increment();
console.log(counter.getCurrentCount());

function uniqueIdGenerator() {
  let lastId = 0;

  return function () {
    lastId++;
    return `GOT-${lastId}`;
  };
}

const generateId = uniqueIdGenerator();
console.log(generateId());
console.log(generateId());

function greetHouseMember(name: string) {
  return function () {
    return `Hello, ${name} of House Stark!`;
  };
}

const greetNed = greetHouseMember("Ned");
console.log(greetNed());

function createLoggers() {
  const loggers: Array<() => void> = [];

  for (let i = 0; i < 5; i++) {
    loggers.push(
      (function (index) {
        return function () {
          console.log(index);
        };
      })(i),
    );
  }

  return loggers;
}

const loggers = createLoggers();
loggers[0]();
loggers[1]();
loggers[2]();

const houseStarkCollection = (function () {
  const items: string[] = [];

  return {
    addItem(item: string) {
      items.push(item);
    },
    removeItem(item: string) {
      const index = items.indexOf(item);
      if (index > -1) {
        items.splice(index, 1);
      }
    },
    listItems() {
      return items;
    },
  };
})();

houseStarkCollection.addItem("Ned Stark");
houseStarkCollection.addItem("Jon Snow");
console.log(houseStarkCollection.listItems());
houseStarkCollection.removeItem("Ned Stark");
console.log(houseStarkCollection.listItems());

function memoize(fn: Function) {
  const cache: { [key: string]: any } = {};

  return function (...args: any[]) {
    const key = JSON.stringify(args);
    if (cache[key] !== undefined) {
      return cache[key];
    } else {
      const result = fn(...args);
      cache[key] = result;
      return result;
    }
  };
}

const factorial = memoize(function (n: number): number {
  if (n <= 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
});

console.log(factorial(10));
console.log(factorial(8));
