import { useEffect, useRef, useState } from "react";

/**
 * Conta verso il valore numerico contenuto in `value` quando entra nel
 * viewport. Gestisce prefissi/suffissi (es. "~40", "12.000 €", "2030").
 * Se il valore contiene un intervallo (es. "25–30", "3–5.000 €") o non è
 * numerico, viene mostrato statico senza animazione.
 */
export default function Counter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState<string>(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const hasRange = /[–\-\/]/.test(value.replace(/^\s*[~≥≤]/, ""));
    const match = value.match(/^([^\d]*)([\d.]+)(.*)$/);
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (hasRange || !match || reduce) {
      setDisplay(value);
      return;
    }

    const prefix = match[1];
    const numStr = match[2];
    const suffix = match[3];
    const target = parseInt(numStr.replace(/\./g, ""), 10);
    if (!Number.isFinite(target)) {
      setDisplay(value);
      return;
    }

    // separatore migliaia solo se già presente nell'originale (es. 12.000).
    // Così gli anni come "2030" non diventano "2.030".
    const useGrouping = numStr.includes(".");
    const fmt = (n: number) =>
      prefix + n.toLocaleString(useGrouping ? "it-IT" : "en-US", { useGrouping }) + suffix;

    setDisplay(fmt(0));

    let started = false;
    const run = () => {
      if (started) return;
      started = true;
      const duration = 1300;
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
        setDisplay(fmt(Math.round(target * eased)));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            run();
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [value]);

  return <span ref={ref}>{display}</span>;
}
