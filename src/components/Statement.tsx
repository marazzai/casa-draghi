import type { Statement as StatementData } from "../data/content";
import WordReveal from "./WordReveal";
import { useParallax } from "./useParallax";
import { Topo, DragonWatermark } from "./Art";

/**
 * Sezione di stacco a tutto schermo con una frase d'impatto.
 * Tipografia gigante con rivelazione parola-per-parola, sfondo con
 * parallasse (linee topografiche + watermark drago).
 */
export default function Statement({ data, id }: { data: StatementData; id?: string }) {
  const bg = useParallax<HTMLDivElement>(0.12);
  const crest = useParallax<HTMLDivElement>(0.26);

  return (
    <section className="statement" id={id}>
      <div className="statement__bg" ref={bg} aria-hidden="true">
        <Topo className="statement__topo" />
      </div>
      <div className="statement__crest" ref={crest} aria-hidden="true">
        <DragonWatermark />
      </div>
      <div className="container statement__inner">
        <span className="eyebrow">{data.kicker}</span>
        <WordReveal as="p" className="statement__big" text={data.big} accent={data.accent} />
        {data.sub && <p className="statement__sub">{data.sub}</p>}
      </div>
    </section>
  );
}
