import type { PlanContent, Week, Zone } from "@/lib/plans";

const REST = "Hvile";
const OPTIONAL_WALK =
  "Hvile, eller en rolig gåtur på 20–30 minutter hvis du har lyst.";

const min = (n: number) => (n === 1 ? "1 minutt" : `${n} minutter`);

/** The standard Tuesday/Thursday walk/run session, explained in plain words. */
const walkRun = (reps: number, jog: number, walk: number) =>
  [
    "Gå/løp-økt",
    `Gå i 5 minutter for å varme opp. Jogg så rolig i ${min(jog)} og gå i ${min(walk)}, og gjenta det ${reps} ganger. Avslutt med 5 minutter rolig gange. Joggen skal være så rolig at du kan prate underveis.`,
    `Kort: 5 min gange, ${reps} × (${jog} min jogg / ${walk} min gange), 5 min gange`,
  ].join(" · ");

/** The every-other-week hill session, Ingebrigtsen style. */
const hills = (reps: number) =>
  [
    "Bakkeøkt",
    `Finn en jevn bakke som ikke er for bratt. Varm opp med 5 minutter gange og 5 minutter lett jogg. Løp så kvikt og kontrollert opp bakken i 25 sekunder, gå rolig ned igjen i 1 minutt, og gjenta det ${reps} ganger. Ta 1 minutt ekstra pause, og gjør en serie til med ${reps} drag. Avslutt med 10 minutter rolig gange. Aldri sprint: det siste draget skal se ut som det første.`,
    `Kort: 10 min oppvarming, 2 × ${reps} × (25 sek opp / 1 min ned), 10 min nedtrapping`,
  ].join(" · ");

/** A longer Saturday walk/run where you walk the remaining time. */
const longWalkRun = (
  total: number,
  reps: number,
  jog: number,
  walk: number,
  note?: string,
) =>
  [
    "Gå/løp-økt, litt lengre",
    `${note ? note + " " : ""}Gå i 5 minutter først. Jogg så rolig i ${min(jog)} og gå i ${min(walk)}, og gjenta det ${reps} ganger. Gå resten av tiden til du har ${total} minutter til sammen.`,
    `Kort: ${total} min, ${reps} × (${jog} min jogg / ${walk} min gange)`,
  ].join(" · ");

/** A continuous jog with a walk before and after. */
const continuous = (jog: number, note?: string) =>
  [
    "Sammenhengende jogg",
    `Gå i 5 minutter. Jogg så rolig i ${jog} minutter uten pause, og gå 5 minutter til slutt. Blir det tungt, ta en gåpause på ett minutt og fortsett; det teller fortsatt.${note ? " " + note : ""}`,
    `Kort: 5 min gange, ${jog} min jogg, 5 min gange`,
  ].join(" · ");

const week = (n: number, tue: string, thu: string, sat: string): Week => ({
  week: n,
  days: [REST, tue, OPTIONAL_WALK, thu, REST, sat, OPTIONAL_WALK],
});

