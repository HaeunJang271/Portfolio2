import { describe, expect, it } from "vitest";

import {
  isContactFormValid,
  validateContactForm,
} from "@/lib/validations";

describe("validateContactForm", () => {
  it("returns field errors for empty values", () => {
    const errors = validateContactForm({
      name: " ",
      phone: "",
      message: "짧음",
    });

    expect(errors.name).toBeTruthy();
    expect(errors.phone).toBeTruthy();
    expect(errors.message).toBeTruthy();
    expect(isContactFormValid(errors)).toBe(false);
  });

  it("accepts a complete consultation payload", () => {
    const errors = validateContactForm({
      name: "김아우라",
      phone: "010-1234-5678",
      message: "퀸 사이즈 매트리스 상담을 원합니다.",
    });

    expect(errors).toEqual({});
    expect(isContactFormValid(errors)).toBe(true);
  });

  it("rejects malformed phone numbers", () => {
    const errors = validateContactForm({
      name: "김아우라",
      phone: "abc",
      message: "퀸 사이즈 매트리스 상담을 원합니다.",
    });

    expect(errors.phone).toBeTruthy();
  });
});
