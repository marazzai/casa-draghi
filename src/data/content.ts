/**
 * CASA DRAGHI — Contenuti del sito
 * ---------------------------------
 * Tutti i testi principali sono qui dentro: modifica questo file per
 * aggiornare il sito senza toccare i componenti. Ogni sezione è commentata.
 *
 * Le cifre dei costi sono STIME di pre-progetto, non preventivi ufficiali.
 */

/* ---------------------------------------------------------------- */
/* DATI GLOBALI                                                     */
/* ---------------------------------------------------------------- */

export const site = {
  brand: "Casa Draghi",
  team: "Draghi Feltre Rugby",
  claim: "Dove il rugby diventa territorio",
  subtitle:
    "Un progetto dei Draghi Feltre Rugby per prendersi cura dell'impianto sportivo di Arten, renderlo più vivo, più riconoscibile e più sostenibile.",
  venue: "Impianto sportivo di Arten di Fonzaso",
  logo: "./logo-draghi.svg",
};

/* Marquee / ticker scorrevole ----------------------------------- */
export const marquee: string[] = [
  "Dove il rugby diventa territorio",
  "Lascia il segno",
  "Campo · Fango · Comunità",
  "Il tuo contributo resta qui",
  "Sport amatoriale, impegno vero",
  "Una squadra, un campo, una comunità",
];

/* Frasi-statement a tutto schermo (sezioni di stacco) ----------- */
export interface Statement {
  kicker: string;
  big: string;
  sub?: string;
  /** parola/e da evidenziare in rame dentro `big` */
  accent?: string;
}

export const statements: Record<string, Statement> = {
  mark: {
    kicker: "Il principio",
    big: "Non compri visibilità. Lasci un segno.",
    accent: "Lasci un segno.",
    sub: "Con Casa Draghi il tuo contributo non è uno slogan: è un campo più curato, uno spazio che rinasce, una squadra più riconoscibile.",
  },
  here: {
    kicker: "La promessa",
    big: "Il tuo contributo resta qui.",
    accent: "resta qui.",
    sub: "In un impianto, in una squadra e in un pezzo di territorio.",
  },
  hands: {
    kicker: "Il metodo",
    big: "Casa Draghi si costruisce con le mani di chi la vive.",
    accent: "le mani di chi la vive.",
    sub: "Volontari, ex giocatori, amici. Una squadra amatoriale può gestire un impianto con serietà.",
  },
};

/* Menu di navigazione (ancore interne) -------------------------- */
export interface NavItem {
  id: string;
  label: string;
}

export const nav: NavItem[] = [
  { id: "intro", label: "Intro" },
  { id: "progetto", label: "Progetto" },
  { id: "spazi", label: "Spazi" },
  { id: "sponsor", label: "Sponsor" },
  { id: "costi", label: "Costi" },
  { id: "gestione", label: "Gestione" },
  { id: "eventi", label: "Eventi" },
  { id: "contatti", label: "Contatti" },
];

/* ---------------------------------------------------------------- */
/* 1. HERO — Dati rapidi                                            */
/* ---------------------------------------------------------------- */

export interface QuickStat {
  value: string;
  label: string;
}

export const heroStats: QuickStat[] = [
  { value: "2030", label: "Gestione impianto fino al" },
  { value: "~40", label: "Persone coinvolte" },
  { value: "3", label: "Campi in erba" },
  { value: "1", label: "Campo basket da recuperare" },
];

export const heroChips: string[] = [
  "Club house",
  "Spogliatoi",
  "Area famiglie",
  "Aperto a sponsor, volontari e territorio",
];

/* ---------------------------------------------------------------- */
/* 2. MANIFESTO                                                     */
/* ---------------------------------------------------------------- */

export const manifesto = {
  body: [
    "Casa Draghi non nasce per vendere visibilità. Nasce per costruire appartenenza.",
    "Non chiediamo alle aziende di comprare pubblicità. Chiediamo di lasciare un segno concreto in un luogo, in una squadra e in un pezzo di territorio.",
  ],
  pillars: [
    "Non compri visibilità. Lasci un segno.",
    "Il tuo contributo resta qui.",
    "Una squadra amatoriale può gestire un impianto con serietà.",
    "Dove il rugby diventa territorio.",
  ],
};

