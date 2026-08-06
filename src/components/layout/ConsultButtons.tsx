import { Phone } from "lucide-react";

import { brand } from "@/data/site";
import { cn } from "@/lib/utils";

type ConsultButtonsProps = {
  className?: string;
};

/**
 * KakaoTalk speech-bubble mark used on the consult CTA.
 */
function KakaoIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={cn("size-5", className)}
      fill="currentColor"
    >
      <path d="M12 3C6.925 3 2.75 6.582 2.75 10.95c0 2.79 1.84 5.24 4.61 6.64-.15.54-.96 3.45-1 3.64 0 0-.02.18.1.26.12.08.26.02.26.02.34-.05 3.95-2.61 4.57-3.04.55.08 1.12.12 1.71.12 5.075 0 9.25-3.582 9.25-7.95S17.075 3 12 3Z" />
    </svg>
  );
}

/**
 * Footer consultation actions for KakaoTalk and phone.
 */
export function ConsultButtons({ className }: ConsultButtonsProps) {
  return (
    <div
      id="consult"
      className={cn(
        "flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center",
        className,
      )}
    >
      <a
        href={brand.kakaoHref}
        target="_blank"
        rel="noopener noreferrer"
        className="focus-ring inline-flex h-12 items-center justify-center gap-2.5 rounded-full border border-foreground/12 bg-white px-6 text-[13px] tracking-[0.03em] text-foreground transition-opacity hover:opacity-85"
      >
        <KakaoIcon />
        카카오톡 상담
      </a>
      <a
        href={brand.phoneHref}
        aria-label={`전화 상담 ${brand.phone}`}
        className="focus-ring inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-primary px-6 text-[13px] tracking-[0.03em] text-white transition-opacity hover:opacity-88"
      >
        <Phone className="size-4" aria-hidden />
        전화 상담
      </a>
    </div>
  );
}
