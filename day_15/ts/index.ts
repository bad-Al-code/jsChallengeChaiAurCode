export function houseStark(): () => string {
  const winterfell: string = "Winter is Coming";

  return function (): string {
    return winterfell;
  };
}

const messageFromStark = houseStark();
console.log(messageFromStark());

export interface Counter {
  increment(): void;
  getCurrentCount(): number;
}

export function createCounter(): Counter {
  let count: number = 0;

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

export function uniqueIdGenerator(): () => string {
  let lastId: number = 0;

  return function (): string {
    lastId++;
    return `GOT-${lastId}`;
  };
}

const generateId = uniqueIdGenerator();
console.log(generateId());
console.log(generateId());

export function greetHouseMember(name: string): () => string {
  return function (): string {
    return `Hello, ${name} of House Stark!`;
  };
}

const greetNed = greetHouseMember("Ned");
console.log(greetNed());

export function createLoggers(): Array<() => void> {
  const loggers: Array<() => void> = [];

  for (let i = 0; i < 5; i++) {
    loggers.push(
      (function (index: number) {
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

export interface ItemCollection {
  addItem(item: string): void;
  removeItem(item: string): void;
  listItems(): ReadonlyArray<string>;
}

export const houseStarkCollection: ItemCollection = (function () {
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

export function memoize<T extends (...args: any[]) => any>(fn: T): T {
  const cache: { [key: string]: any } = {};

  return function (...args: Parameters<T>): ReturnType<T> {
    const key = JSON.stringify(args);
    if (cache[key] !== undefined) {
      return cache[key];
    } else {
      const result = fn(...args);
      cache[key] = result;
      return result;
    }
  } as T;
}

export const factorial = memoize(function (n: number): number {
  if (n <= 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
});

console.log(factorial(10));
console.log(factorial(8));
