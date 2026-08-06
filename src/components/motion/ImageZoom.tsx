import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type ImageZoomProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Clips media and applies a subtle zoom on hover.
 */
export function ImageZoom({ children, className }: ImageZoomProps) {
  return (
    <div
      className={cn(
        "group overflow-hidden rounded-[var(--radius-lg)]",
        className,
      )}
    >
      <div className="image-zoom h-full w-full motion-reduce:transform-none">
        {children}
      </div>
    </div>
  );
}
