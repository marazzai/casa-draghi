import { useState, type FormEvent } from "react";
import { contact } from "../data/content";

/**
 * Form contatti senza backend: alla conferma apre il client di posta
 * (mailto) precompilato. Per collegare un vero backend, sostituisci
 * `handleSubmit` con una fetch verso il tuo endpoint.
 */
export default function Contact() {
  const [interest, setInterest] = useState(contact.interests[0]);

  const mailtoTarget = contact.email.includes("@") ? contact.email : "";

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const get = (k: string) => String(data.get(k) ?? "").trim();

    const subject = `Casa Draghi — ${get("interest") || "Contatto"}: ${get("name")}`;
    const body = [
      `Nome: ${get("name")}`,
      `Azienda / ruolo: ${get("company")}`,
      `Email: ${get("email")}`,
      `Telefono: ${get("phone")}`,
      `Interesse: ${get("interest")}`,
      "",
      "Messaggio:",
      get("message"),
    ].join("\n");

    // Se l'email reale non è ancora stata inserita, apre comunque il
    // client di posta con destinatario vuoto (da compilare a mano).
    const href = `mailto:${mailtoTarget}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
  }

  return (
    <div className="contact">
      <aside className="contact__info">
        <h3>Parliamone</h3>
        <dl>
          <div>
            <dt>Squadra</dt>
            <dd>{contact.team}</dd>
          </div>
          <div>
            <dt>Impianto</dt>
            <dd>{contact.venue}</dd>
          </div>
          <div>
            <dt>Email</dt>
            <dd>{contact.email}</dd>
          </div>
          <div>
            <dt>Telefono</dt>
            <dd>{contact.phone}</dd>
          </div>
          <div>
            <dt>Social</dt>
            <dd>{contact.social}</dd>
          </div>
        </dl>
      </aside>

      <form className="form" onSubmit={handleSubmit}>
        <div className="form__row">
          <div className="field">
            <label htmlFor="name">Nome</label>
            <input id="name" name="name" type="text" autoComplete="name" required />
          </div>
          <div className="field">
            <label htmlFor="company">Azienda / ruolo</label>
            <input id="company" name="company" type="text" autoComplete="organization" />
          </div>
        </div>

        <div className="form__row">
          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" autoComplete="email" required />
          </div>
          <div className="field">
            <label htmlFor="phone">Telefono</label>
            <input id="phone" name="phone" type="tel" autoComplete="tel" />
          </div>
        </div>

        <div className="field">
          <label htmlFor="interest">Tipo di interesse</label>
          <select
            id="interest"
            name="interest"
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
          >
            {contact.interests.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        <div className="field">
          <label htmlFor="message">Messaggio</label>
          <textarea id="message" name="message" rows={4} />
        </div>

        <button type="submit" className="btn btn--primary">
          Invia richiesta
        </button>
        <p className="form__note">
          Il modulo apre il tuo programma di posta con il messaggio già pronto. Per attivare l'invio
          automatico, inserisci l'email reale in <code>src/data/content.ts</code> e collega un backend.
        </p>
      </form>
    </div>
  );
}
