import { describe, it, expect } from "vitest";
import { groupAnagrams } from "../src/index";

describe("groupAnagrams", () => {
  it("should group anagrams together", () => {
    expect(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])).toEqual([
      ["eat", "tea", "ate"],
      ["tan", "nat"],
      ["bat"],
    ]);
    expect(groupAnagrams([""])).toEqual([[""]]);
    expect(groupAnagrams(["a"])).toEqual([["a"]]);
    expect(
      groupAnagrams(["cider", "cried", "dicer", "repaid", "diaper", "paired"]),
    ).toEqual([
      ["cider", "cried", "dicer"],
      ["repaid", "diaper", "paired"],
    ]);
    expect(
      groupAnagrams([
        "listen",
        "silent",
        "enlist",
        "inlets",
        "google",
        "gogole",
      ]),
    ).toEqual([
      ["listen", "silent", "enlist", "inlets"],
      ["google", "gogole"],
    ]);
  });
});
