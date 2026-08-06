import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SurfaceProps = {
  children: ReactNode;
  className?: string;
  variant?: "panel" | "soft";
};

/**
 * Shared elevated surface used for cards and form panels.
 */
export function Surface({
  children,
  className,
  variant = "panel",
}: SurfaceProps) {
  return (
    <div
      className={cn(
        variant === "panel" ? "surface-panel" : "surface-soft",
        className,
      )}
    >
      {children}
    </div>
  );
}
