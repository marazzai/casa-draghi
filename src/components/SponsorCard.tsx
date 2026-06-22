import type { SponsorPackage } from "../data/content";

export default function SponsorCard({ pkg }: { pkg: SponsorPackage }) {
  return (
    <article className={`card sponsor ${pkg.highlight ? "sponsor--hl" : ""}`}>
      {pkg.highlight && <span className="sponsor__badge">Pacchetto principale</span>}
      <h3 className="sponsor__name">{pkg.name}</h3>
      <p className="sponsor__price">{pkg.price}</p>
      <p className="sponsor__target">{pkg.target}</p>

      <div className="sponsor__row">
        <dt>Cosa sostiene</dt>
        <dd>{pkg.supports}</dd>
      </div>
      <div className="sponsor__row">
        <dt>Cosa riceve</dt>
        <dd>{pkg.receives}</dd>
      </div>
      <div className="sponsor__row">
        <dt>Perché è utile</dt>
        <dd>{pkg.why}</dd>
      </div>
    </article>
  );
}
