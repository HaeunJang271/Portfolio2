import { afterEach, describe, expect, it, vi } from "vitest";

import { log, logger } from "@/lib/logger";

describe("logger", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("writes info entries through console.info", () => {
    const info = vi.spyOn(console, "info").mockImplementation(() => undefined);

    log("info", "boot", { module: "app" });

    expect(info).toHaveBeenCalledTimes(1);
    expect(info.mock.calls[0]?.[0]).toMatchObject({
      level: "info",
      message: "boot",
      module: "app",
    });
  });

  it("exposes convenience methods for warn and error", () => {
    const warn = vi.spyOn(console, "warn").mockImplementation(() => undefined);
    const error = vi.spyOn(console, "error").mockImplementation(() => undefined);

    logger.warn("soft fail");
    logger.error("hard fail");

    expect(warn).toHaveBeenCalled();
    expect(error).toHaveBeenCalled();
  });
});
