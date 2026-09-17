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
      "Easy long run, 60 min in Zone 2.",
      "Rest day or very light activity",
    ],
  },
  {
    week: 1,
    days: [
      "Easy long run, 70 min in Zone 2",
      "Easy jog, 40 min in Zone 1",
      "Intervals · 10 min warm-up · 5x4 min Zone 4 · 10 min cool-down",
      "Easy jog, 50 min in Zone 1-2",
      "Rest day/active recovery",
      "Progressive long run, 1h 45 min",
      "Easy jog, 70 min in Zone 1",
    ],
  },
  {
    week: 2,
    days: [
      "Easy long run, 80 min in Zone 2",
      "Easy jog, 45 min in Zone 1",
      "Intervals · 15 min warm-up · 4x5 min Zone 4 · 10 min cool-down",
      "Easy jog, 60 min in Zone 1-2",
      "Rest day/active recovery",
      "Long run, 2 hours in Zone 2-3",
      "Easy jog, 75 min in Zone 1",
    ],
  },
  {
    week: 3,
    days: [
      "Easy long run, 90 min in Zone 2",
      "Easy jog, 50 min in Zone 1",
      "Intervals · 15 min warm-up · 5x4 min Zone 4-5 · 15 min cool-down",
      "Easy jog, 65 min in Zone 1-2",
      "Rest day/active recovery",
      "Long run, 2h 15 min in Zone 2",
      "Easy jog, 80 min in Zone 1",
    ],
  },
  {
    week: 4,
    days: [
      "Easy long run, 1h 30 min in Zone 2",
      "Easy jog, 55 min in Zone 1",
      "Intervals · 20 min warm-up · 6x4 min Zone 4-5 · 15 min cool-down",
      "Easy jog, 70 min in Zone 1-2",
      "Rest day/active recovery",
      "Long run, 3 hours in Zone 2",
      "Easy jog, 90 min in Zone 1",
    ],
  },
  {
    week: 5,
    days: [
      "Easy long run, 60 min in Zone 2",
      "Easy jog, 30 min in Zone 1",
      "Intervals · 10 min warm-up · 4x2 min Zone 3 · 10 min cool-down",
      "Rest day",
      "Easy jog, 30 min in Zone 1",
      "Rest day",
      "Marathon",
    ],
  },
];

const zones: Zone[] = [
  { zone: 1, name: "Easy", pace: "5:50–6:10 /km" },
  { zone: 2, name: "Moderate", pace: "5:30–5:50 /km" },
  { zone: 3, name: "Tempo", pace: "5:00–5:20 /km" },
  { zone: 4, name: "Intervals", pace: "4:30–4:50 /km" },
  { zone: 5, name: "Racing", pace: "4:10–4:30 /km" },
];

