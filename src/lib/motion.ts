/** Shared easing curve for quiet luxury motion. */
export const easeOutExpo: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Default fade-in transition used across section reveals. */
export const fadeTransition = {
  duration: 0.85,
  ease: easeOutExpo,
} as const;

/**
 * Returns true when the user prefers reduced motion.
 */
export function prefersReducedMotion(): boolean {
  if (
    typeof window === "undefined" ||
    typeof window.matchMedia !== "function"
  ) {
    return false;
  }

  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
