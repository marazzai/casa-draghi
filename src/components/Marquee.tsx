interface MarqueeProps {
  items: string[];
  /** scorre verso destra invece che verso sinistra */
  reverse?: boolean;
  /** durata animazione in secondi (più alto = più lento) */
  duration?: number;
}

/**
 * Ticker scorrevole infinito. I contenuti sono duplicati per il loop continuo;
  * si mette in pausa al passaggio del mouse. Decorativo (aria-hidden).
 */
export default function Marquee({ items, reverse = false, duration = 32 }: MarqueeProps) {
  const sep = "✦";
  const track = [...items, ...items];

  return (
    <div className="marquee" aria-hidden="true">
      <div
        className={`marquee__track ${reverse ? "marquee__track--rev" : ""}`}
        style={{ animationDuration: `${duration}s` }}
      >
        {track.map((t, i) => (
          <span className="marquee__item" key={i}>
            {t}
            <span className="marquee__sep">{sep}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