const weeks: Week[] = [
  week(
    1,
    walkRun(8, 1, 2),
    walkRun(8, 1, 2),
    "Gåtur med små joggedrag · Gå raskt i 30 minutter. Fem ganger underveis jogger du rolig i ett minutt, så går du videre. · Kort: 30 min rask gange med 5 × 1 min jogg",
  ),
  week(
    2,
    walkRun(8, 1, 2),
    hills(8),
    "Gåtur med små joggedrag · Gå raskt i 35 minutter. Seks ganger underveis jogger du rolig i ett minutt, så går du videre. · Kort: 35 min rask gange med 6 × 1 min jogg",
  ),
  week(3, walkRun(7, 2, 2), walkRun(7, 2, 2), longWalkRun(40, 6, 2, 3)),
  week(
    4,
    walkRun(5, 2, 2),
    hills(10),
    "Rolig gåtur · Rolig uke. Bare en behagelig gåtur på 30 minutter, ingen jogg. Kroppen tar igjen det du har bygd de tre siste ukene. · Kort: 30 min gange",
  ),
  week(5, walkRun(6, 3, 2), walkRun(6, 3, 2), longWalkRun(40, 5, 3, 2)),
  week(
    6,
    walkRun(4, 3, 2),
    hills(12),
    "Gåtur med joggedrag · Rolig uke. Gå raskt i 35 minutter, og jogg rolig i 2 minutter tre ganger underveis. · Kort: 35 min rask gange med 3 × 2 min jogg",
  ),
  week(7, walkRun(5, 4, 2), walkRun(5, 4, 2), longWalkRun(45, 4, 5, 2)),
  week(
    8,
    walkRun(4, 4, 2),
    hills(15),
    longWalkRun(
      35,
      3,
      5,
      3,
      "Rolig uke, så denne er kortere enn forrige lørdag.",
    ),
  ),
  week(9, walkRun(3, 8, 2), walkRun(4, 6, 1), longWalkRun(45, 3, 8, 2)),
  week(
    10,
    walkRun(2, 10, 2),
    hills(20),
    "Rolig gåtur med litt jogg · Rolig uke. Gå rolig i 40 minutter, og jogg rolig i 5 minutter to ganger underveis. · Kort: 40 min gange med 2 × 5 min jogg",
  ),
  week(11, walkRun(2, 12, 2), continuous(20), continuous(25)),
  week(
    12,
    continuous(15, "Kort og lett, du skal være uthvilt til lørdag."),
    hills(15),
    "Mål: 30 minutter sammenhengende · Gå i 5 minutter. Jogg så rolig i 30 minutter, og gå 5 minutter til slutt. Ta det rolig, målet her er å fullføre med et smil, ikke å sette rekord. · Kort: 5 min gange, 30 min jogg, 5 min gange",
  ),
];

const zones: Zone[] = [
  { zone: 1, name: "Gange", pace: "Rask, men avslappet" },
  { zone: 2, name: "Rolig jogg", pace: "Du kan prate i hele setninger" },
  { zone: 3, name: "Bakkedrag", pace: "Kvikt og kontrollert, aldri sprint" },
];

