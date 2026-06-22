import type { Space } from "../data/content";

export default function SpaceCard({ space }: { space: Space }) {
  return (
    <article className="card space">
      <div className="space__top">
        <h3 className="space__name">{space.name}</h3>
        <span className="space__tag">{space.tag}</span>
      </div>
      <p className="space__desc">{space.description}</p>
      <dl className="space__meta">
        <div>
          <dt>Cosa serve</dt>
          <dd>{space.needs}</dd>
        </div>
        <div>
          <dt>Cosa può sostenere uno sponsor</dt>
          <dd>{space.sponsor}</dd>
        </div>
      </dl>
      {space.quote && <p className="space__quote">{space.quote}</p>}
    </article>
  );
}