/* ---------------------------------------------------------------- */
/* 3. SITUAZIONE ATTUALE                                           */
/* ---------------------------------------------------------------- */

export const situationIntro =
  "I Draghi Feltre Rugby sono una realtà amatoriale, territoriale e comunitaria. La squadra partecipa al campionato UISP e ha in gestione l'impianto di Arten fino al 2030. Una responsabilità, ma anche una grande opportunità.";

export const situationStats: QuickStat[] = [
  { value: "~40", label: "Persone nella vita della squadra" },
  { value: "25–30", label: "Giocatori realmente attivi" },
  { value: "~5", label: "Volontari affidabili oggi" },
  { value: "UISP", label: "Campionato amatoriale" },
];

export const facilityItems: string[] = [
  "Campo principale regolamentare",
  "Secondo campo in erba (anche Arcieri Feltre)",
  "Terzo campo con porte da calcio",
  "Campo basket esterno da recuperare",
  "Area verde grande come un campo volley",
  "Club house sotto gli spalti",
  "Due spogliatoi squadre + spogliatoio arbitri",
  "Segreteria, magazzino e cucinino",
  "Bagni pubblici esterni",
  "Parcheggi numerosi e ingresso visibile",
  "Illuminazione sui tre campi in erba",
];

export const otherUsers: string[] = [
  "Giovanili del Rugby Feltre",
  "Arcieri Feltre",
  "Altre realtà sportive o associative",
];

/* ---------------------------------------------------------------- */
/* 4. PERCHÉ SERVE CASA DRAGHI                                      */
/* ---------------------------------------------------------------- */

export const problemSolution = {
  problemTitle: "Il problema, oggi",
  problems: [
    "Molte cose dipendono sempre dalle stesse poche persone.",
    "La club house è presente ma poco usata.",
    "Il campo basket esterno è degradato.",
    "Mancano sponsor organizzati e una proposta chiara.",
    "Non c'è una cassa stabile: si raccoglie e si spende subito.",
    "Serve dare identità, metodo e una visione pluriennale.",
  ],
  solutionTitle: "La soluzione: un sistema",
  solutionLead:
    "Casa Draghi serve per passare da una gestione spontanea a una gestione organizzata. Non “cerchiamo soldi per la squadra”, ma costruiamo un progetto che renda l'impianto più vivo, la squadra più riconoscibile e la società più sostenibile.",
  solutions: [
    "Ruoli chiari e responsabili",
    "Sponsor legati a interventi concreti",
    "Una cassa gestita con criterio",
    "Eventi che fanno vivere l'impianto",
    "Volontari e Giornate di Squadra",
    "Identità, comunicazione e comunità",
  ],
};

/* ---------------------------------------------------------------- */
/* 5. OBIETTIVI                                                     */
/* ---------------------------------------------------------------- */

export interface Goal {
  num: string;
  title: string;
  text: string;
}

export const goals: Goal[] = [
  {
    num: "01",
    title: "Dare identità ai Draghi",
    text: "Logo, divise, abbigliamento, comunicazione e immagine: una squadra più forte e riconoscibile.",
  },
  {
    num: "02",
    title: "Organizzare la gestione",
    text: "Responsabili, volontari, checklist, turni e manutenzione. Niente più ricade su poche persone.",
  },
  {
    num: "03",
    title: "Rendere vivo l'impianto",
    text: "Offside Club, eventi, terzi tempi, Pro Loco e famiglie. Non solo allenamenti e partite.",
  },
  {
    num: "04",
    title: "Creare sponsor territoriali",
    text: "Lascia il Segno, Muro dei Sostenitori, targhe e interventi adottabili. Appartenenza, non pubblicità gonfiata.",
  },
  {
    num: "05",
    title: "Creare cassa e sostenibilità",
    text: "Non reinvestire tutto subito, ma costruire stabilità economica per la società.",
  },
];

/* ---------------------------------------------------------------- */
/* 6. SPAZI DEL PROGETTO                                            */
/* ---------------------------------------------------------------- */

export interface Space {
  name: string;
  tag: string;
  description: string;
  needs: string;
  sponsor: string;
  quote?: string;
}

