import type { NavItem } from "@/types";

export const brand = {
  name: "AURA",
  tagline: "DESIGN A BETTER SLEEP",
  description:
    "압력은 내려놓고, 온도는 고요하게. AURA가 제안하는 프리미엄 슬립 경험입니다.",
  heroHeadline: ["더 깊은 휴식은", "하루를 다시 설계합니다"],
  heroImage:
    "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=2400&q=80",
  heroImageAlt: "따뜻한 조명 아래 정돈된 럭셔리 침실",
  phone: "1588-0240",
  phoneHref: "tel:15880240",
  kakaoHref: "https://open.kakao.com/o/aura-sleep",
} as const;

export const navItems: NavItem[] = [
  { href: "/#products", label: "PRODUCTS" },
  { href: "/#consult", label: "CONSULT" },
];

/**
 * Finds a navigation item by hash href.
 */
export function getNavItemByHref(href: string): NavItem | undefined {
  return navItems.find((item) => item.href === href);
}
