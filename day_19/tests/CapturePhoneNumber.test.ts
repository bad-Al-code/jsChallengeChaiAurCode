import { describe, it, expect } from "vitest";
import { capturePhoneNumberParts } from "../src/index";

describe("capturePhoneNumberParts", () => {
  it("should capture area code, central office code, and line number from a valid phone number", () => {
    const phoneNumber = "(123) 456-7890";
    const result = capturePhoneNumberParts(phoneNumber);
    expect(result).toEqual({
      areaCode: "123",
      centralOfficeCode: "456",
      lineNumber: "7890",
    });
  });

  it("should return null if the phone number does not match the expected format", () => {
    const phoneNumber = "123-456-7890";
    const result = capturePhoneNumberParts(phoneNumber);
    expect(result).toBeNull();
  });

  it("should handle different valid phone numbers", () => {
    const phoneNumber = "(987) 654-3210";
    const result = capturePhoneNumberParts(phoneNumber);
    expect(result).toEqual({
      areaCode: "987",
      centralOfficeCode: "654",
      lineNumber: "3210",
    });
  });
});