export const spaces: Space[] = [
  {
    name: "Campo Draghi",
    tag: "Cuore sportivo",
    description:
      "Il campo principale in erba: campo gara, allenamenti e identità sportiva. In buone condizioni, va mantenuto con cura.",
    needs: "Cura erba e tracciatura, pali e protezioni, manutenzione programmata, cartellonistica.",
    sponsor: "Manutenzione campo, materiali tecnici, partner di campo, cartellonistica.",
    quote: "Il Campo Draghi cresce con chi lo sostiene.",
  },
  {
    name: "Offside Club",
    tag: "Terzo tempo",
    description:
      "La club house sotto gli spalti: ritrovo, terzo tempo, riunioni, sponsor ed eventi. Oggi poco usata, deve tornare viva.",
    needs: "Pulizia e riordino, arredi, frigo/bar base, pannello sponsor, foto e identità Draghi.",
    sponsor: "Arredi, frigo/bar, pannello sponsor interno, allestimento, sponsor night.",
    quote: "Offside Club: dove il terzo tempo diventa comunità.",
  },
  {
    name: "Playground Draghi",
    tag: "Primo intervento simbolico",
    description:
      "Il recupero del campo basket esterno. Uno spazio che parla al paese, ai ragazzi e alle famiglie, non solo al rugby.",
    needs: "Messa in sicurezza, fondo, nuovi canestri, linee, evento inaugurale, torneo 3vs3.",
    sponsor: "Adozione dell'intervento, canestri, pavimentazione, targa, torneo 3vs3.",
    quote: "Non è solo un campo basket: è uno spazio che torna a vivere.",
  },
  {
    name: "Area Famiglie",
    tag: "Spazio comunitario",
    description:
      "L'area verde grande come un campo volley: volley su erba, famiglie, eventi e relax. Si sviluppa in modo graduale.",
    needs: "Pulizia, delimitazione, rete volley, tavoli e panche, zona relax, area giochi.",
    sponsor: "Rete volley, arredi esterni, gazebo, area giochi, cartellonistica.",
    quote: "Area Famiglie: uno spazio verde per sport, eventi e comunità.",
  },
  {
    name: "Muro dei Sostenitori",
    tag: "Riconoscimento permanente",
    description:
      "Un pannello fisico e curato dedicato a sponsor, aziende, ex giocatori, amici e sostenitori. Rende permanente ogni contributo.",
    needs: "Progettazione grafica, pannello fisico, targhe, aggiornamento annuale, posizione visibile.",
    sponsor: "Pannello, targhe singole, sezione aziende, sezione ex giocatori e amici.",
    quote: "Qui restano i nomi di chi ha scelto di lasciare un segno in Casa Draghi.",
  },
  {
    name: "Giornate di Squadra",
    tag: "Volontariato",
    description:
      "Il modo con cui Casa Draghi coinvolge giocatori, ex giocatori e amici nella cura dell'impianto. Non obblighi, ma appartenenza.",
    needs: "Pulizia, lavori, pittura, riordino, preparazione eventi, terzo tempo finale.",
    sponsor: "Materiali, attrezzi, vernici, pranzo/terzo tempo, fornitura tecnica.",
    quote: "Casa Draghi si costruisce anche con le mani di chi la vive.",
  },
  {
    name: "Spogliatoi e Magazzino",
    tag: "Ordine e funzionalità",
    description:
      "Spazi già presenti e decenti, da inserire nel progetto per ordine, decoro e funzionalità. Una Kit Room ordinata e uno spazio ospiti dignitoso.",
    needs: "Panche e appendini, docce e bagni, organizzazione magazzino, scaffali ed etichette.",
    sponsor: "Mestiere in Campo: idraulici, falegnami, ferramenta, imprese edili, pittori, pulizie.",
    quote: "Ordine, pulizia e funzionalità: i dettagli che si vedono.",
  },
];

/* ---------------------------------------------------------------- */
/* 7. SPONSOR — Lascia il Segno                                     */
/* ---------------------------------------------------------------- */

