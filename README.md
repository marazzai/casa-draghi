# Casa Draghi — Sito one-page

Sito web one-page, scrollabile e responsive per il progetto **Casa Draghi** dei
**Draghi Feltre Rugby**. _Dove il rugby diventa territorio._

Stack: **Vite + React + TypeScript**, CSS puro ben organizzato. Nessuna libreria
pesante: le animazioni usano CSS + Intersection Observer.

---

## Requisiti

- [Node.js](https://nodejs.org) versione 18 o superiore (consigliata la LTS).
  Su Mac puoi installarlo da nodejs.org o con Homebrew (`brew install node`).

## Avvio in locale

Apri il Terminale nella cartella del progetto ed esegui:

```bash
npm install      # scarica le dipendenze (una volta sola)
npm run dev      # avvia il sito in locale
```

Poi apri nel browser l'indirizzo mostrato (di solito **http://localhost:5173**).
Le modifiche ai file si vedono subito, senza riavviare.

## Build di produzione

```bash
npm run build    # genera la cartella dist/ pronta per la pubblicazione
npm run preview  # anteprima locale della build
```

La cartella **`dist/`** contiene il sito statico: puoi caricarla così com'è su
Netlify, Vercel, GitHub Pages, Aruba o qualsiasi hosting. (La configurazione usa
percorsi relativi, quindi funziona anche da sottocartella.)

## Controllo TypeScript

```bash
npm run typecheck   # verifica che non ci siano errori di tipo
```

---

## Come modificare i contenuti

Quasi tutti i testi sono in un solo file:

```
src/data/content.ts
```

È diviso per sezioni e commentato. Modifica lì titoli, testi, spazi, pacchetti
sponsor, costi, eventi, responsabili e contatti: il sito si aggiorna da solo.
Non serve toccare i componenti.

Esempi rapidi:

- **Contatti e form** → in fondo a `content.ts`, oggetto `contact`. Sostituisci i
  placeholder `[email Draghi Feltre Rugby]`, `[telefono]`, `[Instagram / Facebook]`
  con i recapiti reali. L'email viene usata anche dal modulo contatti (mailto).
- **Pacchetti sponsor** → array `sponsorPackages`. Il flag `highlight: true`
  evidenzia il pacchetto principale.
- **Costi** → array `costGroups` e oggetto `firstYearBudget`. Sono **stime
  indicative**, non preventivi.
- **Dati rapidi dell'hero** → array `heroStats` e `heroChips`.

## Menu e sezioni

Il menu fisso in alto usa ancore interne con scroll fluido e _active state_
durante lo scroll. Le voci sono definite in `content.ts` → `nav`. Ogni voce punta
all'`id` di una sezione:

`intro · progetto · spazi · sponsor · costi · gestione · eventi · contatti`

## Logo e foto

- Il **logo dei Draghi** è in `public/logo-draghi.svg`. Per sostituirlo, metti il
  nuovo file con lo stesso nome (o aggiorna il percorso in `content.ts` → `site.logo`).
- Il sito usa blocchi grafici, pattern e linee di campo come placeholder. Quando
  avrai **foto reali** (campo, squadra, impianto, volontari), potrai inserirle
  nelle card degli spazi e nell'hero: basta aggiungerle in `public/` e richiamarle
  con un tag `<img>` nei componenti corrispondenti.

## Colori e stile

La palette e la tipografia sono definite come variabili CSS all'inizio di
`src/styles/global.css` (sezione `:root`). Cambiando lì i valori (es. `--copper`,
`--field`, `--blood`) cambi l'intero sito. I caratteri (Anton, Archivo) sono
caricati da Google Fonts in `index.html`.

## Struttura dei file

```
casa-draghi-site/
├─ index.html              meta title/description, Open Graph, favicon, font
├─ public/
│  ├─ logo-draghi.svg       logo della squadra
│  └─ favicon.svg           favicon
├─ src/
│  ├─ main.tsx              punto di ingresso React
│  ├─ App.tsx               assembla le 14 sezioni della pagina
│  ├─ data/content.ts       ←  TUTTI I TESTI MODIFICABILI
│  ├─ styles/global.css     stile, palette, tipografia, animazioni
│  └─ components/
│     ├─ Header.tsx          menu fisso + scroll-spy + menu mobile
│     ├─ Hero.tsx            apertura con titolo, dati rapidi, CTA
│     ├─ Section.tsx         contenitore di sezione (occhiello + titolo)
│     ├─ Reveal.tsx          animazione in ingresso (Intersection Observer)
│     ├─ Stats.tsx           griglia di card numeriche
│     ├─ SpaceCard.tsx       card di uno spazio del progetto
│     ├─ SponsorCard.tsx     card di un pacchetto sponsor
│     ├─ CostTable.tsx       tabella costi responsive
│     ├─ EventCard.tsx       card di un evento
│     ├─ Contact.tsx         form contatti (mailto)
│     └─ useScrollSpy.ts     hook per l'active state del menu
└─ vite.config.ts
```

## Accessibilità e performance

- HTML semantico, `skip link`, focus visibile, contrasto curato.
- `prefers-reduced-motion` rispettato: chi disattiva le animazioni vede la pagina
  statica.
- Nessuna dipendenza pesante: il sito è leggero e veloce.
- Meta title, description e Open Graph già impostati in `index.html`.

---

_Casa Draghi — Dove il rugby diventa territorio._
