import type { PlanContent, Week } from "@/lib/plans";

const weeks: Week[] = [
  {
    week: 1,
    days: [
      "Rest day",
      "Easy run on road: 40 min, Zone 1",
      "Classic intervals: 15 min warm-up, 6x1000m in Zone 4 with 2 min active recovery, 10 min cool-down",
      "Easy run with strides: 45 min Zone 1 + 6x30s strides",
      "Rest day",
      "Rest day or light activity",
      "Long run on trail: 15 km, Zone 1-2",
    ],
  },
  {
    week: 2,
    days: [
      "Rest day",
      "Progressive run: 50 min, Zone 1 building to Zone 2 for the last 15 min",
      "Hill intervals: 15 min warm-up, 8x1 min steep hills in Zone 4-5 with jog down as recovery, 10 min cool-down",
      "Technical trail run: 40 min Zone 1, focus on technical sections",
      "Rest day",
      "Easy run: 30 min, Zone 1",
      "Long run on road: 14 km, Zone 1-2",
    ],
  },
  {
    week: 3,
    days: [
      "Rest day",
      'Easy run with "easy" intervals: 40 min Zone 1 + 5x1 min Zone 2',
      "Threshold intervals: 15 min warm-up, 4x8 min in Zone 3 with 2 min recovery, 10 min cool-down",
      "Easy run: 40 min, Zone 1",
      "Rest day",
      "**Running Fitness Test:** 15 min warm-up, 25 min running just below threshold, 3 min harder, 3 min harder still, 10 min cool-down",
      "Long run on mixed surfaces: 17 km, Zone 1-2",
    ],
  },
  {
    week: 4,
    days: [
      "Rest day",
      "Easy run on trail: 45 min, Zone 1",
      "Short intervals: 15 min warm-up, 10x45 sec Zone 4 with 15 sec recovery, 10 min cool-down",
      'Easy run with "easy" intervals: 40 min Zone 1 + 5x2 min Zone 2',
      "Rest day",
      "Easy run: 35 min, Zone 1",
      "Easy long run: 13 km, Zone 1 (recovery week)",
    ],
  },
  {
    week: 5,
    days: [
      "Rest day",
      "Progressive run: 50 min, Zone 1 building to Zone 2 for the last 20 min",
      "Hill intervals: 15 min warm-up, 2x(4x2 min) steep hills in Zone 4 with 1 min recovery and 3 min recovery between sets, 10 min cool-down",
      "Run with technique focus: 45 min Zone 1 + 10 min specific technique drills",
      "Rest day",
      "Rest day or light activity",
      "Long run on trail: 16 km, Zone 1-2",
    ],
  },
  {
    week: 6,
    days: [
      "Rest day",
      "Easy run: 40 min, Zone 1",
      "Progressive intervals: 15 min warm-up, 3x2000m at increasing pace (Zone 3, 3-4, 4) with 3 min active recovery, 10 min cool-down",
      "Easy run: 40 min, Zone 1",
      "Rest day",
      "**Running Fitness Test:** 15 min warm-up, 25 min running just below threshold, 3 min harder, 3 min harder still, 10 min cool-down",
      "Long run with a tempo finish: 18 km, Zone 1-2 + last 3 km in Zone 3",
    ],
  },
  {
    week: 7,
    days: [
      "Rest day",
      'Easy run with "easy" intervals: 40 min Zone 1 + 6x2 min Zone 2',
      "Fartlek on trail: 15 min warm-up, 30 min varied pace based on the terrain (Zone 2-4), 10 min cool-down",
      "Easy run: 45 min, Zone 1",
      "Rest day",
      "Rest day or light activity",
      "Long run on technical trail: 15 km, Zone 1-2 (moderate recovery week)",
    ],
  },
  {
    week: 8,
    days: [
      "Rest day",
      "Easy run on road: 45 min, Zone 1",
      "Threshold intervals: 15 min warm-up, 5x5 min in Zone 3 with 2 min recovery, 10 min cool-down",
      "Easy run: 40 min, Zone 1",
      "Rest day",
      "**Running Fitness Test:** 15 min warm-up, 25 min running just below threshold, 3 min harder, 3 min harder still, 10 min cool-down",
      "Long run on mixed surfaces: 20 km, Zone 1-2",
    ],
  },
  {
    week: 9,
    days: [
      "Rest day",
      "Easy run with strides: 45 min Zone 1 + 8x30s strides",
      "Pyramid intervals: 15 min warm-up, 1-2-3-4-3-2-1 min in Zone 4 with 1 min active recovery, 10 min cool-down",
      "Technical run on uneven ground: 50 min Zone 1",
      "Rest day",
      "Easy run: 40 min, Zone 1",
      "Long run with hill sprints: 18 km, Zone 1-2 including 6x30 sec hill sprints",
    ],
  },
  {
    week: 10,
    days: [
      "Rest day",
      "Progressive run: 55 min, Zone 1 building to Zone 2 for the last 20 min",
      "Long hill intervals: 15 min warm-up, 5x3 min steep hills in Zone 4 with jog down as recovery, 10 min cool-down",
      "Easy run: 40 min, Zone 1",
      "Rest day",
      "**Running Fitness Test:** 15 min warm-up, 25 min running just below threshold, 3 min harder, 3 min harder still, 10 min cool-down",
      "Long run on technical trail: 22 km, Zone 1-2",
    ],
  },
  {
    week: 11,
    days: [
      "Rest day",
      "Easy run: 45 min, Zone 1",
      "Threshold run: 15 min warm-up, 30 min continuous running in Zone 3, 10 min cool-down",
      'Easy run with "easy" intervals: 45 min Zone 1 + 6x90 sec Zone 2',
      "Rest day",
      "Easy run: 30 min, Zone 1",
      "Easy long run: 15 km, Zone 1 (recovery week)",
    ],
  },
  {
    week: 12,
    days: [
      "Rest day",
      "Progressive run with hills: 60 min, Zone 1-2 on hilly terrain",
      "Short intervals: 15 min warm-up, 16x30 sec Zone 4-5 with 30 sec recovery, 10 min cool-down",
      "Run with technique focus: 50 min Zone 1 + 10 min specific technique drills",
      "Rest day",
      "**Running Fitness Test:** 15 min warm-up, 25 min running just below threshold, 3 min harder, 3 min harder still, 10 min cool-down",
      "Long run on mixed surfaces: 20 km, Zone 1-2",
    ],
  },
  {
    week: 13,
    days: [
      "Rest day",
      "Easy run on road: 45 min, Zone 1",
      "Fartlek with specific segments: 15 min warm-up, 40 min varied pace with 8x2 min hard, 10 min cool-down",
      "Easy run with strides: 50 min Zone 1 + 6x30s strides",
      "Rest day",
      "Rest day or light activity",
      "Long run on mixed surfaces: 24 km, Zone 1-2",
    ],
  },
  {
    week: 14,
    days: [
      "Rest day",
      'Easy run with "easy" intervals: 45 min Zone 1 + 8x1 min Zone 2',
      "Classic intervals: 15 min warm-up, 5x1200m in Zone 4 with 2 min active recovery, 10 min cool-down",
      "Technical trail run: 45 min Zone 1, focus on downhills",
      "Rest day",
      "**Running Fitness Test:** 15 min warm-up, 25 min running just below threshold, 3 min harder, 3 min harder still, 10 min cool-down",
      "Long run on varied terrain: 20 km, Zone 1-2",
    ],
  },
  {
    week: 15,
    days: [
      "Rest day",
      "Progressive run: 60 min, Zone 1 building to Zone 2 for the last 20 min",
      "Threshold intervals with progression: 15 min warm-up, 2x12 min in Zone 3 with 3 min recovery, 10 min cool-down",
      "Easy run: 45 min, Zone 1 + 4x30s strides",
      "Rest day",
      "Easy run: 30 min, Zone 1",
      "Long run on varied terrain: 20-25 km, Zone 1-2 with some hill sprints",
    ],
  },
];

