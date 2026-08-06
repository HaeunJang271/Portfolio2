"use client";

import Image from "next/image";
import { useState } from "react";

import { cn } from "@/lib/utils";
import type { ProductPhoto } from "@/types";

type ProductGalleryProps = {
  photos: ProductPhoto[];
  productName: string;
};

/**
 * Large product gallery with a selectable thumbnail strip.
 */
export function ProductGallery({ photos, productName }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = photos[activeIndex] ?? photos[0];

  if (!active) {
    return null;
  }

  return (
    <div className="space-y-5">
      <div className="group relative aspect-[4/5] overflow-hidden rounded-[var(--radius-xl)] bg-white shadow-soft md:aspect-[5/6]">
        <Image
          key={active.src}
          src={active.src}
          alt={active.alt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover motion-reduce:transform-none image-zoom"
        />
      </div>

      <div
        className="flex gap-3 overflow-x-auto pb-1"
        role="group"
        aria-label={`${productName} 이미지 선택`}
      >
        {photos.map((photo, index) => {
          const selected = index === activeIndex;

          return (
            <button
              key={photo.src}
              type="button"
              aria-pressed={selected}
              aria-label={`${productName} 이미지 ${index + 1}`}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "group focus-ring relative h-[4.25rem] w-[4.25rem] shrink-0 overflow-hidden rounded-[var(--radius-md)] transition-opacity duration-300 md:h-24 md:w-24",
                selected ? "opacity-100 shadow-soft" : "opacity-55 hover:opacity-100",
              )}
            >
              <Image
                src={photo.src}
                alt=""
                fill
                sizes="96px"
                className="object-cover motion-reduce:transform-none image-zoom"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
