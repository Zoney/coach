import type { PlanContent, Week, Zone } from "@/lib/plans";

const weeks: Week[] = [
  {
    week: 1,
    days: [
      "Hvile",
      "8 km Sone 1",
      "6 km Sone 2",
      "8 km Sone 1",
      "Hvile",
      "5 x 800m Sone 4, med 400m jogg mellom",
      "12 km Sone 1",
    ],
  },
  {
    week: 2,
    days: [
      "Hvile",
      "8 km Sone 1",
      "6 km Sone 3",
      "8 km Sone 1",
      "Hvile",
      "Fartslek: 8 km med 1 min Sone 5 / 2 min Sone 1",
      "14 km Sone 1",
    ],
  },
  {
    week: 3,
    days: [
      "Hvile",
      "10 km Sone 1",
      "7 km Sone 2",
      "10 km Sone 1",
      "Hvile",
      "6 x 600m Sone 4, med 300m jogg mellom",
      "15 km Sone 1",
    ],
  },
  {
    week: 4,
    days: [
      "Hvile",
      "8 km Sone 1",
      "8 km Sone 3",
      "8 km Sone 1",
      "Hvile",
      "Fartslek: 10 km med 1 min Sone 5 / 2 min Sone 1",
      "16 km Sone 1",
    ],
  },
  {
    week: 5,
    days: [
      "Hvile",
      "10 km Sone 1",
      "8 km Sone 2",
      "10 km Sone 1",
      "Hvile",
      "8 x 400m Sone 4, med 200m jogg mellom",
      "17 km Sone 1",
    ],
  },
  {
    week: 6,
    days: [
      "Hvile",
      "10 km Sone 1",
      "8 km Sone 3",
      "10 km Sone 1",
      "Hvile",
      "Fartslek: 12 km med 1 min Sone 5 / 2 min Sone 1",
      "18 km Sone 1",
    ],
  },
  {
    week: 7,
    days: [
      "Hvile",
      "12 km Sone 1",
      "9 km Sone 2",
      "12 km Sone 1",
      "Hvile",
      "10 x 300m Sone 4, med 100m jogg mellom",
      "19 km Sone 1",
    ],
  },
  {
    week: 8,
    days: [
      "Hvile",
      "10 km Sone 1",
      "9 km Sone 3",
      "10 km Sone 1",
      "Hvile",
      "Fartslek: 14 km med 1 min Sone 5 / 2 min Sone 1",
      "20 km Sone 1",
    ],
  },
  {
    week: 9,
    days: [
      "Hvile",
      "12 km Sone 1",
      "10 km Sone 2",
      "12 km Sone 1",
      "Hvile",
      "12 x 200m Sone 4, med 100m jogg mellom",
      "21 km Sone 1",
    ],
  },
  {
    week: 10,
    days: [
      "Hvile",
      "12 km Sone 1",
      "10 km Sone 3",
      "12 km Sone 1",
      "Hvile",
      "Fartslek: 14 km med 1 min Sone 5 / 2 min Sone 1",
      "22 km Sone 1",
    ],
  },
  {
    week: 11,
    days: [
      "Hvile",
      "10 km Sone 1",
      "10 km Sone 2",
      "10 km Sone 1",
      "Hvile",
      "10 x 400m Sone 4, med 200m jogg mellom",
      "16 km Sone 1",
    ],
  },
  {
    week: 12,
    days: [
      "Hvile",
      "8 km Sone 1",
      "8 km Sone 2",
      "6 km Sone 1",
      "Hvile",
      "6 km Sone 1 med 3 x 100m strides",
      "Halvmaratonløp",
    ],
  },
];

const zones: Zone[] = [
  { zone: 1, name: "Lett", pace: "6:10–6:55 /km" },
  { zone: 2, name: "Moderat", pace: "5:45–6:00 /km" },
  { zone: 3, name: "Tempo", pace: "5:20–5:40 /km" },
  { zone: 4, name: "Intervall", pace: "4:55–5:10 /km" },
  { zone: 5, name: "Racing", pace: "4:30–4:50 /km" },
];

export const plan: PlanContent = {
  metaTitle: "Road to half",
  accent: "violet",
  eyebrow: "Halvmaraton",
  title: "Road to half",
  lede: "Litt etter litt..",
  meta: [
    { label: "Fra", value: "40 km/uke" },
    { label: "Til", value: "50 km/uke" },
  ],
  dayLabels: ["Dag 1", "Dag 2", "Dag 3", "Dag 4", "Dag 5", "Dag 6", "Dag 7"],
  weeks: weeks,
  zones: zones,
  intro: (
    <>
      <p>
        Denne løpeplanen er designet for å hjelpe deg med å øke din ukentlige
        løpedistanse fra 40 km til 50 km, og samtidig forberede deg på å løpe en
        god tid på halvmaraton. Planen inneholder en variert blanding av rolige
        løpeturer, tempoøkter, intervalltrening og langkjøringer.
      </p>
      <h3>Hvordan utføre øktene</h3>
      <ul>
        <li>
          <strong>Fartslek:</strong> Veksle mellom rask og rolig løping, for
          eksempel 1 minutt raskt (sone 5) etterfulgt av 2 minutter rolig (sone
          1).
        </li>
        <li>
          <strong>Intervaller:</strong> Løp en bestemt distanse eller tid
          (f.eks. 800 m eller 4 minutter) i høy intensitet (sone 4), med rolig
          jogg eller gåpause mellom.
        </li>
        <li>
          <strong>Langkjøring:</strong> En lengre tur i rolig tempo (sone 1) for
          å bygge utholdenhet.
        </li>
        <li>
          <strong>Tempoløp:</strong> Løp i et moderat til raskt tempo (sone 3)
          som du kan holde over en lengre periode.
        </li>
      </ul>
    </>
  ),
};
