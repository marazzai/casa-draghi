import { useEffect, useRef, type RefObject } from "react";

/**
 * Applica un leggero effetto parallasse verticale all'elemento mentre si
 * scrolla. Scrive direttamente su `transform` (niente re-render) per fluidità.
 * Rispetta prefers-reduced-motion.
 *
 * @param speed quanto si muove rispetto allo scroll (0.1 = sottile, 0.4 = marcato)
 */
export function useParallax<T extends HTMLElement = HTMLDivElement>(
  speed = 0.18,
): RefObject<T | null> {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      typeof window === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const center = rect.top + rect.height / 2 - window.innerHeight / 2;
      el.style.transform = `translate3d(0, ${(-center * speed).toFixed(1)}px, 0)`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [speed]);

  return ref;
}
