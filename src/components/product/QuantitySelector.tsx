"use client";

import { Minus, Plus } from "lucide-react";

import { clampQuantity } from "@/lib/pricing";
import { cn } from "@/lib/utils";

type QuantitySelectorProps = {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
};

/**
 * Compact quantity control with decrement and increment actions.
 */
export function QuantitySelector({
  value,
  onChange,
  min = 1,
  max = 10,
}: QuantitySelectorProps) {
  /**
   * Updates quantity after clamping to the allowed range.
   */
  function setQuantity(next: number): void {
    onChange(clampQuantity(next, min, max));
  }

  return (
    <div
      className="inline-flex items-center rounded-full bg-white shadow-soft"
      role="group"
      aria-label="수량 선택"
    >
      <button
        type="button"
        aria-label="수량 감소"
        disabled={value <= min}
        onClick={() => setQuantity(value - 1)}
        className={cn(
          "focus-ring flex size-12 items-center justify-center rounded-full text-foreground/70 transition-opacity",
          value <= min && "opacity-25",
        )}
      >
        <Minus className="size-3.5" aria-hidden />
      </button>
      <span
        className="min-w-10 text-center text-[15px] font-light tracking-wide"
        role="spinbutton"
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "ArrowUp" || event.key === "ArrowRight") {
            event.preventDefault();
            setQuantity(value + 1);
          }
          if (event.key === "ArrowDown" || event.key === "ArrowLeft") {
            event.preventDefault();
            setQuantity(value - 1);
          }
        }}
      >
        {value}
      </span>
      <button
        type="button"
        aria-label="수량 증가"
        disabled={value >= max}
        onClick={() => setQuantity(value + 1)}
        className={cn(
          "focus-ring flex size-12 items-center justify-center rounded-full text-foreground/70 transition-opacity",
          value >= max && "opacity-25",
        )}
      >
        <Plus className="size-3.5" aria-hidden />
      </button>
    </div>
  );
}
