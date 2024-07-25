import { describe, it, expect } from "vitest";
import { gotCharacter } from "../src/utils/gotCharacter";

describe("gotCharacter", () => {
  it("should return the correct name", () => {
    expect(gotCharacter.name).toBe("Jon Snow");
  });

  it("should return the correct title", () => {
    expect(gotCharacter.title).toBe("King in the North");
  });

  it("should greet correctly", () => {
    expect(gotCharacter.greet()).toBe(
      "HEllo, I am Jon Snow of house Stark, the King in the North",
    );
  });

  it("should fight correctly", () => {
    expect(gotCharacter.fight()).toBe("Jon Snow fights with valer");
  });
});
