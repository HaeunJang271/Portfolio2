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
 * Selectable size table with W*D*H dimensions and unit price columns.
 */
export function ProductSizeTable({
  sizes,
  selectedSize,
  onSelect,
  name = "mattress-size",
}: ProductSizeTableProps) {
  return (
    <fieldset className="surface-panel overflow-hidden border-0 p-0">
      <legend className="sr-only">매트리스 사이즈 선택</legend>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[320px] text-left text-sm">
          <thead className="text-eyebrow">
            <tr>
              <th scope="col" className="px-4 py-4 font-normal whitespace-nowrap sm:px-6">
                Size
              </th>
              <th scope="col" className="px-4 py-4 font-normal whitespace-nowrap sm:px-6">
                가로*세로*높이
              </th>
              <th
                scope="col"
                className="px-4 py-4 text-right font-normal whitespace-nowrap sm:px-6"
              >
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            {sizes.map((row) => {
              const selected = row.size === selectedSize;
              const inputId = `${name}-${row.size.replace(/\s+/g, "-").toLowerCase()}`;

              return (
                <tr
                  key={row.size}
                  className={cn(
                    "border-t border-sand/60 transition-colors duration-300",
                    selected ? "bg-cream" : "hover:bg-cream/50",
                  )}
                >
                  <td className="px-4 py-4 sm:px-6">
                    <label
                      htmlFor={inputId}
                      className="flex cursor-pointer items-center gap-2.5 font-light text-foreground sm:gap-3"
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
                      <span className="whitespace-nowrap">{row.size}</span>
                    </label>
                  </td>
                  <td className="px-4 py-4 font-mono text-[13px] tracking-wide text-foreground/55 sm:px-6">
                    <label htmlFor={inputId} className="cursor-pointer whitespace-nowrap">
                      {row.dimension}
                    </label>
                  </td>
                  <td className="px-4 py-4 text-right text-foreground sm:px-6">
                    <label htmlFor={inputId} className="cursor-pointer whitespace-nowrap">
                      {formatPrice(row.price)}
                    </label>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </fieldset>
  );
}
