import { describe, expect, it } from "vitest";

import {
  calculateTotalPrice,
  clampQuantity,
  formatPrice,
} from "@/lib/pricing";

describe("pricing helpers", () => {
  it("formats KRW amounts", () => {
    expect(formatPrice(1_290_000)).toBe("1,290,000원");
  });

  it("multiplies unit price by quantity", () => {
    expect(calculateTotalPrice(890_000, 2)).toBe(1_780_000);
  });

  it("rejects invalid quantity or negative unit price", () => {
    expect(() => calculateTotalPrice(100, 0)).toThrow();
    expect(() => calculateTotalPrice(-1, 1)).toThrow();
  });

  it("clamps quantity to the allowed range", () => {
    expect(clampQuantity(0)).toBe(1);
    expect(clampQuantity(12)).toBe(10);
    expect(clampQuantity(3)).toBe(3);
  });
});