export const sponsorIntro = {
  title: "Lascia il Segno",
  lead:
    "Con Casa Draghi non compri visibilità: lasci un segno concreto in un impianto, in una squadra e in un pezzo di territorio.",
  support: [
    "Divise",
    "Offside Club",
    "Campo Draghi",
    "Playground Draghi",
    "Area Famiglie",
    "Eventi",
    "Muro dei Sostenitori",
    "Materiali e lavori tecnici",
    "Cassa e sostenibilità",
  ],
};

export interface SponsorPackage {
  name: string;
  price: string;
  target: string;
  supports: string;
  receives: string;
  why: string;
  highlight?: boolean;
}

export const sponsorPackages: SponsorPackage[] = [
  {
    name: "Partner di Meta",
    price: "da 5.000 €",
    target: "Sponsor principale o progetto importante.",
    supports: "Progetto generale, divise, Playground Draghi, Offside Club, interventi importanti, cassa.",
    receives:
      "Logo in posizione principale sul Muro, targa dedicata, presenza su materiali ufficiali, post dedicato, invito a eventi, foto ufficiale, eventuale logo su divisa.",
    why: "Lega il proprio nome al cuore del progetto e a un intervento concreto e duraturo.",
    highlight: true,
  },
  {
    name: "Prima Linea",
    price: "2.500 / 3.000 €",
    target: "Sponsor forte ma accessibile, legato a un'area o a un intervento.",
    supports: "Offside Club, divise, Campo Draghi, Area Famiglie, materiali, eventi.",
    receives: "Logo sul Muro, targa, post dedicato, presenza all'evento, possibile logo su abbigliamento.",
    why: "Visibilità solida e legame diretto con uno spazio riconoscibile dell'impianto.",
  },
  {
    name: "Partner di Campo",
    price: "1.000 / 1.500 €",
    target: "Aziende locali, artigiani e attività strutturate.",
    supports: "Manutenzione campo, materiali, club house, eventi, spogliatoi, comunicazione.",
    receives: "Logo sul Muro, ringraziamento social, invito evento, eventuale targa collettiva.",
    why: "Il modo concreto per un'attività locale di sostenere lo sport del proprio territorio.",
  },
  {
    name: "Amico Casa Draghi",
    price: "300 / 500 €",
    target: "Piccole attività locali e sostenitori.",
    supports: "Il progetto Casa Draghi nel suo insieme.",
    receives: "Logo/nome sul Muro, ringraziamento social, invito evento, presenza tra i sostenitori.",
    why: "Esserci con poco, ma in modo visibile e riconosciuto.",
  },
  {
    name: "Piccolo Segno",
    price: "100 / 200 €",
    target: "Ex giocatori, amici, famiglie e singoli sostenitori.",
    supports: "Il progetto e la sua continuità.",
    receives: "Nome sul Muro o in sezione dedicata, ringraziamento, invito a evento Casa Draghi.",
    why: "Un gesto affettivo che lascia il proprio nome nella storia dei Draghi.",
  },
  {
    name: "Mestiere in Campo",
    price: "Valore tecnico",
    target: "Partner tecnici: materiali, lavori, servizi, manodopera, forniture.",
    supports: "Interventi reali sull'impianto (falegname, elettricista, idraulico, pittore, edile, ferramenta…).",
    receives: "Targa “Mestiere in Campo”, logo sul Muro, post dedicato, foto dell'intervento, ringraziamento.",
    why: "Chi non dà denaro può dare il proprio mestiere: il contributo si vede e resta.",
  },
];

/* ---------------------------------------------------------------- */
/* 8. CASSA E SOSTENIBILITÀ                                         */
/* ---------------------------------------------------------------- */

export const treasury = {
  title: "Non solo lavori. Anche futuro.",
  lead:
    "Casa Draghi non deve spendere tutto quello che raccoglie. Il contributo sostiene il progetto nel suo insieme: impianto, attività, eventi, materiali e sviluppo futuro.",
  rule: "Ogni contributo deve migliorare Casa Draghi e lasciare una quota di stabilità alla società.",
  // Divisione consigliata per sponsor generici
  split: [
    { label: "Interventi e progetto", pct: 50 },
    { label: "Cassa Draghi", pct: 35 },
    { label: "Comunicazione, targhe, eventi", pct: 10 },
    { label: "Fondo imprevisti", pct: 5 },
  ],
  goals: [
    { value: "12.000 €", label: "Obiettivo di raccolta primo anno" },
    { value: "≥ 2.000 €", label: "Da lasciare in cassa (minimo)" },
    { value: "3–5.000 €", label: "Da lasciare in cassa (obiettivo buono)" },
  ],
  cassaUses:
    "La cassa serve per iscrizioni, materiali sportivi, trasferte, assicurazioni, imprevisti, manutenzioni urgenti, anticipi su eventi e continuità gestionale.",
};

