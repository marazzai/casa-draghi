import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from "react";

interface MediaProps {
  /** etichetta-segnaposto (es. "Foto: il Campo Draghi") */
  label?: string;
  /** illustrazione SVG di sfondo */
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

/**
 * Cornice per un'immagine, con rivelazione a tendina (clip-path) quando
 * entra nel viewport. Oggi mostra un'illustrazione SVG come segnaposto:
 * per inserire una foto reale, aggiungi un <img> tra i children e mettilo
 * con position:absolute; inset:0; object-fit:cover.
 */
export default function Media({ label, children, className = "", style }: MediaProps) {
  const ref = useRef<HTMLDivElement | null>(null);
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
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.2 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className={`media ${visible ? "is-visible" : ""} ${className}`.trim()} style={style}>
      {children}
      {label && <span className="media__label">{label}</span>}
    </div>
  );
}
