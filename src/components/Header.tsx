import { useEffect, useState } from "react";
import { nav, site } from "../data/content";
import { useScrollSpy } from "./useScrollSpy";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useScrollSpy(nav.map((n) => n.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
      <div className="header__inner">
        <a className="brand" href="#intro" aria-label={`${site.brand}, torna all'inizio`}>
          <img className="brand__logo" src={site.logo} alt="" aria-hidden="true" />
          <span className="brand__name">
            {site.brand}
            <small>{site.team}</small>
          </span>
        </a>

        <nav id="primary-nav" className={`nav ${open ? "nav--open" : ""}`} aria-label="Navigazione principale">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav__link ${active === item.id ? "nav__link--active" : ""}`}
              aria-current={active === item.id ? "true" : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className="nav-toggle"
          aria-label={open ? "Chiudi menu" : "Apri menu"}
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
        </button>
      </div>
    </header>
  );
}
