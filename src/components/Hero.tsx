import { heroChips, heroStats, site } from "../data/content";

export default function Hero() {
  return (
    <section id="intro" className="hero">
      <div className="hero__field" aria-hidden="true" />
      <div className="hero__lines" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <div className="container hero__inner">
        <div className="hero__brandline reveal is-visible">
          <img src={site.logo} alt={`Logo ${site.team}`} />
          <span className="tag">
            {site.team} · {site.venue}
          </span>
        </div>

        <h1 className="hero__title">
          Casa Draghi
          <span className="l2">Dove il rugby diventa territorio</span>
        </h1>

        <p className="hero__sub">{site.subtitle}</p>

        <div className="hero__cta">
          <a className="btn btn--primary" href="#progetto">
            Scopri il progetto
          </a>
          <a className="btn btn--ghost" href="#sponsor">
            Lascia il segno
          </a>
        </div>

        <div className="hero__stats" role="list" aria-label="Dati rapidi del progetto">
          {heroStats.map((s) => (
            <div className="hero__stat" role="listitem" key={s.label}>
              <span className="v">{s.value}</span>
              <span className="l">{s.label}</span>
            </div>
          ))}
        </div>

        <div className="hero__chips">
          {heroChips.map((c) => (
            <span className="chip" key={c}>
              {c}
            </span>
          ))}
        </div>
      </div>

      <a className="hero__scroll" href="#progetto" aria-label="Scorri per scoprire">
        <span>Scroll</span>
        <span className="dot" aria-hidden="true" />
      </a>
    </section>
  );
}