export const plan: PlanContent = {
  metaTitle: "Threshold pace and trail running",
  accent: "teal",
  eyebrow: "Improved baseline",
  title: "Running plan for improving threshold pace and trail running",
  lede: (
    <>
      Welcome to your tailored running plan for improving your threshold pace
      and preparing for trail races! The plan is designed to systematically
      bring down your threshold pace (as measured on your Coros watch) while
      building specific strength and endurance for trail running. Over 15 weeks
      it combines structured interval sessions, progressive long runs and
      quality sessions on varied terrain – both on road and on the trails.
    </>
  ),
  meta: [
    { label: "Intervals", value: "Wednesdays" },
    { label: "Long run", value: "Sundays" },
    { label: "Running Fitness Test", value: "every 3rd week" },
  ],
  dayLabels: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
  weeks: weeks,
  intro: (
    <>
      <p>
        This running plan is structured to systematically improve your threshold
        pace and build specific strength for trail running over a 15-week
        period. Based on scientific training principles, the program includes a
        careful balance between high- and low-intensity training, with a
        particular focus on threshold pace and trail-specific skills.
      </p>

      <p>
        The program alternates between different types of interval training on
        Wednesdays, with a focus on both classic intervals and hill intervals to
        develop both aerobic capacity and specific strength. Long runs on
        Sundays increase gradually, but non-linearly, to allow recovery between
        the more demanding sessions. Regular Running Fitness Tests roughly every
        third Saturday let you measure your progress in threshold pace
        throughout the training period.
      </p>
    </>
  ),
  outro: (
    <>
      <p>
        This running program is designed to systematically improve your
        threshold pace and build specific strength for trail running over a
        15-week period. Here are the key components of the program:
      </p>
      <ul>
        <li>
          <strong>Interval training (Wednesdays):</strong> Alternates between
          different types of intervals to stimulate different physiological
          adaptations. Hill intervals develop specific strength for trail
          running, while classic intervals improve running economy and threshold
          pace.
        </li>
        <li>
          <strong>Running Fitness Test (roughly every 3rd week):</strong>{" "}
          Regular tests to measure progress in threshold pace and running
          capacity. These tests follow the Coros format and give you concrete
          data to track improvements over time.
        </li>
        <li>
          <strong>Long runs (Sundays):</strong> Follow a non-linear progression
          from 15 km up to 24 km, with strategic recovery weeks in weeks 4, 7
          and 11. Alternate between trail, road and mixed surfaces to develop
          all-round skills.
        </li>
        <li>
          <strong>Easy runs with quality:</strong> Include &quot;easy&quot;
          intervals in Zone 2 and strides to improve running economy without
          eating into your recovery capacity.
        </li>
        <li>
          <strong>Technique focus:</strong> Dedicated sessions for improving
          technical skills on the trails, which will improve both efficiency and
          safety in trail races.
        </li>
        <li>
          <strong>Periodisation:</strong> The program follows a periodised
          approach across the 15 weeks, with gradual increases in volume and
          intensity, followed by strategic recovery weeks to ensure enough time
          for adaptation and reduce the risk of overtraining.
        </li>
        <li>
          <strong>Variety in interval types:</strong> As the program progresses,
          more advanced interval formats such as pyramid intervals and longer
          continuous threshold runs are introduced to drive further
          physiological adaptations and keep you mentally engaged.
        </li>
      </ul>
      <p>
        To get the most out of this program, it is recommended that you follow
        the intensity zones closely and listen to your body&apos;s signals.
        Adjust volume or intensity as needed, especially if you notice signs of
        overtraining or incomplete recovery. Remember that consistency over time
        is the key to improvement - it is better to complete a little less with
        good quality than to push the body too hard and risk injury or burnout.
      </p>

      <h3>Intensity zones</h3>
      <ul>
        <li>
          Zone 1 (Easy running): 65-75% of maximum heart rate. Conversational
          pace.
        </li>
        <li>
          Zone 2 (Moderate): 75-80% of maximum heart rate. Comfortable but
          purposeful pace.
        </li>
        <li>
          Zone 3 (Threshold): 80-87% of maximum heart rate. Challenging pace
          that can be sustained for about 1 hour.
        </li>
        <li>
          Zone 4 (Interval): 87-92% of maximum heart rate. Hard pace that can be
          sustained for shorter periods.
        </li>
        <li>
          Zone 5 (Maximal): 92-100% of maximum heart rate. Very high intensity
          for short sprints.
        </li>
      </ul>

      <h3>Adjustments</h3>
      <p>
        This program can be adjusted based on individual needs and
        circumstances:
      </p>
      <ul>
        <li>
          If you feel exhausted, consider replacing an interval session with an
          easy run or a rest day.
        </li>
        <li>
          For those who want an extra challenge, Saturday&apos;s easy runs can
          be extended by another 10-15 minutes.
        </li>
        <li>
          If you are targeting a specific trail race, consider doing more of the
          long runs on terrain similar to the race.
        </li>
        <li>
          Keep an eye on the threshold pace on your Coros watch to track
          progress and adjust the intensity of the threshold sessions
          accordingly.
        </li>
        <li>
          Use the results from the Running Fitness Test to adjust your training
          intensities. If your threshold pace improves, the intensity of the
          interval training should be increased accordingly.
        </li>
        <li>
          For runners with limited experience of high training volume, consider
          reducing the volume of the longest long runs (over 20 km) in weeks 13
          and 15.
        </li>
      </ul>

      <h3>Session types and terminology</h3>
      <p>
        Here is an explanation of the different session types and terms used in
        the program:
      </p>
      <ul>
        <li>
          <strong>Running Fitness Test:</strong> A standardised test developed
          by Coros to measure running fitness and threshold pace. The test
          consists of a warm-up phase, followed by 25 minutes of running just
          below threshold intensity, then 3 minutes of harder running, and
          finishes with 3 minutes at maximal effort. Based on the data collected
          during the test (especially heart rate and speed), your Coros watch
          calculates your threshold pace and other key training metrics. It is
          recommended to do the test on a flat, even surface for the most
          accurate results. Do the test at regular intervals to track progress
          and adjust your training intensities accordingly.
        </li>
        <li>
          <strong>Stride/Strides:</strong> Short, controlled accelerations of
          20-30 seconds where you gradually increase the speed to about 85-90%
          of maximal effort, hold it for a few seconds, and then gradually slow
          down. Strides are done on flat or slightly inclined ground with full
          recovery between each repetition (typically 45-60 seconds of easy
          walking or jogging). The purpose is to improve running technique,
          neuromuscular coordination and running economy without accumulating
          significant fatigue.
        </li>
        <li>
          <strong>Fartlek:</strong> From the Swedish &quot;fart&quot; (speed)
          and &quot;lek&quot; (play), fartlek is an unstructured form of
          interval training where you alternate between different intensities
          based on feel or terrain. In our program, fartlek is used on trails
          where the intensity varies naturally with the challenges of the
          terrain: faster on flat sections, harder effort on the uphills, and
          controlled, technical running on the downhills. It is a playful,
          intuitive approach to interval training that is especially useful for
          trail runners.
        </li>
        <li>
          <strong>Hill intervals:</strong> Intense running intervals done
          uphill. These strengthen specific muscle groups that are crucial for
          trail running, improve power and efficiency on uphills, and reduce the
          load on the joints compared with intervals on flat ground. Jog easily
          back down the hill as recovery between repetitions. Choose hills with
          a 4-8% gradient for the best training effect.
        </li>
        <li>
          <strong>Threshold intervals:</strong> Intervals run in Zone 3 (about
          80-87% of maximum heart rate), which corresponds to the highest
          intensity you can sustain for an extended period (about 1 hour). These
          intervals are crucial for improving threshold pace and making the body
          more efficient at handling and clearing lactate. Typical formats are
          4-6 repetitions of 5-8 minutes with short recoveries (1-2 minutes).
        </li>
        <li>
          <strong>Classic intervals:</strong> Traditional intervals over
          specific distances (e.g. 1000m) run in Zone 4 (87-92% of maximum heart
          rate). These intervals improve VO2max (maximal oxygen uptake) and
          anaerobic capacity. They are typically done on a track or flat road
          with controlled recoveries to ensure consistent effort throughout the
          session.
        </li>
        <li>
          <strong>Progressive run/intervals:</strong> Sessions where the
          intensity increases gradually, either throughout the session
          (progressive run) or for each repetition (progressive intervals). This
          approach teaches the body to handle increasing load and prepares you
          for race situations where the pace typically picks up towards the end.
        </li>
        <li>
          <strong>&quot;Easy&quot; intervals:</strong> Short intervals in Zone 2
          slotted into otherwise easy runs. These provide a certain training
          stimulus without significantly affecting recovery. They work as a
          &quot;lactate vaccine&quot; and help maintain a certain tolerance for
          intensity even on recovery days.
        </li>
        <li>
          <strong>Technical running:</strong> Sessions with a specific focus on
          the technical aspects of trail running, such as foot placement,
          balance, and efficient navigation of uneven ground. These sessions are
          generally low-intensity (Zone 1) to allow deliberate focus on
          technique, but often include technically challenging sections that
          require concentration and specific skills.
        </li>
        <li>
          <strong>Pyramid intervals:</strong> An interval structure where the
          duration of the work periods first increases gradually and then
          decreases, often in a symmetrical pattern (e.g. 1-2-3-2-1 min). This
          variation in work period stimulates different energy systems in a
          single session and provides both physical and mental variety.
        </li>
        <li>
          <strong>Hill sprints:</strong> Short, explosive uphill accelerations
          lasting 20-30 seconds. These are done at near-maximal effort (Zone
          4-5) and develop anaerobic capacity, strength and power. They are
          especially useful for trail runners who regularly face steep hills.
        </li>
      </ul>
    </>
  ),
};
