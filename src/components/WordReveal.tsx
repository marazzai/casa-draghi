import { useEffect, useRef, useState, type ElementType } from "react";

interface WordRevealProps {
  text: string;
  as?: ElementType;
  className?: string;
  /** sottostringa da evidenziare in accento */
  accent?: string;
}

/**
 * Mostra un testo facendo "salire" le parole una dopo l'altra quando il
 * blocco entra nel viewport. L'eventuale `accent` viene colorato di rame.
 * Rispetta prefers-reduced-motion (CSS).
 */
export default function WordReveal({ text, as, className = "", accent }: WordRevealProps) {
  const Tag: ElementType = as ?? "h2";
  const ref = useRef<HTMLElement | null>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setOn(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setOn(true);
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.25 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const accentWords = accent ? accent.trim().split(/\s+/) : [];
  const words = text.split(/\s+/);
  // calcola da quale indice parte l'accento (match contiguo in coda o ovunque)
  let accentStart = -1;
  if (accentWords.length) {
    for (let i = 0; i + accentWords.length <= words.length; i++) {
      if (accentWords.every((w, k) => words[i + k].replace(/[.,]/g, "") === w.replace(/[.,]/g, ""))) {
        accentStart = i;
        break;
      }
    }
  }

  return (
    <Tag ref={ref} className={`wordreveal ${on ? "is-on" : ""} ${className}`.trim()}>
      {words.map((w, i) => {
        const isAccent = accentStart >= 0 && i >= accentStart && i < accentStart + accentWords.length;
        return (
          <span className="wordreveal__w" key={i} style={{ transitionDelay: `${i * 55}ms` }}>
            <span className={isAccent ? "accent" : undefined}>{w}</span>
            {i < words.length - 1 ? " " : ""}
          </span>
        );
      })}
    </Tag>
  );
}