/* ---------------------------------------------------------------- */
/* 9. COSTI STIMATI                                                 */
/* ---------------------------------------------------------------- */

export interface CostRow {
  item: string;
  /** valori in colonne: o 3 stime (min/buona/alta) o 1 sola stima */
  values: string[];
}

export interface CostGroup {
  id: string;
  title: string;
  /** intestazioni colonne (oltre alla prima "Voce") */
  columns: string[];
  rows: CostRow[];
  totals?: { label: string; value: string }[];
}

export const costNote =
  "Le cifre indicate sono stime di pre-progetto, non preventivi ufficiali. Servono per dare un ordine di grandezza. Ogni intervento andrà verificato con preventivi reali, autorizzazioni e valutazioni tecniche.";

export const costGroups: CostGroup[] = [
  {
    id: "offside",
    title: "Offside Club",
    columns: ["Minima", "Buona", "Alta"],
    rows: [
      { item: "Pulizia e riordino", values: ["100 €", "300 €", "500 €"] },
      { item: "Tinteggiatura", values: ["300 €", "800 €", "1.500 €"] },
      { item: "Tavoli e panche", values: ["400 €", "1.200 €", "2.500 €"] },
      { item: "Frigo/bar base", values: ["400 €", "1.000 €", "2.000 €"] },
      { item: "Luci e migliorie elettriche", values: ["300 €", "1.000 €", "2.500 €"] },
      { item: "Mensole/arredi/magazzino", values: ["300 €", "1.000 €", "2.000 €"] },
      { item: "Foto/grafiche/identità", values: ["200 €", "600 €", "1.200 €"] },
      { item: "Pannello sponsor interno", values: ["300 €", "800 €", "1.500 €"] },
    ],
    totals: [
      { label: "Minimo", value: "2.000 €" },
      { label: "Buono", value: "5.000 / 6.000 €" },
      { label: "Alto", value: "10.000 / 13.000 €" },
    ],
  },
  {
    id: "maglia",
    title: "La Maglia dei Draghi",
    columns: ["Q.tà", "Costo stimato"],
    rows: [
      { item: "Maglie gara", values: ["40", "1.600 / 2.800 €"] },
      { item: "Pantaloncini", values: ["40", "800 / 1.400 €"] },
      { item: "Calzettoni", values: ["40", "300 / 600 €"] },
      { item: "Maglie allenamento", values: ["40", "600 / 1.200 €"] },
      { item: "Felpe/tute", values: ["40", "2.000 / 4.000 €"] },
      { item: "Grafica/mockup", values: ["—", "200 / 600 €"] },
      { item: "Foto ufficiale", values: ["—", "0 / 500 €"] },
    ],
    totals: [
      { label: "Base", value: "3.000 / 4.500 €" },
      { label: "Buono", value: "6.000 / 8.000 €" },
      { label: "Completo", value: "9.000 / 12.000 €" },
    ],
  },
  {
    id: "muro",
    title: "Muro dei Sostenitori",
    columns: ["Stima"],
    rows: [
      { item: "Grafica pannello", values: ["150 / 400 €"] },
      { item: "Pannello fisico", values: ["300 / 1.200 €"] },
      { item: "Targhe singole", values: ["50 / 150 € cad."] },
      { item: "Supporti/montaggio", values: ["100 / 500 €"] },
      { item: "Aggiornamento annuale", values: ["100 / 300 €"] },
    ],
    totals: [
      { label: "Minimo", value: "700 / 1.000 €" },
      { label: "Buono", value: "1.500 / 2.500 €" },
      { label: "Alto", value: "3.000 € +" },
    ],
  },
  {
    id: "campo",
    title: "Campo Draghi",
    columns: ["Stima"],
    rows: [
      { item: "Sementi/concime", values: ["300 / 1.000 €"] },
      { item: "Terriccio/sabbia piccole zone", values: ["300 / 1.500 €"] },
      { item: "Vernice traccialinee", values: ["100 / 300 €"] },
      { item: "Materiali campo", values: ["200 / 800 €"] },
      { item: "Protezioni/accessori", values: ["300 / 1.200 €"] },
      { item: "Manutenzione ordinaria annuale", values: ["1.000 / 3.000 €"] },
    ],
    totals: [
      { label: "Minimo annuale", value: "1.500 / 2.500 €" },
      { label: "Buono", value: "3.000 / 6.000 €" },
      { label: "Alto", value: "8.000 € +" },
    ],
  },
  {
    id: "playground",
    title: "Playground Draghi",
    columns: ["Stima"],
    rows: [
      { item: "Livello 1 — messa in sicurezza e ripristino base", values: ["2.000 / 5.000 €"] },
      { item: "Livello 2 — sistemazione buona", values: ["8.000 / 18.000 €"] },
      { item: "Livello 3 — intervento forte", values: ["25.000 / 60.000 €"] },
    ],
    totals: [
      { label: "Si parte dal Livello 1", value: "in base a fondi e autorizzazioni" },
    ],
  },
  {
    id: "famiglie",
    title: "Area Famiglie",
    columns: ["Stima"],
    rows: [
      { item: "Pulizia/livellamento leggero", values: ["300 / 1.500 €"] },
      { item: "Rete volley/pali", values: ["300 / 1.000 €"] },
      { item: "Tavoli/panche", values: ["500 / 2.500 €"] },
      { item: "Gazebo/ombra", values: ["500 / 3.000 €"] },
      { item: "Area giochi semplice", values: ["2.000 / 8.000 €"] },
      { item: "Cartellonistica", values: ["150 / 500 €"] },
      { item: "Illuminazione leggera", values: ["1.000 / 5.000 €"] },
    ],
    totals: [
      { label: "Minimo", value: "1.500 / 3.000 €" },
      { label: "Buono", value: "5.000 / 12.000 €" },
      { label: "Alto", value: "15.000 / 30.000 €" },
    ],
  },
  {
    id: "eventi-costi",
    title: "Eventi",
    columns: ["Stima"],
    rows: [
      { item: "Presentazione Casa Draghi", values: ["800 / 3.000 €"] },
      { item: "Giornata di Squadra", values: ["300 / 1.500 €"] },
      { item: "Evento con Pro Loco", values: ["1.500 / 6.000 €"] },
      { item: "Sponsor Night", values: ["300 / 1.500 €"] },
      { item: "Torneo basket 3vs3", values: ["500 / 2.500 €"] },
      { item: "Festa vecchie glorie", values: ["1.000 / 4.000 €"] },
    ],
  },
  {
    id: "comunicazione",
    title: "Comunicazione",
    columns: ["Stima"],
    rows: [
      { item: "Logo/restyling", values: ["300 / 1.000 €"] },
      { item: "PDF sponsor", values: ["300 / 900 €"] },
      { item: "Grafiche social", values: ["0 / 500 €"] },
      { item: "Foto/video", values: ["0 / 800 €"] },
      { item: "Stampa materiali", values: ["100 / 500 €"] },
      { item: "Cartellonistica", values: ["300 / 1.500 €"] },
    ],
    totals: [
      { label: "Minimo", value: "700 / 1.500 €" },
      { label: "Buono", value: "2.000 / 4.000 €" },
      { label: "Alto", value: "5.000 € +" },
    ],
  },
];

