"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { MobileNav } from "@/components/layout/MobileNav";
import { Container } from "@/components/shared/Container";
import { NavLinks } from "@/components/shared/NavLinks";
import { brand, navItems } from "@/data/site";
import { useScrolled } from "@/hooks/useScrolled";
import { easeOutExpo } from "@/lib/motion";
import { cn } from "@/lib/utils";

/**
 * Fixed transparent navbar that becomes a white glass bar after scroll.
 */
export function SiteHeader() {
  const scrolled = useScrolled(40);
  const pathname = usePathname();
  const solid = scrolled || pathname.startsWith("/products");

  return (
    <motion.header
      initial={false}
      animate={{
        backgroundColor: solid
          ? "rgba(255,255,255,0.94)"
          : "rgba(255,255,255,0)",
        boxShadow: solid
          ? "0 8px 24px rgba(43,43,43,0.04)"
          : "0 0 0 rgba(43,43,43,0)",
      }}
      transition={{ duration: 0.35, ease: easeOutExpo }}
      className={cn(
        "fixed top-0 right-0 left-0 z-50 backdrop-blur-md",
        solid ? "text-foreground" : "text-white",
      )}
    >
      <Container className="flex h-16 items-center justify-between md:h-[4.5rem]">
        <Link
          href="/"
          className="focus-ring text-sm tracking-[0.36em] transition-opacity hover:opacity-70"
        >
          {brand.name}
        </Link>
        <NavLinks
          items={navItems}
          aria-label="주요 메뉴"
          className="hidden items-center gap-10 md:flex"
          linkClassName={
            solid ? "text-foreground/50" : "text-white/75 hover:opacity-90"
          }
        />
        <MobileNav inverted={solid} />
      </Container>
    </motion.header>
  );
}
