import type { PlanContent, Zone, Week } from "@/lib/plans";

const trainingPlan = [
  {
    weekNumber: 0,
    days: [
      {
        day: "Monday",
        activity: "N/A",
      },
      {
        day: "Tuesday",
        activity: "N/A",
      },
      {
        day: "Wednesday",
        activity: "N/A",
      },
      {
        day: "Thursday",
        activity: "N/A",
      },
      {
        day: "Friday",
        activity: "N/A",
      },
      {
        day: "Saturday",
        activity: "N/A",
      },
      {
        day: "Sunday",
        activity:
          "Hvile og restitusjon, med fokus på væske og tøying etter gårsdagens 90-minutters stiløp.",
      },
    ],
  },
  {
    weekNumber: 1,
    days: [
      {
        day: "Monday",
        activity: "40 min rolig løpetur på sti, sone 1",
      },
      {
        day: "Tuesday",
        activity:
          "Intervaller på flatt underlag, 10 x 400m i sone 4, 90 sek pause mellom intervallene",
      },
      {
        day: "Wednesday",
        activity: "50 min moderat løpetur, sone 2, helst på lettløpt sti",
      },
      {
        day: "Thursday",
        activity: "Tempoløp, 25 min på sti i sone 3",
      },
      {
        day: "Friday",
        activity: "Hvile eller aktiv restitusjon",
      },
      {
        day: "Saturday",
        activity: "Langtur, 100 min på sti, sone 1",
      },
      {
        day: "Sunday",
        activity: "Hvile",
      },
    ],
  },
  {
    weekNumber: 2,
    days: [
      {
        day: "Monday",
        activity: "45 min rolig løpetur på sti, sone 1",
      },
      {
        day: "Tuesday",
        activity:
          "Intervaller på flatt underlag, 8 x 600m i sone 4, 2 min pause mellom dragene",
      },
      {
        day: "Wednesday",
        activity: "55 min moderat løpetur på sti, sone 2",
      },
      {
        day: "Thursday",
        activity: "Tempoløp, 30 min på sti, sone 3",
      },
      {
        day: "Friday",
        activity: "Hvile eller aktiv restitusjon",
      },
      {
        day: "Saturday",
        activity: "Langtur, 110 min på sti, sone 1",
      },
      {
        day: "Sunday",
        activity: "Hvile",
      },
    ],
  },
  {
    weekNumber: 3,
    days: [
      {
        day: "Monday",
        activity: "50 min rolig løpetur på sti, sone 1",
      },
      {
        day: "Tuesday",
        activity:
          "Intervaller på flatt underlag, 5 x 1000m i sone 4, 2,5 min pause mellom dragene",
      },
      {
        day: "Wednesday",
        activity: "60 min moderat løpetur på sti, sone 2",
      },
      {
        day: "Thursday",
        activity: "Tempoløp, 35 min på sti, sone 3",
      },
      {
        day: "Friday",
        activity: "Hvile eller aktiv restitusjon",
      },
      {
        day: "Saturday",
        activity: "Langtur, 120 min på sti, sone 1",
      },
      {
        day: "Sunday",
        activity: "Hvile",
      },
    ],
  },
  {
    weekNumber: 4,
    days: [
      {
        day: "Monday",
        activity: "55 min rolig løpetur på sti, sone 1",
      },
      {
        day: "Tuesday",
        activity: "Intervaller, 6 x 800m i sone 4, 3 min pause mellom dragene",
      },
      {
        day: "Wednesday",
        activity: "65 min moderat løpetur på sti, sone 2",
      },
      {
        day: "Thursday",
        activity: "Tempoløp, 40 min på sti, sone 3",
      },
      {
        day: "Friday",
        activity: "Hvile eller lett alternativ trening",
      },
      {
        day: "Saturday",
        activity: "Langtur, 90 min på sti, sone 1",
      },
      {
        day: "Sunday",
        activity: "Hvile",
      },
    ],
  },
  {
    weekNumber: 5,
    days: [
      {
        day: "Monday",
        activity: "40 min rolig løpetur på sti, sone 1",
      },
      {
        day: "Tuesday",
        activity:
          "Intervaller på flatt underlag, 6 x 400m i sone 5, full restitusjon mellom dragene",
      },
      {
        day: "Wednesday",
        activity: "40 min moderat løpetur på sti, sone 2",
      },
      {
        day: "Thursday",
        activity: "20 min lett jogg med noen strides, fokus på mobilitet",
      },
      {
        day: "Friday",
        activity:
          "Race day – 10 km, sikt på fart i sone 4 til sone 5 i tråd med løpsstrategien",
      },
      {
        day: "Saturday",
        activity: "Valgfri lett gåtur eller hvile",
      },
      {
        day: "Sunday",
        activity: "Hvile og restitusjon",
      },
    ],
  },
];

