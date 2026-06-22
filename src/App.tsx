import Header from "./components/Header";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Reveal from "./components/Reveal";
import Stats from "./components/Stats";
import SpaceCard from "./components/SpaceCard";
import SponsorCard from "./components/SponsorCard";
import CostTable from "./components/CostTable";
import EventCard from "./components/EventCard";
import Contact from "./components/Contact";

import {
  manifesto,
  situationIntro,
  situationStats,
  facilityItems,
  otherUsers,
  problemSolution,
  goals,
  spaces,
  sponsorIntro,
  sponsorPackages,
  treasury,
  costNote,
  costGroups,
  firstYearBudget,
  rolesIntro,
  roles,
  teamDays,
  territory,
  events,
  nextSteps,
  finalCta,
  site,
} from "./data/content";

export default function App() {
  return (
    <>
      <a className="skip" href="#progetto">
        Salta al contenuto
      </a>
      <Header />

      <main>
        {/* 1. HERO ------------------------------------------------ */}
        <Hero />

        {/* 2. MANIFESTO (ancora: progetto) ----------------------- */}
        <section id="progetto" className="section section--field">
          <div className="container">
            <Reveal className="section__head">
              <span className="eyebrow">Manifesto</span>
            </Reveal>
            <Reveal className="manifesto__body">
              <>
                {manifesto.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </>
            </Reveal>
            <Reveal as="ul" className="manifesto__pillars">
              <>
                {manifesto.pillars.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </>
            </Reveal>
          </div>
        </section>

        {/* 3. SITUAZIONE ATTUALE --------------------------------- */}
        <Section
          id="situazione"
          variant="alt"
          eyebrow="Situazione attuale"
          title="Da dove partiamo"
          lead={situationIntro}
        >
          <Stats items={situationStats} />

          <div className="grid grid--2" style={{ marginTop: "1.4rem" }}>
            <Reveal className="card">
              <>
                <h3 className="space__name" style={{ fontSize: "1.3rem", marginBottom: "0.6rem" }}>
                  L'impianto di Arten
                </h3>
                <ul className="facility">
                  {facilityItems.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </>
            </Reveal>
            <Reveal className="card" delay={1}>
              <>
                <h3 className="space__name" style={{ fontSize: "1.3rem", marginBottom: "0.6rem" }}>
                  Non solo Draghi
                </h3>
                <p className="space__desc">
                  L'impianto è uno spazio sportivo condiviso. I Draghi ne sono il soggetto responsabile,
                  ma non è chiuso o esclusivo: è vissuto anche da altre realtà.
                </p>
                <ul className="partner" style={{ marginTop: "0.4rem" }}>
                  {otherUsers.map((u) => (
                    <li key={u} style={{ color: "var(--cream-dim)", padding: "0.4rem 0" }}>
                      {u}
                    </li>
                  ))}
                </ul>
              </>
            </Reveal>
          </div>
        </Section>

        {/* 4. PERCHÉ SERVE --------------------------------------- */}
        <Section
          id="perche"
          eyebrow="Perché serve Casa Draghi"
          title="Da gestione spontanea a sistema"
          lead={problemSolution.solutionLead}
        >
          <div className="why">
            <Reveal className="why__col why__col--problem">
              <>
                <h3>{problemSolution.problemTitle}</h3>
                <ul className="why__list">
                  {problemSolution.problems.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </>
            </Reveal>
            <Reveal className="why__col why__col--solution" delay={1}>
              <>
                <h3>{problemSolution.solutionTitle}</h3>
                <ul className="why__list">
                  {problemSolution.solutions.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </>
            </Reveal>
          </div>
        </Section>

        {/* 5. OBIETTIVI ------------------------------------------ */}
        <Section
          id="obiettivi"
          variant="alt"
          eyebrow="Gli obiettivi"
          title="Cinque cose da costruire"
        >
          <div className="grid grid--3">
            {goals.map((g, i) => (
              <Reveal key={g.num} className="card goal" delay={(i % 3) + 1}>
                <>
                  <span className="goal__num">{g.num}</span>
                  <h3>{g.title}</h3>
                  <p>{g.text}</p>
                </>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* 6. SPAZI ---------------------------------------------- */}
        <Section
          id="spazi"
          variant="field"
          eyebrow="Gli spazi del progetto"
          title="Un nome e una funzione per ogni spazio"
          lead="Dare un nome agli spazi rende l'impianto più riconoscibile, facilita la gestione e crea pacchetti sponsor più belli e concreti."
        >
          <div className="grid grid--3">
            {spaces.map((s, i) => (
              <Reveal key={s.name} delay={(i % 3) + 1}>
                <SpaceCard space={s} />
              </Reveal>
            ))}
          </div>
        </Section>

        {/* 7. SPONSOR — Lascia il Segno -------------------------- */}
        <Section
          id="sponsor"
          variant="leave-mark"
          eyebrow="Sponsor · Lascia il Segno"
          title={sponsorIntro.title}
          lead={sponsorIntro.lead}
        >
          <Reveal>
            <div className="sponsor-support">
              {sponsorIntro.support.map((s) => (
                <span className="chip" key={s}>
                  {s}
                </span>
              ))}
            </div>
          </Reveal>

          <div className="grid grid--3" style={{ marginTop: "1.8rem" }}>
            {sponsorPackages.map((p, i) => (
              <Reveal key={p.name} delay={(i % 3) + 1}>
                <SponsorCard pkg={p} />
              </Reveal>
            ))}
          </div>
        </Section>

        {/* 8. CASSA E SOSTENIBILITÀ ------------------------------ */}
        <Section
          id="cassa"
          variant="alt"
          eyebrow="Cassa e sostenibilità"
          title={treasury.title}
          lead={treasury.lead}
        >
          <div className="treasury">
            <Reveal>
              <>
                <p className="treasury__rule">{treasury.rule}</p>
                <div className="split">
                  {treasury.split.map((s) => (
                    <div className="split__row" key={s.label}>
                      <div className="top">
                        <span>{s.label}</span>
                        <b>{s.pct}%</b>
                      </div>
                      <div className="bar">
                        <span style={{ width: `${s.pct}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
                <p className="section__lead" style={{ fontSize: "0.92rem", marginTop: "1.2rem" }}>
                  {treasury.cassaUses}
                </p>
              </>
            </Reveal>

            <Reveal delay={1}>
              <div className="treasury__goals">
                {treasury.goals.map((g) => (
                  <div className="goalcard" key={g.label}>
                    <span className="v">{g.value}</span>
                    <span className="l">{g.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Section>

        {/* 9. COSTI STIMATI -------------------------------------- */}
        <Section
          id="costi"
          eyebrow="Costi stimati"
          title="Concreti, ma onesti"
          lead="Numeri per dare un ordine di grandezza e presentare il progetto in modo concreto."
        >
          <Reveal>
            <p className="cost-note">{costNote}</p>
          </Reveal>

          <div className="cost-grid">
            {costGroups.map((g, i) => (
              <Reveal key={g.id} delay={(i % 2) + 1}>
                <CostTable group={g} />
              </Reveal>
            ))}
          </div>

          {/* Quadro economico primo anno */}
          <Reveal>
            <div className="budget">
              <div className="budget__head">
                <div>
                  <span className="lbl">Obiettivo realistico primo anno</span>
                  <div className="big">{firstYearBudget.target}</div>
                </div>
                <p className="budget__note">{firstYearBudget.note}</p>
              </div>
              <table>
                <tbody>
                  {firstYearBudget.rows.map((r) => (
                    <tr key={r.item}>
                      <td>{r.item}</td>
                      <td>{r.value}</td>
                    </tr>
                  ))}
                  <tr>
                    <td>{firstYearBudget.totalLabel}</td>
                    <td>{firstYearBudget.total}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Reveal>
        </Section>

        {/* 10. RESPONSABILI E VOLONTARI (ancora: gestione) ------- */}
        <Section
          id="gestione"
          variant="alt"
          eyebrow="Responsabili e volontari"
          title={rolesIntro.title}
          lead={rolesIntro.lead}
        >
          <Reveal>
            <div className="roles">
              {roles.map((r) => (
                <div className="role" key={r.title}>
                  <h3>{r.title}</h3>
                  <p>{r.text}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <div className="teamdays">
              <h3>{teamDays.title}</h3>
              <p>{teamDays.text}</p>
              <div className="chips">
                {teamDays.activities.map((a) => (
                  <span className="chip" key={a}>
                    {a}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </Section>

        {/* 11. COMUNE, PRO LOCO E TERRITORIO --------------------- */}
        <Section
          id="territorio"
          eyebrow="Comune, Pro Loco e territorio"
          title="Un progetto aperto al paese"
          lead="Casa Draghi non vuole restare chiuso nei confini della squadra."
        >
          <div className="grid grid--3">
            {territory.map((p, i) => (
              <Reveal key={p.name} className="card partner" delay={(i % 3) + 1}>
                <>
                  <h3>{p.name}</h3>
                  <p>{p.text}</p>
                  <ul>
                    {p.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* 12. EVENTI -------------------------------------------- */}
        <Section
          id="eventi"
          variant="field"
          eyebrow="Eventi Casa Draghi"
          title="Far vivere l'impianto"
          lead="Gli eventi fanno tre cose insieme: fanno vivere l'impianto, creano cassa e danno valore agli sponsor."
        >
          <div className="grid grid--3">
            {events.map((e, i) => (
              <Reveal key={e.name} delay={(i % 3) + 1}>
                <EventCard event={e} />
              </Reveal>
            ))}
          </div>
        </Section>

        {/* 13. PROSSIMI PASSI ------------------------------------ */}
        <Section
          id="prossimi-passi"
          variant="alt"
          eyebrow="Prossimi passi"
          title="Da dove si comincia"
        >
          <Reveal>
            <ol className="steps">
              {nextSteps.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ol>
          </Reveal>
        </Section>

        {/* 14. CTA FINALE + CONTATTI (ancora: contatti) ---------- */}
        <section id="contatti" className="section cta">
          <div className="container">
            <Reveal>
              <>
                <h2 className="cta__title">{finalCta.title}</h2>
                <p className="cta__text">{finalCta.text}</p>
                <div className="cta__actions">
                  {finalCta.actions.map((a, i) => (
                    <a
                      key={a}
                      href="#form-contatti"
                      className={`btn ${i === 0 ? "btn--primary" : "btn--ghost"}`}
                    >
                      {a}
                    </a>
                  ))}
                </div>
              </>
            </Reveal>

            <div id="form-contatti">
              <Reveal>
                <Contact />
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <div>
            <span className="display">{site.brand}</span>
            <div className="claimline">{site.claim}</div>
          </div>
          <small>
            {site.team} · {site.venue}
            <br />
            Gestione impianto fino al 2030 · Progetto in fase di pre-approvazione
          </small>
        </div>
      </footer>
    </>
  );
}
