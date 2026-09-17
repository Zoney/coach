import type { PlanContent, Week, Zone } from "@/lib/plans";

const REST = "Rest";
const OPTIONAL_WALK = "Rest, or an easy 20–30 minute walk if you feel like it.";

const min = (n: number) => (n === 1 ? "1 minute" : `${n} minutes`);

/** The standard Tuesday/Thursday walk/run session, explained in plain words. */
const walkRun = (reps: number, jog: number, walk: number) =>
  [
    "Walk/run session",
    `Walk for 5 minutes to warm up. Then jog easily for ${min(jog)} and walk for ${min(walk)}, and repeat that ${reps} times. Finish with 5 minutes of easy walking. The jog should be slow enough that you can chat along the way.`,
    `In short: 5 min walk, ${reps} × (${jog} min jog / ${walk} min walk), 5 min walk`,
  ].join(" · ");

/** The every-other-week hill session, Ingebrigtsen style. */
const hills = (reps: number) =>
  [
    "Hill session",
    `Find an even hill that isn't too steep. Warm up with 5 minutes of walking and 5 minutes of easy jogging. Then run up the hill quickly but under control for 25 seconds, walk back down easily for 1 minute, and repeat that ${reps} times. Take 1 extra minute of rest, then do a second set of ${reps}. Finish with 10 minutes of easy walking. Never sprint: the last rep should look like the first.`,
    `In short: 10 min warm-up, 2 × ${reps} × (25 s up / 1 min down), 10 min cool-down`,
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
    "Walk/run session, a bit longer",
    `${note ? note + " " : ""}Walk for 5 minutes first. Then jog easily for ${min(jog)} and walk for ${min(walk)}, and repeat that ${reps} times. Walk the remaining time until you reach ${total} minutes in total.`,
    `In short: ${total} min, ${reps} × (${jog} min jog / ${walk} min walk)`,
  ].join(" · ");

/** A continuous jog with a walk before and after. */
const continuous = (jog: number, note?: string) =>
  [
    "Continuous jog",
    `Walk for 5 minutes. Then jog easily for ${jog} minutes without stopping, and walk for 5 minutes at the end. If it gets heavy, take a one-minute walking break and carry on; it still counts.${note ? " " + note : ""}`,
    `In short: 5 min walk, ${jog} min jog, 5 min walk`,
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
    "Walk with little jogs · Walk briskly for 30 minutes. Five times along the way, jog easily for one minute, then keep walking. · In short: 30 min brisk walk with 5 × 1 min jog",
  ),
  week(
    2,
    walkRun(8, 1, 2),
    hills(8),
    "Walk with little jogs · Walk briskly for 35 minutes. Six times along the way, jog easily for one minute, then keep walking. · In short: 35 min brisk walk with 6 × 1 min jog",
  ),
  week(3, walkRun(7, 2, 2), walkRun(7, 2, 2), longWalkRun(40, 6, 2, 3)),
  week(
    4,
    walkRun(5, 2, 2),
    hills(10),
    "Easy walk · Easy week. Just a pleasant 30 minute walk, no jogging. Your body catches up with what you've built over the last three weeks. · In short: 30 min walk",
  ),
  week(5, walkRun(6, 3, 2), walkRun(6, 3, 2), longWalkRun(40, 5, 3, 2)),
  week(
    6,
    walkRun(4, 3, 2),
    hills(12),
    "Walk with jogs · Easy week. Walk briskly for 35 minutes, and jog easily for 2 minutes three times along the way. · In short: 35 min brisk walk with 3 × 2 min jog",
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
      "Easy week, so this one is shorter than last Saturday.",
    ),
  ),
  week(9, walkRun(3, 8, 2), walkRun(4, 6, 1), longWalkRun(45, 3, 8, 2)),
  week(
    10,
    walkRun(2, 10, 2),
    hills(20),
    "Easy walk with a little jogging · Easy week. Walk easily for 40 minutes, and jog easily for 5 minutes twice along the way. · In short: 40 min walk with 2 × 5 min jog",
  ),
  week(11, walkRun(2, 12, 2), continuous(20), continuous(25)),
  week(
    12,
    continuous(15, "Short and light, you want to be fresh for Saturday."),
    hills(15),
    "Goal: 30 minutes non-stop · Walk for 5 minutes. Then jog easily for 30 minutes, and walk for 5 minutes at the end. Take it easy, the goal here is to finish with a smile, not to set a record. · In short: 5 min walk, 30 min jog, 5 min walk",
  ),
];

const zones: Zone[] = [
  { zone: 1, name: "Walking", pace: "Brisk, but relaxed" },
  { zone: 2, name: "Easy jog", pace: "You can talk in full sentences" },
  { zone: 3, name: "Hill reps", pace: "Quick and controlled, never a sprint" },
];

