import type { PlanContent, Week, Zone } from "@/lib/plans";

const weeks: Week[] = [
  {
    week: 1,
    days: [
      "Rest",
      "8 km Zone 1",
      "6 km Zone 2",
      "8 km Zone 1",
      "Rest",
      "5 x 800m Zone 4, with 400m jog between",
      "12 km Zone 1",
    ],
  },
  {
    week: 2,
    days: [
      "Rest",
      "8 km Zone 1",
      "6 km Zone 3",
      "8 km Zone 1",
      "Rest",
      "Fartlek: 8 km with 1 min Zone 5 / 2 min Zone 1",
      "14 km Zone 1",
    ],
  },
  {
    week: 3,
    days: [
      "Rest",
      "10 km Zone 1",
      "7 km Zone 2",
      "10 km Zone 1",
      "Rest",
      "6 x 600m Zone 4, with 300m jog between",
      "15 km Zone 1",
    ],
  },
  {
    week: 4,
    days: [
      "Rest",
      "8 km Zone 1",
      "8 km Zone 3",
      "8 km Zone 1",
      "Rest",
      "Fartlek: 10 km with 1 min Zone 5 / 2 min Zone 1",
      "16 km Zone 1",
    ],
  },
  {
    week: 5,
    days: [
      "Rest",
      "10 km Zone 1",
      "8 km Zone 2",
      "10 km Zone 1",
      "Rest",
      "8 x 400m Zone 4, with 200m jog between",
      "17 km Zone 1",
    ],
  },
  {
    week: 6,
    days: [
      "Rest",
      "10 km Zone 1",
      "8 km Zone 3",
      "10 km Zone 1",
      "Rest",
      "Fartlek: 12 km with 1 min Zone 5 / 2 min Zone 1",
      "18 km Zone 1",
    ],
  },
  {
    week: 7,
    days: [
      "Rest",
      "12 km Zone 1",
      "9 km Zone 2",
      "12 km Zone 1",
      "Rest",
      "10 x 300m Zone 4, with 100m jog between",
      "19 km Zone 1",
    ],
  },
  {
    week: 8,
    days: [
      "Rest",
      "10 km Zone 1",
      "9 km Zone 3",
      "10 km Zone 1",
      "Rest",
      "Fartlek: 14 km with 1 min Zone 5 / 2 min Zone 1",
      "20 km Zone 1",
    ],
  },
  {
    week: 9,
    days: [
      "Rest",
      "12 km Zone 1",
      "10 km Zone 2",
      "12 km Zone 1",
      "Rest",
      "12 x 200m Zone 4, with 100m jog between",
      "21 km Zone 1",
    ],
  },
  {
    week: 10,
    days: [
      "Rest",
      "12 km Zone 1",
      "10 km Zone 3",
      "12 km Zone 1",
      "Rest",
      "Fartlek: 14 km with 1 min Zone 5 / 2 min Zone 1",
      "22 km Zone 1",
    ],
  },
  {
    week: 11,
    days: [
      "Rest",
      "10 km Zone 1",
      "10 km Zone 2",
      "10 km Zone 1",
      "Rest",
      "10 x 400m Zone 4, with 200m jog between",
      "16 km Zone 1",
    ],
  },
  {
    week: 12,
    days: [
      "Rest",
      "8 km Zone 1",
      "8 km Zone 2",
      "6 km Zone 1",
      "Rest",
      "6 km Zone 1 with 3 x 100m strides",
      "Half marathon race",
    ],
  },
];

const zones: Zone[] = [
  { zone: 1, name: "Easy", pace: "6:10–6:55 /km" },
  { zone: 2, name: "Moderate", pace: "5:45–6:00 /km" },
  { zone: 3, name: "Tempo", pace: "5:20–5:40 /km" },
  { zone: 4, name: "Intervals", pace: "4:55–5:10 /km" },
  { zone: 5, name: "Racing", pace: "4:30–4:50 /km" },
];

export const plan: PlanContent = {
  metaTitle: "Road to half",
  accent: "violet",
  eyebrow: "Half marathon",
  title: "Road to half",
  lede: "Little by little..",
  meta: [
    { label: "From", value: "40 km/week" },
    { label: "To", value: "50 km/week" },
  ],
  dayLabels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
  weeks: weeks,
  zones: zones,
  intro: (
    <>
      <p>
        This running plan is designed to help you increase your weekly running
        distance from 40 km to 50 km, while preparing you to run a good time in
        a half marathon. The plan contains a varied mix of easy runs, tempo
        sessions, interval training and long runs.
      </p>
      <h3>How to do the sessions</h3>
      <ul>
        <li>
          <strong>Fartlek:</strong> Alternate between fast and easy running, for
          example 1 minute fast (Zone 5) followed by 2 minutes easy (Zone 1).
        </li>
        <li>
          <strong>Intervals:</strong> Run a set distance or time (e.g. 800 m or
          4 minutes) at high intensity (Zone 4), with an easy jog or walking
          recovery between.
        </li>
        <li>
          <strong>Long run:</strong> A longer run at an easy pace (Zone 1) to
          build endurance.
        </li>
        <li>
          <strong>Tempo run:</strong> Run at a moderate to fast pace (Zone 3)
          that you can hold for an extended period.
        </li>
      </ul>
    </>
  ),
};
