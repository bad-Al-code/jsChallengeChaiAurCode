import { describe, it, expect } from "vitest";
import * as gotDetails from "../src/utils/gotDetails";

describe("gotDetails", () => {
  it("should return correct character details", () => {
    expect(gotDetails.characterName).toBe("Tyrion Lannister");
    expect(gotDetails.characterTitle).toBe("Hand of the King");
    expect(gotDetails.characterHouse).toBe("Lannister");
  });

  it("should greet correctly", () => {
    expect(gotDetails.greet()).toBe(
      "Hello, I am Tyrion Lannister of House Lannister, the Hand of the King.",
    );
  });

  it("should drink wine correctly", () => {
    expect(gotDetails.drinkWine()).toBe(
      "Tyrion Lannister is enjoying a glass of wine.",
    );
  });
});