/* Quadro economico primo anno ----------------------------------- */
export const firstYearBudget = {
  target: "12.000 €",
  note: "Obiettivo realistico per il primo anno. Per arrivarci, alcune voci possono essere ridotte o coperte da partner tecnici (Mestiere in Campo).",
  rows: [
    { item: "Divise/abbigliamento", value: "5.000 €" },
    { item: "Offside Club", value: "2.000 €" },
    { item: "Muro dei Sostenitori", value: "1.000 €" },
    { item: "Campo Draghi", value: "1.000 €" },
    { item: "Comunicazione/grafiche", value: "1.000 €" },
    { item: "Evento lancio", value: "1.000 €" },
    { item: "Cassa da non reinvestire subito", value: "2.000 €" },
  ],
  totalLabel: "Totale destinazione",
  total: "13.000 €",
};

/* ---------------------------------------------------------------- */
/* 10. RESPONSABILI E VOLONTARI                                     */
/* ---------------------------------------------------------------- */

export const rolesIntro = {
  title: "Casa Draghi ha bisogno di mani, non solo di idee.",
  lead:
    "Serve una struttura semplice ma chiara. Non una burocrazia pesante: responsabilità definite, così che nessuna funzione resti scoperta e niente ricada sempre sulle stesse persone. All'inizio alcune figure possono coincidere.",
};

