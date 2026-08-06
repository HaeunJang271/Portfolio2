import { describe, expect, it } from "vitest";

import { easeOutExpo, prefersReducedMotion } from "@/lib/motion";

describe("motion helpers", () => {
  it("exports a stable easing curve", () => {
    expect(easeOutExpo).toEqual([0.22, 1, 0.36, 1]);
  });

  it("returns false for reduced motion on the server", () => {
    expect(prefersReducedMotion()).toBe(false);
  });
});
