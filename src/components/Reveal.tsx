import { useEffect, useRef, useState, type ReactNode, type ElementType } from "react";

interface RevealProps {
  children: ReactNode;
  /** indice per lo stagger (0-4) */
  delay?: number;
  /** tag HTML da renderizzare (default div) */
  as?: ElementType;
  className?: string;
}

/**
 * Avvolge un contenuto e lo anima in ingresso quando entra nel viewport
 * (Intersection Observer). Rispetta prefers-reduced-motion via CSS.
 */
export default function Reveal({ children, delay = 0, as, className = "" }: RevealProps) {
  const Tag: ElementType = as ?? "div";
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`.trim()}
      data-delay={delay || undefined}
    >
      {children}
    </Tag>
  );
}