export interface Role {
  title: string;
  text: string;
}

export const roles: Role[] = [
  { title: "Direttivo", text: "Approva il progetto, autorizza attività e accordi, controlla entrate e uscite, garantisce trasparenza." },
  { title: "Responsabile generale", text: "Tiene insieme tutto: coordina, convoca riunioni, segue l'avanzamento e i prossimi passi." },
  { title: "Responsabile sponsor", text: "Lista aziende, proposte, appuntamenti, loghi, rinnovi e rapporti con gli sponsor." },
  { title: "Responsabile cassa", text: "Registra entrate/uscite, gestisce ricevute, divide secondo le regole interne, fa report." },
  { title: "Responsabile campo/impianto", text: "Controlla Campo Draghi, erba, linee, pali, protezioni, illuminazione e aree verdi." },
  { title: "Responsabile Offside Club", text: "Gestisce la club house, aperture/chiusure, terzi tempi, allestimento per sponsor ed eventi." },
  { title: "Responsabile eventi", text: "Organizza gli eventi, coordina Pro Loco, calendario, permessi, food/beverage e volontari." },
  { title: "Responsabile comunicazione", text: "Social, grafiche, racconto del progetto, foto prima/dopo, post sponsor e identità." },
  { title: "Responsabile volontari", text: "Elenco volontari, disponibilità, turni, Giornate di Squadra, coinvolgimento ex giocatori." },
  { title: "Responsabile Comune/Pro Loco", text: "Rapporti istituzionali, autorizzazioni, accordi e incontri." },
  { title: "Responsabile spogliatoi/magazzino", text: "Ordine, pulizia, Kit Room, scaffali, materiali e funzionalità degli spazi." },
];

export const teamDays = {
  title: "Giornate di Squadra",
  text: "Momenti di appartenenza, non obblighi. Si lavora insieme e si chiude con un terzo tempo.",
  activities: ["Pulizia", "Lavori", "Pittura", "Riordino", "Eventi", "Terzo tempo finale"],
};

/* ---------------------------------------------------------------- */
/* 11. COMUNE, PRO LOCO E TERRITORIO                                */
/* ---------------------------------------------------------------- */

export interface Partner {
  name: string;
  text: string;
  points: string[];
}

export const territory: Partner[] = [
  {
    name: "Comune",
    text: "L'impianto è comunale e la gestione è affidata ai Draghi fino al 2030. La richiesta non è solo economica: è una richiesta di collaborazione.",
    points: [
      "Autorizzazioni e patrocinio",
      "Targhe e pannelli",
      "Interventi su Playground e Area Famiglie",
      "Accesso a bandi e supporto tecnico",
      "Coordinamento con altri utilizzatori",
    ],
  },
  {
    name: "Pro Loco",
    text: "Un alleato prezioso per far uscire Casa Draghi dai confini della squadra, soprattutto su eventi e legame con il paese.",
    points: [
      "Eventi e feste annuali",
      "Food & beverage",
      "Volontari e supporto logistico",
      "Promozione locale",
      "Legame con il paese",
    ],
  },
  {
    name: "Altri utilizzatori",
    text: "Giovanili Rugby Feltre e Arcieri Feltre vanno informati e rispettati. L'impianto è uno spazio sportivo condiviso, con i Draghi come soggetto responsabile della gestione.",
    points: [
      "Informare gli altri utilizzatori",
      "Evitare sovrapposizioni",
      "Coinvolgerli quando utile",
      "Raccontare uno spazio condiviso",
    ],
  },
];

