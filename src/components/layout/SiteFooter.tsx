import { ConsultButtons } from "@/components/layout/ConsultButtons";
import { Container } from "@/components/shared/Container";
import { Separator } from "@/components/ui/separator";
import { brand } from "@/data/site";

/**
 * Minimal footer with brand wordmark and consultation actions.
 */
export function SiteFooter() {
  return (
    <footer className="bg-white">
      <Container className="py-16 md:py-20">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm tracking-[0.36em]">{brand.name}</p>
            <p className="text-caption mt-5 max-w-xs">
              더 나은 잠을 설계하는 프리미엄 슬립 브랜드.
            </p>
          </div>
          <ConsultButtons />
        </div>
        <Separator className="my-10 bg-sand/70" />
        <p className="text-xs tracking-wide text-foreground/40">
          © {new Date().getFullYear()} {brand.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