export const plan: PlanContent = {
  metaTitle: "Marathon May 4",
  accent: "sky",
  eyebrow: "Marathon",
  title: "Marathon May 4 at 11:00",
  lede: "Let's get that marathon run, then!",
  tagline: "It's not supposed to be easy",
  meta: [
    { label: "Goal", value: "3:52" },
    { label: "VDOT", value: "48" },
  ],
  dayLabels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
  weeks: weeks,
  zones: zones,
  intro: (
    <>
      <p>
        When putting together a training program with the goal of finishing a
        marathon, it is essential to build on the principles of Dr. Jack Daniels
        and his well-proven &quot;Running Formula.&quot; Daniels, a renowned
        expert in the science of running, stresses the importance of precise
        intensity control to maximise the training benefits without overloading
        the body. His philosophy can be summed up in a few key principles:
        individualised pacing based on your current fitness level, a balanced
        mix of the intensities the VDOT tables suggest, and the importance of
        recovery.
      </p>

      <p>
        To adapt this approach to your goal of finishing a marathon in 3 hours
        and 52 minutes, the focus is on three main areas: 1) Aerobic endurance
        through long runs and easy jogging, 2) Running economy and speed
        development through interval training, and 3) Optimal recovery to
        support the harder training days and prevent injuries.
      </p>

      <p>
        Aerobic endurance The long runs are critical for building the aerobic
        endurance a marathon demands. These sessions should be run at a pace
        that feels moderately challenging, yet sustainable over time. The focus
        here is on time on your feet rather than distance, which prepares
        muscles, tendons and joints for the load of race day.
      </p>

      <p>
        Running economy and speed development Interval training is the key to
        improving your running economy and increasing your speed. By working
        intervals in Zones 4-5, as Dr. Daniels&apos; VDOT tables would recommend
        based on your personal bests, you stimulate the efficiency of your
        stride and breathing. It is important to follow these harder sessions
        with easy jogging or rest, to allow the body to recover and come back
        stronger.
      </p>

      <p>
        Optimal recovery Rest days and easy jog days are not just &quot;days
        off&quot;; they are an integral part of the training plan. These days
        make sure the body heals from the micro-damage that occurs during the
        harder sessions, and they help build a stronger, more durable runner.
        Active recovery, such as light cycling or swimming, can also be a
        valuable tool for promoting recovery without adding running-related
        load.
      </p>
    </>
  ),
  outro: (
    <>
      <p>
        In this tailored training plan, based on Dr. Daniels&apos; methods, we
        have made sure both volume and intensity increase gradually over five
        weeks, with a special focus on a long run that builds up to 3 hours in
        week 4. This ensures you reach the peak of your aerobic capacity and
        running economy right before a carefully timed taper. The goal of the
        taper is to arrive at the start line fresh, rested, and feeling
        &quot;hungry&quot; to run.
      </p>
      <p>
        Throughout the training period, remember to listen to your body and
        adjust the training intensity and volume as needed. Hydration, nutrition
        and good sleep are also crucial components of your preparation. By
        following these principles, you position yourself for success on race
        day and set the stage for a marathon experience that is both rewarding
        and enjoyable.
      </p>
      <h3>VDOT zones</h3>
      <p>
        With a personal best of 43 minutes for 10 km, we can use Jack
        Daniels&apos; VDOT tables to estimate your running zones. These zones
        are based on his VDOT score, which is a measure of your running capacity
        or fitness. The tables assign a VDOT number based on race times, which
        in turn is used to calculate training intensities for different types of
        training. For a 10 km time of 43 minutes, your VDOT score would be
        roughly in the 48-49 range. Let us use a VDOT score of 48 to estimate
        your running zones:
      </p>
      <ul>
        <li>
          Zone 1 (Easy/Light running): This is your recovery and long-run zone.
          The pace here should feel easy and be sustainable over a long time.
          For VDOT 48, this would be roughly 5:50 to 6:10 per km.
        </li>
        <li>
          Zone 2 (Moderate): Used for slightly longer runs where you can still
          hold a conversation. For a VDOT of 48, this is about 5:30 to 5:50 per
          km.
        </li>
        <li>
          Zone 3 (Tempo): This zone is for training at threshold pace, where you
          can speak in short sentences. For a VDOT of 48, this would be around
          5:00 to 5:20 per km.
        </li>
        <li>
          Zone 4 (Interval training): This zone is for harder work that improves
          VO2 max and running economy. Typically this would be about 4:30 to
          4:50 per km for VDOT 48.
        </li>
        <li>
          Zone 5 (Racing/Speedwork): This zone is split into several sub-zones
          (5a, 5b, 5c) representing everything from near threshold pace to
          faster than VO2 max pace. For VDOT 48 this can vary from 4:10 per km
          to 4:30 per km for shorter repeated efforts.
        </li>
      </ul>
      <p>
        It is important to note that these estimates are approximate and can
        vary based on individual differences, the day&apos;s form, weather
        conditions and other factors. Daniels&apos; formula assumes optimal
        running conditions and can be adjusted slightly based on your specific
        training situation and goals.
      </p>
    </>
  ),
};
