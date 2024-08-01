import { describe, it, expect } from "vitest";
import { captureEmailParts } from "../src/index";

describe("captureEmailParts", () => {
  it("should capture the username and domain name from a valid email address", () => {
    const email = "arya.stark@winterfell.com";
    const result = captureEmailParts(email);
    expect(result).toEqual({
      username: "arya.stark",
      domainName: "winterfell.com",
    });
  });

  it("should return null if the email address does not match the expected format", () => {
    const email = "notAnEmail";
    const result = captureEmailParts(email);
    expect(result).toBeNull();
  });

  it("should handle different valid email addresses", () => {
    const email = "jon.snow@thewall.org";
    const result = captureEmailParts(email);
    expect(result).toEqual({ username: "jon.snow", domainName: "thewall.org" });
  });
});
