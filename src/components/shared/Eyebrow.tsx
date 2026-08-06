import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type EyebrowProps = {
  children: ReactNode;
  className?: string;
  tone?: "default" | "onDark";
};

/**
 * Consistent uppercase label used above section and product titles.
 */
export function Eyebrow({ children, className, tone = "default" }: EyebrowProps) {
  return (
    <p
      className={cn(
        "text-eyebrow",
        tone === "onDark" && "text-white/70",
        className,
      )}
    >
      {children}
    </p>
  );
}
