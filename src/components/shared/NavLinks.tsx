"use client";

import { cn } from "@/lib/utils";
import type { NavItem } from "@/types";

type NavLinksProps = {
  items: NavItem[];
  className?: string;
  linkClassName?: string;
  onNavigate?: () => void;
  "aria-label"?: string;
};

/**
 * Shared navigation link list for header, footer, and mobile drawer.
 */
export function NavLinks({
  items,
  className,
  linkClassName,
  onNavigate,
  "aria-label": ariaLabel = "메뉴",
}: NavLinksProps) {
  return (
    <nav className={className} aria-label={ariaLabel}>
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          onClick={onNavigate}
          className={cn(
            "text-[11px] tracking-[0.22em] text-foreground/50 transition-opacity duration-300 hover:opacity-70 focus-ring",
            linkClassName,
          )}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
