"use client";

import { Menu } from "lucide-react";
import { useState } from "react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NavLinks } from "@/components/shared/NavLinks";
import { brand, navItems } from "@/data/site";
import { cn } from "@/lib/utils";

type MobileNavProps = {
  inverted: boolean;
};

/**
 * Mobile drawer navigation mirroring the desktop menu anchors.
 */
export function MobileNav({ inverted }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
        aria-expanded={open}
        className={cn(
          "focus-ring inline-flex size-11 items-center justify-center rounded-full md:hidden",
          inverted ? "text-foreground" : "text-white",
        )}
      >
        <Menu className="size-5" aria-hidden />
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[min(100%,20rem)] border-l-sand/60 bg-cream p-0 shadow-soft-lg"
      >
        <SheetHeader className="px-8 pt-8">
          <SheetTitle className="font-light tracking-[0.32em]">
            {brand.name}
          </SheetTitle>
        </SheetHeader>
        <NavLinks
          items={navItems}
          aria-label="모바일 메뉴"
          onNavigate={() => setOpen(false)}
          className="flex flex-col gap-8 px-8 pt-14"
          linkClassName="text-[13px] tracking-[0.24em] text-foreground/55"
        />
      </SheetContent>
    </Sheet>
  );
}