export const plan: PlanContent = {
  metaTitle: "From Stroll to Strong",
  accent: "rose",
  eyebrow: "Gå-til-løp-plan",
  title: "From Stroll to Strong",
  lede: (
    <>
      En rolig gå-til-løp-plan for deg som vil bygge løpevanen uten å bli
      skadet. Tolv uker, tre økter i uka, og hver eneste økt skal føles
      overkommelig.
    </>
  ),
  tagline: "Å gå er ikke juks. Det er planen.",
  meta: [
    { label: "Økter", value: "3 per uke" },
    { label: "Bakker", value: "annenhver uke" },
    { label: "Mål", value: "30 min sammenhengende" },
  ],
  dayLabels: ["Man", "Tir", "Ons", "Tor", "Fre", "Lør", "Søn"],
  weeks,
  zones,
  intro: (
    <>
      <p>
        Den vanligste grunnen til at folk slutter å løpe er ikke manglende
        motivasjon. Det er at det ble for hardt for tidlig, og at kroppen sa
        ifra. Denne planen snur på det: gange er grunnmuren, joggen legges på
        litt om gangen, og du skal aldri avslutte en økt helt tom. Klarer du å
        snakke i hele setninger mens du jogger, gjør du det riktig.
      </p>
      <p>
        Ta det rolig. Målet her er ikke fart. Målet er å kunne jogge i 30
        minutter uten stopp om tolv uker, og fortsatt ha lyst til å gjøre det
        igjen uka etter. Alt annet, som kilometer og tempo, kommer av seg selv
        senere.
      </p>
      <p>
        Det er lov å løpe på mølle, men målet er å komme seg ut. Frisk luft,
        litt ujevnt underlag og et sted å gå til gjør vanen lettere å holde på,
        og kroppen får en variasjon den ikke får på et flatt belte. Bruk mølla
        når været eller hverdagen krever det, ikke som standard.
      </p>
      <h3>Slik er uka lagt opp</h3>
      <p>
        Tre økter i uka: tirsdag, torsdag og lørdag. Mandag og fredag er hvile,
        onsdag og søndag er valgfri rolig gåtur. Belastningen går i bølger, ikke
        i en rett strek oppover: uke 4, 6, 8 og 10 er bevisst lettere enn uka
        før, slik at sener, ledd og hode får tid til å ta igjen beina. Fremgang
        du ikke kjenner i kroppen dagen etter, er den beste fremgangen.
      </p>
      <h3>Bakkeøkta annenhver uke</h3>
      <p>
        Annenhver torsdag byttes gå/løp-økta ut med korte bakkedrag etter
        Ingebrigtsen-oppskriften: 25 sekunder opp bakken, ett minutt rolig gange
        ned, i to serier med ett ekstra minutt pause mellom. Målformatet er 2 ×
        20 drag, men vi starter på 2 × 8 og bygger oss dit over ti uker. Siste
        bakkeøkt, to dager før målløpet, er med vilje litt kortere.
      </p>
      <p>
        Bakken er valgt fordi den er skånsom: farten er lav selv om innsatsen er
        kvikk, hvert drag er kort, og landingene er mykere enn på flatmark. Det
        gir sterke legger og hofter og en bedre løpsteknikk uten å slite på
        kroppen. Finn en jevn bakke med 4–8 % stigning, hold farten slik at drag
        nummer 40 ser ut som drag nummer 1, og gå alltid rolig ned igjen. En
        liten oppvarming og nedtrapping er bakt inn i økta.
      </p>
      <h3>Slik leser du planen</h3>
      <p>
        Hver rute i planen forklarer økta i vanlige ord, med en kort
        oppsummering nederst for deg som etter hvert bare vil ha tallene. «5 ×
        (2 min jogg / 3 min gange)» betyr: jogg rolig i to minutter, gå i tre,
        og gjør det fem ganger. Du trenger ikke forstå alt med en gang. Les ruta
        for i dag, og gjør det den sier.
      </p>
    </>
  ),
  outro: (
    <>
      <h3>Slik holder du deg skadefri</h3>
      <ul>
        <li>
          <strong>Bølger, ikke rett linje.</strong> Føles en uke tung, gjenta
          den. Planen løper ingen steder. Det er du som skal gjøre det, helst i
          mange år.
        </li>
        <li>
          <strong>Sår eller vond?</strong> Stive og støle muskler er greit.
          Smerte som endrer måten du løper på, som er verre dagen etter, eller
          som sitter i ett punkt (skinnlegg, akilles, kne) er et stoppsignal: to
          dagers hvile, og start så uka på nytt.
        </li>
        <li>
          <strong>Rolig betyr rolig.</strong> Rolig jogg er pratetempo. Blir du
          andpusten, gå. Det er ikke svakhet, det er planen.
        </li>
        <li>
          <strong>Sko og underlag.</strong> Løp i sko som er behagelige og ikke
          utslitte. Veksle gjerne mellom grus, sti og asfalt, og hold
          bakkedragene på jevnt underlag.
        </li>
        <li>
          <strong>Styrke, 2 × 10 min i uka.</strong> Tåhev, knebøy ned til en
          stol, hoftehev og utfall. Lite og ofte slår mye og sjelden.
        </li>
        <li>
          <strong>Søvn og mat.</strong> Restitusjonen skjer mens du sover. Spis
          noe innen en time etter økt.
        </li>
      </ul>
      <h3>Etter uke 12</h3>
      <p>
        Du kan nå jogge 30 minutter sammenhengende. Hold tre økter i uka i minst
        en måned før du øker noe som helst, og øk da bare én økt om gangen med
        fem minutter. Neste naturlige mål er 5 km uten pause, eller rett og
        slett å holde vanen gjennom vinteren. Bakkeøkta kan du beholde annenhver
        uke så lenge du vil.
      </p>
    </>
  ),
};
