import type { QuickStat } from "../data/content";
import Reveal from "./Reveal";

/** Griglia di card numeriche riutilizzabile. */
export default function Stats({ items }: { items: QuickStat[] }) {
  return (
    <div className="grid grid--4">
      {items.map((s, i) => (
        <Reveal key={s.label} className="statcard" delay={(i % 4) + 1}>
          <>
            <span className="v">{s.value}</span>
            <span className="l">{s.label}</span>
          </>
        </Reveal>
      ))}
    </div>
  );
}
