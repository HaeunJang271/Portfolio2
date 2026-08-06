"use client";

import { formatPrice } from "@/lib/pricing";
import { cn } from "@/lib/utils";
import type { ProductSize } from "@/types";

type ProductSizeTableProps = {
  sizes: ProductSize[];
  selectedSize: ProductSize["size"];
  onSelect: (size: ProductSize["size"]) => void;
  name?: string;
};

/**
 * Responsive size picker rendered as stacked selectable cards.
 */
export function ProductSizeTable({
  sizes,
  selectedSize,
  onSelect,
  name = "mattress-size",
}: ProductSizeTableProps) {
  return (
    <fieldset className="min-w-0 border-0 p-0">
      <legend className="sr-only">매트리스 사이즈 선택</legend>

      <div
        className="flex flex-col gap-2.5"
        role="radiogroup"
        aria-label="사이즈"
      >
        {sizes.map((row) => {
          const selected = row.size === selectedSize;
          const inputId = `${name}-${row.size.replace(/\s+/g, "-").toLowerCase()}`;

          return (
            <label
              key={row.size}
              htmlFor={inputId}
              className={cn(
                "surface-panel flex min-w-0 cursor-pointer items-center gap-3 px-4 py-4 transition-colors sm:gap-4 sm:px-5",
                selected && "ring-1 ring-primary/40",
              )}
            >
              <input
                id={inputId}
                type="radio"
                name={name}
                value={row.size}
                checked={selected}
                onChange={() => onSelect(row.size)}
                className="size-4 shrink-0 accent-primary"
              />

              <span className="grid min-w-0 flex-1 gap-1 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:gap-4">
                <span className="min-w-0">
                  <span className="block text-[15px] font-light text-foreground">
                    {row.size}
                  </span>
                  <span className="mt-1 block text-[12px] tracking-wide break-all text-foreground/50 sm:text-[13px]">
                    <span className="text-foreground/35">가로*세로*높이 </span>
                    {row.dimension}
                  </span>
                </span>
                <span className="text-[14px] whitespace-nowrap text-foreground sm:text-right sm:text-[15px]">
                  {formatPrice(row.price)}
                </span>
              </span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
