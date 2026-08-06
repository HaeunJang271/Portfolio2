import { act, renderHook } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { useScrolled } from "@/hooks/useScrolled";

describe("useScrolled", () => {
  beforeEach(() => {
    vi.stubGlobal("requestAnimationFrame", (callback: FrameRequestCallback) => {
      callback(0);
      return 1;
    });
    vi.stubGlobal("cancelAnimationFrame", () => undefined);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    Object.defineProperty(window, "scrollY", {
      configurable: true,
      value: 0,
    });
  });

  it("starts as false and becomes true past the threshold", () => {
    Object.defineProperty(window, "scrollY", {
      configurable: true,
      value: 0,
    });

    const { result } = renderHook(() => useScrolled(40));
    expect(result.current).toBe(false);

    act(() => {
      Object.defineProperty(window, "scrollY", {
        configurable: true,
        value: 80,
      });
      window.dispatchEvent(new Event("scroll"));
    });

    expect(result.current).toBe(true);
  });
});
