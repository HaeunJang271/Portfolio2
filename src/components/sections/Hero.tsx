"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

import { CtaButton } from "@/components/shared/CtaButton";
import { Eyebrow } from "@/components/shared/Eyebrow";
import { GlassCard } from "@/components/shared/GlassCard";
import { brand } from "@/data/site";
import { easeOutExpo } from "@/lib/motion";

/**
 * Full-viewport hero with luxury photography and a floating glass card.
 */
export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.03, 1.08]);

  return (
    <section
      ref={ref}
      id="top"
      aria-label="히어로"
      className="relative h-[100dvh] min-h-[640px] overflow-hidden sm:min-h-[720px]"
    >
      <motion.div
        style={reduceMotion ? undefined : { y, scale }}
        className="absolute inset-0"
      >
        <Image
          src={brand.heroImage}
          alt={brand.heroImageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-black/40" aria-hidden />

      <div className="relative z-10 flex h-full items-center justify-center px-6 sm:px-8">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.12, ease: easeOutExpo }}
          className="w-full max-w-[560px]"
        >
          <GlassCard className="px-8 py-11 text-center sm:px-12 sm:py-14 md:px-16 md:py-16">
            <Eyebrow tone="onDark">{brand.tagline}</Eyebrow>
            <h1 className="text-display-md mt-7 text-white">
              {brand.heroHeadline[0]}
              <br />
              {brand.heroHeadline[1]}
            </h1>
            <p className="mx-auto mt-7 max-w-sm text-[15px] leading-[1.7] text-white/75">
              {brand.description}
            </p>
            <div className="mt-11 flex flex-col items-center justify-center gap-3 sm:mt-12 sm:flex-row sm:gap-4">
              <CtaButton href="#products">제품 보기</CtaButton>
              <CtaButton href="#consult" variant="ghost">
                무료 상담
              </CtaButton>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
