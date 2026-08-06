"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

import { cn } from "@/lib/utils";

type ParallaxImageProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
};

/**
 * Editorial photograph with soft parallax and subtle hover zoom.
 */
export function ParallaxImage({
  src,
  alt,
  className,
  imageClassName,
  priority = false,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  return (
    <div
      ref={ref}
      className={cn(
        "group overflow-hidden rounded-[var(--radius-lg)] shadow-soft",
        className,
      )}
    >
      <motion.div
        style={reduceMotion ? undefined : { y }}
        className="relative h-full min-h-[320px] w-full"
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 50vw"
          className={cn(
            "object-cover motion-reduce:transform-none",
            !reduceMotion && "image-zoom",
            imageClassName,
          )}
        />
      </motion.div>
    </div>
  );
}
