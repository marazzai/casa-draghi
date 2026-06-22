import type { QuickStat } from "../data/content";
import Reveal from "./Reveal";
import Counter from "./Counter";

/** Griglia di card numeriche riutilizzabile, con contatori animati. */
export default function Stats({ items }: { items: QuickStat[] }) {
  return (
    <div className="grid grid--4">
      {items.map((s, i) => (
        <Reveal key={s.label} className="statcard" delay={(i % 4) + 1}>
          <>
            <span className="v">
              <Counter value={s.value} />
            </span>
            <span className="l">{s.label}</span>
          </>
        </Reveal>
      ))}
    </div>
  );
}
