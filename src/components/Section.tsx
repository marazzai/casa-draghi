import type { ReactNode } from "react";
import Reveal from "./Reveal";

interface SectionProps {
  id: string;
  eyebrow?: string;
  title: string;
  lead?: ReactNode;
  children: ReactNode;
  /** variante di sfondo */
  variant?: "default" | "alt" | "field" | "leave-mark" | "cta";
  className?: string;
}

/**
 * Wrapper di sezione con ancora (id), occhiello, titolo e lead.
 * Garantisce id/anchor corretti per il menu e la struttura semantica.
 */
export default function Section({
  id,
  eyebrow,
  title,
  lead,
  children,
  variant = "default",
  className = "",
}: SectionProps) {
  const variantClass =
    variant === "alt"
      ? "section--alt"
      : variant === "field"
        ? "section--field"
        : variant === "leave-mark"
          ? "leave-mark"
          : variant === "cta"
            ? "cta"
            : "";

  return (
    <section id={id} className={`section ${variantClass} ${className}`.trim()}>
      <div className="container">
        <Reveal className="section__head">
          <>
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
            <h2 className="section__title">{title}</h2>
            {lead && <p className="section__lead">{lead}</p>}
          </>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
