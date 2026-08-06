export type LogLevel = "info" | "warn" | "error";

export type LogContext = Record<string, unknown>;

/**
 * Writes a structured application log entry to the console.
 */
export function log(level: LogLevel, message: string, context: LogContext = {}): void {
  const entry = {
    timestamp: new Date().toISOString(),
    level,
    message,
    ...context,
  };

  if (level === "error") {
    console.error(entry);
    return;
  }

  if (level === "warn") {
    console.warn(entry);
    return;
  }

  console.info(entry);
}

export const logger = {
  /**
   * Logs an informational event.
   */
  info(message: string, context?: LogContext): void {
    log("info", message, context);
  },
  /**
   * Logs a recoverable warning.
   */
  warn(message: string, context?: LogContext): void {
    log("warn", message, context);
  },
  /**
   * Logs a failure that requires attention.
   */
  error(message: string, context?: LogContext): void {
    log("error", message, context);
  },
};
