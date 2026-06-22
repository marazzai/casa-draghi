import type { EventItem } from "../data/content";

export default function EventCard({ event }: { event: EventItem }) {
  return (
    <article className="card event">
      <h3 className="event__name">{event.name}</h3>
      <p className="event__goal">{event.goal}</p>
      <dl>
        <div>
          <dt>Cosa succede</dt>
          <dd>{event.what}</dd>
        </div>
        <div>
          <dt>Che valore dà</dt>
          <dd>{event.value}</dd>
        </div>
      </dl>
    </article>
  );
}