/* ---------------------------------------------------------------- */
/* 12. EVENTI                                                       */
/* ---------------------------------------------------------------- */

export interface EventItem {
  name: string;
  goal: string;
  what: string;
  value: string;
}

export const events: EventItem[] = [
  {
    name: "Casa Draghi Opening",
    goal: "Presentare il progetto e farlo percepire come reale.",
    what: "Presentazione progetto e sponsor, Muro dei Sostenitori, squadra, ex giocatori, terzo tempo e touch rugby.",
    value: "Raccoglie fondi e nuovi sostenitori, coinvolge il territorio, dà valore agli sponsor.",
  },
  {
    name: "Giornate di Squadra",
    goal: "Curare l'impianto insieme.",
    what: "Pulizia club house, riordino magazzino, sistemazioni esterne, pittura, montaggio pannelli, pranzo finale.",
    value: "Riduce il lavoro sui soliti, crea appartenenza, mostra impegno concreto agli sponsor.",
  },
  {
    name: "Evento con Pro Loco",
    goal: "Aprire Casa Draghi al paese.",
    what: "Food & beverage, musica, sport, rugby touch, basket, famiglie, presentazione interventi.",
    value: "Fa uscire il progetto dalla dimensione squadra, coinvolge la comunità, crea cassa.",
  },
  {
    name: "Festa vecchie glorie",
    goal: "Recuperare memoria e identità.",
    what: "Partita leggera, racconti, foto storiche, maglie vecchie, cena/grigliata, raccolta Piccolo Segno.",
    value: "Coinvolge ex giocatori, crea sostegno affettivo, rafforza l'identità dei Draghi.",
  },
  {
    name: "Sponsor Night",
    goal: "Far sentire gli sponsor parte del progetto.",
    what: "Ringraziamenti, presentazione lavori fatti, foto, report, prossimi obiettivi, rinnovi.",
    value: "Aumenta le possibilità di rinnovo e dà serietà a Casa Draghi.",
  },
  {
    name: "Torneo basket 3vs3",
    goal: "Far vivere il Playground Draghi.",
    what: "Torneo aperto sul campo basket recuperato, con sponsor e famiglie.",
    value: "Valorizza il primo intervento simbolico e coinvolge ragazzi e territorio.",
  },
];

/* ---------------------------------------------------------------- */
/* 13. PROSSIMI PASSI                                               */
/* ---------------------------------------------------------------- */

export const nextSteps: string[] = [
  "Approvazione interna del progetto",
  "Verifica convenzione e autorizzazioni",
  "Creazione del gruppo operativo",
  "Foto e mappa dell'impianto",
  "Rivisitazione del logo",
  "PDF sponsor",
  "Incontro con il Comune",
  "Incontro con la Pro Loco",
  "Lista delle prime aziende",
  "Primo obiettivo economico: 12.000 €",
  "Primo evento Casa Draghi",
  "Avvio del Progetto / Playground Draghi",
];

/* ---------------------------------------------------------------- */
/* 14. CTA FINALE + CONTATTI                                        */
/* ---------------------------------------------------------------- */

export const finalCta = {
  title: "Vuoi lasciare il segno?",
  text: "Casa Draghi si costruisce con chi gioca, con chi lavora, con chi sostiene e con chi crede che anche un campo amatoriale possa diventare un pezzo importante di territorio.",
  actions: ["Diventa sponsor", "Partecipa come volontario", "Sostieni Casa Draghi", "Contattaci"],
};

/**
 * CONTATTI — sostituisci i placeholder con i recapiti reali.
 * `email` viene usata anche come destinatario del form (mailto).
 */
export const contact = {
  email: "[email Draghi Feltre Rugby]",
  phone: "[telefono]",
  social: "[Instagram / Facebook]",
  team: "Draghi Feltre Rugby",
  venue: "Impianto sportivo di Arten — Fonzaso (BL)",
  interests: ["Sponsor", "Volontario", "Comune/Associazione", "Altro"],
};
