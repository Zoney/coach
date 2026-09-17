import type { PlanContent, Week, Zone } from "@/lib/plans";

const weeks: Week[] = [
  {
    week: 0,
    days: [
      "",
      "",
      "",
      "",
      "",
      "Rolig langtur, 60 min i sone 2.",
      "Hviledag eller veldig lett aktivitet",
    ],
  },
  {
    week: 1,
    days: [
      "Rolig langtur, 70 min i sone 2",
      "Lett jogg, 40 min i sone 1",
      "Intervall · 10 min oppv · 5x4 min sone 4 · 10 min nedjogg",
      "Lett jogg, 50 min i sone 1-2",
      "Hviledag/aktiv restitusjon",
      "Progressiv langtur, 1t 45 min",
      "Lett jogg, 70 min i sone 1",
    ],
  },
  {
    week: 2,
    days: [
      "Rolig langtur, 80 min i sone 2",
      "Lett jogg, 45 min i sone 1",
      "Intervall · 15 min oppv · 4x5 min sone 4 · 10 min nedjogg",
      "Lett jogg, 60 min i sone 1-2",
      "Hviledag/aktiv restitusjon",
      "Langtur, 2 timer i sone 2-3",
      "Lett jogg, 75 min i sone 1",
    ],
  },
  {
    week: 3,
    days: [
      "Rolig langtur, 90 min i sone 2",
      "Lett jogg, 50 min i sone 1",
      "Intervall · 15 min oppv · 5x4 min sone 4-5 · 15 min nedjogg",
      "Lett jogg, 65 min i sone 1-2",
      "Hviledag/aktiv restitusjon",
      "Langtur, 2t 15 min i sone 2",
      "Lett jogg, 80 min i sone 1",
    ],
  },
  {
    week: 4,
    days: [
      "Rolig langtur, 1t 30 min i sone 2",
      "Lett jogg, 55 min i sone 1",
      "Intervall · 20 min oppv · 6x4 min sone 4-5 · 15 min nedjogg",
      "Lett jogg, 70 min i sone 1-2",
      "Hviledag/aktiv restitusjon",
      "Langtur, 3 timer i sone 2",
      "Lett jogg, 90 min i sone 1",
    ],
  },
  {
    week: 5,
    days: [
      "Rolig langtur, 60 min i sone 2",
      "Lett jogg, 30 min i sone 1",
      "Intervall · 10 min oppv · 4x2 min sone 3 · 10 min nedjogg",
      "Hviledag",
      "Lett jogg, 30 min i sone 1",
      "Hviledag",
      "Maraton",
    ],
  },
];

const zones: Zone[] = [
  { zone: 1, name: "Lett", pace: "5:50–6:10 /km" },
  { zone: 2, name: "Moderat", pace: "5:30–5:50 /km" },
  { zone: 3, name: "Tempo", pace: "5:00–5:20 /km" },
  { zone: 4, name: "Intervall", pace: "4:30–4:50 /km" },
  { zone: 5, name: "Racing", pace: "4:10–4:30 /km" },
];

