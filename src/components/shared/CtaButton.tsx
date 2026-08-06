"use client";

import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type CtaButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "outline";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  external?: boolean;
  onClick?: () => void;
  "aria-label"?: string;
};

const baseClass =
  "inline-flex min-h-12 min-w-[156px] items-center justify-center rounded-full px-8 text-[13px] tracking-[0.03em] transition-opacity duration-300 focus-ring disabled:pointer-events-none disabled:opacity-45";

/**
 * Returns brand classes for a CTA visual variant.
 */
function variantClass(variant: CtaButtonProps["variant"]): string {
  if (variant === "ghost") {
    return "border border-white/55 bg-white/10 text-white backdrop-blur-sm hover:opacity-85";
  }

  if (variant === "outline") {
    return "border border-foreground/12 bg-white text-foreground hover:opacity-85";
  }

  return "bg-primary text-white hover:opacity-88";
}

/**
 * Apple-like CTA used for links and form submit actions.
 */
export function CtaButton({
  href,
  children,
  variant = "primary",
  className,
  type = "button",
  disabled = false,
  external = false,
  onClick,
  "aria-label": ariaLabel,
}: CtaButtonProps) {
  const classes = cn(baseClass, variantClass(variant), className);

  if (href) {
    if (href.startsWith("/") && !external) {
      return (
        <Link
          href={href}
          onClick={onClick}
          aria-label={ariaLabel}
          className={classes}
        >
          {children}
        </Link>
      );
    }

    return (
      <a
        href={href}
        onClick={onClick}
        aria-label={ariaLabel}
        className={classes}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
      className={classes}
    >
      {children}
    </button>
  );
}
