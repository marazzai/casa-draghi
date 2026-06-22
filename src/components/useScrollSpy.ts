import { useEffect, useState } from "react";

/**
 * Ritorna l'id della sezione attualmente più vicina alla parte alta del
 * viewport, per evidenziare la voce corrispondente nel menu.
 */
export function useScrollSpy(ids: string[], offset = 90): string {
  const [active, setActive] = useState<string>(ids[0] ?? "");

  useEffect(() => {
    const handler = () => {
      const scrollPos = window.scrollY + offset + 1;
      let current = ids[0] ?? "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          current = id;
        }
      }
      // se siamo in fondo alla pagina, attiva l'ultima sezione
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) {
        current = ids[ids.length - 1] ?? current;
      }
      setActive(current);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("scroll", handler);
      window.removeEventListener("resize", handler);
    };
  }, [ids, offset]);

  return active;
}