const weeks: Week[] = trainingPlan.map((w) => ({
  week: w.weekNumber,
  days: w.days.map((d) => d.activity),
}));

const DAY_LABELS: Record<string, string> = {
  Monday: "Man",
  Tuesday: "Tir",
  Wednesday: "Ons",
  Thursday: "Tor",
  Friday: "Fre",
  Saturday: "Lør",
  Sunday: "Søn",
};

const dayLabels = trainingPlan[0].days.map(
  (d) => DAY_LABELS[d.day] ?? d.day.slice(0, 3),
);

const zones: Zone[] = [
  { zone: 1, name: "Lett", pace: "5:50–6:10 /km" },
  { zone: 2, name: "Moderat", pace: "5:30–5:50 /km" },
  { zone: 3, name: "Tempo", pace: "5:00–5:20 /km" },
  { zone: 4, name: "Intervall", pace: "4:30–4:50 /km" },
  { zone: 5, name: "Racing", pace: "4:10–4:30 /km" },
];

export const plan: PlanContent = {
  metaTitle: "10 km-løp",
  accent: "amber",
  eyebrow: "10 km",
  title: "10 km-løp 21. juni 2024 kl 19:00",
  lede: "La oss ta dette 10 km-løpet med energi og presisjon!",
  tagline:
    "Dette er ikke bare en løpetur; det er beviset på hardt arbeid og dedikasjon.",
  meta: [
    { label: "Mål", value: "40–45 min" },
    { label: "VDOT", value: "48" },
  ],
  dayLabels: dayLabels,
  weeks: weeks,
  zones: zones,
  intro: (
    <>
      <p>
        Når man utarbeider et treningsprogram for et 10 km-løp, er det
        avgjørende å bygge på prinsippene i Dr. Jack Daniels&apos; &quot;Running
        Formula.&quot; Daniels, kjent for sin vitenskapelige tilnærming til
        distanseløping, understreker betydningen av kontrollert intensitet for å
        maksimere treningsutbyttet uten å overtrene. Filosofien hans kan
        oppsummeres i noen nøkkelprinsipper: tilpasset tempo basert på nåværende
        kondisjonsnivå, en balansert blanding av intensitetene VDOT-tabellene
        foreslår, og restitusjonens avgjørende rolle.
      </p>

      <p>
        For å tilpasse disse prinsippene til målet ditt om å fullføre 10
        km-løpet på mellom 40 og 45 minutter, er fokuset på tre hovedområder: 1)
        Aerob utholdenhet gjennom moderate løpeturer og restitusjonsjogg, 2)
        Løpeøkonomi og hastighetsutvikling gjennom intervalltrening, og 3)
        Optimal restitusjon for å støtte de harde treningsdagene og forebygge
        skader.
      </p>

      <p>
        Aerob utholdenhet er kritisk for 10 km-distansen. De moderate løpeturene
        bør gå i et tempo som føles utfordrende, men bærekraftig, og har som mål
        å bygge utholdenheten du trenger på løpsdagen. Vekt på jevn innsats
        framfor fart hjelper musklene, senene og leddene med å forberede seg på
        belastningen i løpet.
      </p>

      <p>
        Løpeøkonomi og hastighetsutvikling drives fram gjennom intervalltrening.
        Ved å legge inn intervaller i sone 4-5, slik Dr. Daniels&apos;
        VDOT-tabeller anbefaler basert på dine personlige rekorder, forbedrer du
        løpesteget og pusteeffektiviteten. Det er viktig å følge opp disse harde
        øktene med restitusjonsjogg eller hviledager, så kroppen får hente seg
        inn og bli sterkere.
      </p>

      <p>
        Optimal restitusjon handler ikke bare om å ta fri; den er en integrert
        del av treningsopplegget. Disse dagene sørger for at kroppen reparerer
        mikroskadene fra de harde øktene, og bidrar til å bygge en sterkere og
        mer robust løper. Aktiv restitusjon, som lett sykling eller svømming,
        kan også være nyttig for å fremme restitusjonen uten å legge til
        løpsrelatert belastning.
      </p>
    </>
  ),
  outro: (
    <>
      <p>
        I denne tilpassede treningsplanen, basert på Dr. Daniels&apos; metoder,
        har vi sørget for en gradvis økning i både volum og intensitet over de
        neste fem ukene, med et spesielt fokus på intervalløkter som bygger seg
        opp mot en topp rett før en nøye timet nedtrapping. Målet med
        nedtrappingen er å komme til startstreken frisk, uthvilt og løpesugen.
      </p>
      <p>
        Gjennom hele treningsperioden, husk å lytte til kroppen og justere
        treningsintensiteten og -volumet etter behov. Væske, ernæring og god
        søvn er også avgjørende deler av forberedelsene. Ved å følge disse
        prinsippene posisjonerer du deg for suksess på løpsdagen og legger
        grunnlaget for en givende og hyggelig 10 km-opplevelse.
      </p>
      <h3>VDOT-soner</h3>
      <p>
        Med en personlig rekord på 43 minutter på 10 km kan vi bruke Jack
        Daniels&apos; VDOT-tabeller til å estimere løpesonene dine. Disse sonene
        er basert på VDOT-scoren hans, som er et mål på løpekapasiteten eller
        kondisjonen din. Tabellene tilordner et VDOT-tall basert på løpstider,
        som igjen brukes til å beregne treningsintensiteter for ulike typer
        økter. For en 10 km-tid på 43 minutter vil VDOT-scoren din ligge omtrent
        i området 48-49. La oss bruke en VDOT-score på 48 til å estimere
        løpesonene dine:
      </p>
      <ul>
        <li>
          Sone 1 (Enkel/Lett løping): Dette er restitusjons- og langtursonen
          din. Tempoet her skal føles lett og være bærekraftig over lang tid.
          For VDOT 48 vil dette være omtrent 5:50 til 6:10 per km.
        </li>
        <li>
          Sone 2 (Moderat): Brukes på litt lengre løpeturer der du fortsatt kan
          føre en samtale. For en VDOT på 48 er dette omtrent 5:30 til 5:50 per
          km.
        </li>
        <li>
          Sone 3 (Tempo): Denne sonen er for trening i terskelfart, der du kan
          snakke i korte setninger. For en VDOT på 48 vil dette være rundt 5:00
          til 5:20 per km.
        </li>
        <li>
          Sone 4 (Intervalltrening): Denne sonen er for hardere arbeid som
          forbedrer VO2 maks og løpeøkonomi. Typisk vil dette være omtrent 4:30
          til 4:50 per km for VDOT 48.
        </li>
        <li>
          Sone 5 (Racing/Speedwork): Denne sonen er delt inn i flere subsoner
          (5a, 5b, 5c) som representerer alt fra nær terskelfart til fart over
          VO2 maks. For VDOT 48 kan dette variere fra 4:10 per km til 4:30 per
          km for kortere repeterte drag.
        </li>
      </ul>
      <p>
        Det er viktig å merke seg at disse estimatene er omtrentlige og kan
        variere basert på individuelle forskjeller, dagsform, værforhold og
        andre faktorer. Daniels&apos; formel forutsetter optimale løpeforhold og
        kan justeres noe basert på din spesifikke treningssituasjon og dine mål.
      </p>
    </>
  ),
};
