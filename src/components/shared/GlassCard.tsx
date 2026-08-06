import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Floating glassmorphism panel with a soft radius and soft shadow.
 */
export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius-lg)] border border-white/20 bg-white/12 shadow-glass backdrop-blur-2xl",
        className,
      )}
    >
      {children}
    </div>
  );
}