export const plan: PlanContent = {
  metaTitle: "From Stroll to Strong",
  accent: "rose",
  eyebrow: "Walk-to-run plan",
  title: "From Stroll to Strong",
  lede: (
    <>
      A gentle walk-to-run plan for building the running habit without getting
      hurt. Twelve weeks, three sessions a week, and every single session should
      feel doable.
    </>
  ),
  tagline: "Walking isn't cheating. It's the plan.",
  meta: [
    { label: "Sessions", value: "3 per week" },
    { label: "Hills", value: "every other week" },
    { label: "Goal", value: "30 min non-stop" },
  ],
  dayLabels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  weeks,
  zones,
  intro: (
    <>
      <p>
        The most common reason people stop running isn&apos;t a lack of
        motivation. It&apos;s that it got too hard too soon, and the body said
        no. This plan flips that around: walking is the foundation, jogging is
        added a little at a time, and you should never finish a session
        completely spent. If you can talk in full sentences while you jog,
        you&apos;re doing it right.
      </p>
      <p>
        Take it easy. The goal here isn&apos;t speed. The goal is to be able to
        jog for 30 minutes without stopping twelve weeks from now, and still
        want to do it again the week after. Everything else, like distance and
        pace, comes by itself later.
      </p>
      <p>
        Running on a treadmill is allowed, but the goal is to get outside. Fresh
        air, slightly uneven ground and somewhere to go make the habit easier to
        keep, and your body gets a variety it never gets on a flat belt. Use the
        treadmill when the weather or the day demands it, not as the default.
      </p>
      <h3>How the week is laid out</h3>
      <p>
        Three sessions a week: Tuesday, Thursday and Saturday. Monday and Friday
        are rest, Wednesday and Sunday are an optional easy walk. The load moves
        in waves rather than a straight line up: weeks 4, 6, 8 and 10 are
        deliberately lighter than the week before, so tendons, joints and your
        head get time to catch up with your legs. Progress you can&apos;t feel
        in your body the next day is the best kind.
      </p>
      <h3>The hill session, every other week</h3>
      <p>
        Every other Thursday the walk/run session is swapped for short hill reps
        in the Ingebrigtsen style: 25 seconds up the hill, one minute of easy
        walking down, in two sets with one extra minute of rest between them.
        The target format is 2 × 20 reps, but we start at 2 × 8 and build there
        over ten weeks. The final hill session, two days before the goal run, is
        intentionally a little shorter.
      </p>
      <p>
        Hills are chosen because they are kind to the body: the speed is low
        even though the effort is quick, each rep is short, and the landings are
        softer than on the flat. That builds strong calves and hips and better
        running form without wearing you down. Find an even hill with a 4–8 %
        grade, hold a pace where rep 40 looks like rep 1, and always walk back
        down easily. A small warm-up and cool-down are built into the session.
      </p>
      <h3>How to read the plan</h3>
      <p>
        Every box in the plan explains the session in plain words, with a short
        summary at the bottom for when you just want the numbers. &quot;5 × (2
        min jog / 3 min walk)&quot; means: jog easily for two minutes, walk for
        three, and do that five times. You don&apos;t need to understand all of
        it right away. Read today&apos;s box, and do what it says.
      </p>
    </>
  ),
  outro: (
    <>
      <h3>How to stay injury-free</h3>
      <ul>
        <li>
          <strong>Waves, not a straight line.</strong> If a week feels heavy,
          repeat it. The plan isn&apos;t going anywhere. You are, ideally for
          many years.
        </li>
        <li>
          <strong>Sore or hurt?</strong> Stiff, achy muscles are fine. Pain that
          changes the way you run, is worse the next day, or sits in one spot
          (shin, Achilles, knee) is a stop signal: two days off, then start the
          week again.
        </li>
        <li>
          <strong>Easy means easy.</strong> The easy jog is conversational pace.
          If you get out of breath, walk. That isn&apos;t weakness, it&apos;s
          the plan.
        </li>
        <li>
          <strong>Shoes and surfaces.</strong> Run in shoes that are comfortable
          and not worn out. Mix gravel, trail and tarmac if you can, and keep
          the hill reps on an even surface.
        </li>
        <li>
          <strong>Strength, 2 × 10 min a week.</strong> Calf raises, squats down
          to a chair, hip bridges and lunges. Little and often beats a lot and
          rarely.
        </li>
        <li>
          <strong>Sleep and food.</strong> Recovery happens while you sleep. Eat
          something within an hour of finishing a session.
        </li>
      </ul>
      <h3>After week 12</h3>
      <p>
        You can now jog for 30 minutes without stopping. Keep three sessions a
        week for at least a month before increasing anything, and then add five
        minutes to only one session at a time. The next natural goal is 5 km
        without a break, or simply keeping the habit going through the winter.
        You can keep the hill session every other week for as long as you like.
      </p>
    </>
  ),
};