export const plan: PlanContent = {
  metaTitle: "Maraton 4. mai",
  accent: "sky",
  eyebrow: "Maraton",
  title: "Maraton 4. mai kl 11",
  lede: "Få løpt den derre maratonen, da!",
  tagline: "Det skal ikke være lett",
  meta: [
    { label: "Mål", value: "3:52" },
    { label: "VDOT", value: "48" },
  ],
  dayLabels: ["Dag 1", "Dag 2", "Dag 3", "Dag 4", "Dag 5", "Dag 6", "Dag 7"],
  weeks: weeks,
  zones: zones,
  intro: (
    <>
      <p>
        Når man utarbeider et treningsprogram med mål om å fullføre en maraton,
        er det essensielt å bygge på prinsippene til Dr. Jack Daniels og hans
        velprøvde &quot;Running Formula.&quot; Daniels, en anerkjent ekspert
        innen løpevitenskap, understreker betydningen av presis
        intensitetskontroll for å maksimere treningsfordelene uten å overbelaste
        kroppen. Hans filosofi kan oppsummeres i noen nøkkelprinsipper:
        individualisert tempo basert på nåværende kondisjonsnivå, en balansert
        blanding av intensitetene VDOT-tabellene foreslår, og viktigheten av
        restitusjon.
      </p>

      <p>
        For å tilpasse denne tilnærmingen til ditt mål om å fullføre en maraton
        på 3 timer og 52 minutter, er fokus på tre hovedområder: 1) Aerob
        utholdenhet gjennom langturer og lett jogging, 2) Løpeøkonomi og
        hastighetsutvikling gjennom intervalltrening, og 3) Optimal restitusjon
        for å støtte hardere treningsdager og forhindre skader.
      </p>

      <p>
        Aerob utholdenhet Langturene er kritiske for å bygge opp den aerobe
        utholdenheten som er nødvendig for maraton. Disse øktene bør utføres i
        et tempo som føles moderat utfordrende, men likevel bærekraftig over
        tid. Fokuset her er på tid tilbragt på føttene fremfor distanse, noe som
        forbereder muskler, sener, og ledd på belastningen av løpsdagen.
      </p>

      <p>
        Løpeøkonomi og hastighetsutvikling Intervalltreningen er nøkkelen til å
        forbedre løpeøkonomien din og øke hastigheten. Ved å innarbeide
        intervaller i sone 4-5, som Dr. Daniels&apos; VDOT-tabeller vil tilrå
        basert på dine personlige rekorder, stimuleres effektiviteten i løpesteg
        og pusteteknikk. Det er viktig å følge opp disse hardere øktene med lett
        jogging eller hvile, for å tillate kroppen å restituere og bygge seg
        sterkere.
      </p>

      <p>
        Optimal restitusjon Hviledager og lette joggedager er ikke bare
        &quot;fridager&quot;; de er en integrert del av treningsplanen. Disse
        dagene sikrer at kroppen heler fra mikroskadene som oppstår under de
        hardere treningsøktene, og de bidrar til å bygge en sterkere, mer
        utholdende løper. Aktiv restitusjon, som lett sykling eller svømming,
        kan også være verdifulle verktøy for å fremme restitusjonen uten å legge
        til løpsrelatert belastning.
      </p>
    </>
  ),
  outro: (
    <>
      <p>
        I denne tilpassede treningsplanen, basert på Dr. Daniels&apos; metoder,
        har vi sørget for gradvis økning av både volum og intensitet over fem
        uker, med et spesielt fokus på en langtur som bygger opp til 3 timer i
        uke 4. Dette sikrer at du når toppen av din aerobe kapasitet og
        løpeøkonomi rett før en nøye timet nedtrapping. Målet med nedtrappingen
        er å komme til startstreken frisk, hvilt, og med en følelse av å være
        &quot;sulten&quot; etter å løpe.
      </p>
      <p>
        Gjennom hele treningsperioden, husk å lytte til kroppen din og justere
        treningsintensiteten og -volumet etter behov. Hydrering, ernæring, og
        god søvn er også avgjørende komponenter i din forberedelse. Ved å følge
        disse prinsippene, posisjonerer du deg selv for suksess på løpsdagen og
        setter scenen for en både givende og hyggelig maratonopplevelse.
      </p>
      <h3>VDOT soner</h3>
      <p>
        Med en personlig rekord på 10 km på 43 minutter, kan vi bruke Jack
        Daniels&apos; VDOT-tabeller for å estimere dine løpesoner. Disse sonene
        er basert på hans VDOT-score, som er et mål på din løpekapasitet eller
        kondisjon. Tabellene tilordner et VDOT-nummer basert på løpstider, som
        igjen brukes til å beregne treningsintensiteter for ulike typer trening.
        For en 10 km tid på 43 minutter, vil din VDOT-score være omtrentlig i
        området 48-49. La oss bruke en VDOT-score på 48 til å estimere dine
        løpesoner:
      </p>
      <ul>
        <li>
          Sone 1 (Enkel/Lett løping): Dette er din restitusjons- og langtursone.
          Hastigheten her skal føles lett og være bærekraftig over lang tid. For
          VDOT 48, vil dette være ca. 5:50 til 6:10 per km.
        </li>
        <li>
          Sone 2 (Moderat): Brukes for litt lengre løpeturer hvor du fremdeles
          kan føre en samtale. For en VDOT på 48, er dette omtrent 5:30 til 5:50
          per km.
        </li>
        <li>
          Sone 3 (Tempo): Denne sonen er for trening ved terskelfarten, hvor du
          kan snakke i korte setninger. For en VDOT på 48, vil dette være rundt
          5:00 til 5:20 per km.
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
          km for kortere repeterende innsatser.
        </li>
      </ul>
      <p>
        Det er viktig å merke seg at disse estimatene er omtrentlige og kan
        variere basert på individuelle forskjeller, dagens form, værforhold, og
        andre faktorer. Daniels&apos; formel antar optimal løpeforhold og kan
        justeres noe basert på din spesifikke treningssituasjon og mål.
      </p>
    </>
  ),
};
