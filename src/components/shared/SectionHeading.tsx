import type { ReactNode } from "react";

import { Eyebrow } from "@/components/shared/Eyebrow";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

/**
 * Shared section title block with wide tracking and restrained typography.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? <Eyebrow className="mb-5 md:mb-6">{eyebrow}</Eyebrow> : null}
      <h2 className="text-display-xl text-foreground">{title}</h2>
      {description ? (
        <p className="text-body-lg mt-7 max-w-xl md:mt-8">{description}</p>
      ) : null}
    </div>
  );
}
