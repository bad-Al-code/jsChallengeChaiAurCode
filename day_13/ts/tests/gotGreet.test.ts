import { describe, it, expect } from "vitest";
import greetCharacter from "../src/utils/gotGreet";

describe("greetCharacter", () => {
  it("should greet correctly", () => {
    expect(greetCharacter()).toBe(
      "Hello, I am Daenerys Targaryen, Mother of Dragons.",
    );
  });
});
