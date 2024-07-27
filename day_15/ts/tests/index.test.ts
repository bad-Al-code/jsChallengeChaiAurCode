import { describe, it, expect } from "vitest";
import {
  houseStark,
  createCounter,
  uniqueIdGenerator,
  greetHouseMember,
  createLoggers,
  houseStarkCollection,
  memoize,
  factorial,
} from "../index";

describe("houseStark", () => {
  it('should return "Winter is Coming"', () => {
    const messageFromStark = houseStark();
    expect(messageFromStark()).toBe("Winter is Coming");
  });
});

describe("createCounter", () => {
  it("should increment and get current count correctly", () => {
    const counter = createCounter();
    counter.increment();
    counter.increment();
    expect(counter.getCurrentCount()).toBe(2);
  });
});

describe("uniqueIdGenerator", () => {
  it("should generate unique IDs with GOT prefix", () => {
    const generateId = uniqueIdGenerator();
    expect(generateId()).toBe("GOT-1");
    expect(generateId()).toBe("GOT-2");
  });
});

describe("greetHouseMember", () => {
  it("should return a greeting with the member's name", () => {
    const greetNed = greetHouseMember("Ned");
    expect(greetNed()).toBe("Hello, Ned of House Stark!");
  });
});

describe("createLoggers", () => {
  it("should create loggers that log their respective indices", () => {
    const loggers = createLoggers();
    const originalLog = console.log;
    const logs: number[] = [];
    console.log = (message: any) => logs.push(message);

    loggers[0]();
    loggers[1]();
    loggers[2]();

    console.log = originalLog;
    expect(logs).toEqual([0, 1, 2]);
  });
});

describe("houseStarkCollection", () => {
  it("should add, remove, and list items correctly", () => {
    houseStarkCollection.removeItem("Ned Stark");
    houseStarkCollection.removeItem("Jon Snow");

    houseStarkCollection.addItem("Ned Stark");
    houseStarkCollection.addItem("Jon Snow");
    console.log(houseStarkCollection.listItems());
    expect(houseStarkCollection.listItems()).toEqual(["Ned Stark", "Jon Snow"]);

    houseStarkCollection.removeItem("Ned Stark");
    expect(houseStarkCollection.listItems()).toEqual(["Jon Snow"]);
  });
});

describe("memoize", () => {
  it("should cache results of the factorial function", () => {
    const factorial = memoize((n: number): number => {
      if (n <= 1) return 1;
      return n * factorial(n - 1);
    });

    expect(factorial(5)).toBe(120);
    expect(factorial(6)).toBe(720);
  });
});

describe("factorial", () => {
  it("should return correct factorial results with memoization", () => {
    expect(factorial(10)).toBe(3628800);
    expect(factorial(8)).toBe(40320);
  });
});
