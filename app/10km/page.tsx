import { RunningPlan, type RunningPlanProps } from "@/components/running-plan";

export default function Home() {
  const trainingPlan = [
    {
      weekNumber: 0,
      days: [
        {
          day: "Monday",
          activity: "N/A"
        },
        {
          day: "Tuesday",
          activity: "N/A"
        },
        {
          day: "Wednesday",
          activity: "N/A"
        },
        {
          day: "Thursday",
          activity: "N/A"
        },
        {
          day: "Friday",
          activity: "N/A"
        },
        {
          day: "Saturday",
          activity: "N/A"
        },
        {
          day: "Sunday",
          activity: "Rest and recovery, focusing on hydration and stretching after yesterday's 90-minute trail run."
        }
      ]
    },
    {
      weekNumber: 1,
      days: [
        {
          day: "Monday",
          activity: "40 min easy trail run, Zone 1"
        },
        {
          day: "Tuesday",
          activity: "Intervals on flat terrain, 10 x 400m in Zone 4, 90 sec rest between intervals"
        },
        {
          day: "Wednesday",
          activity: "50 min moderate run, Zone 2, preferably on a gentle trail"
        },
        {
          day: "Thursday",
          activity: "Tempo run, 25 min on a trail in Zone 3"
        },
        {
          day: "Friday",
          activity: "Rest or active recovery"
        },
        {
          day: "Saturday",
          activity: "Long run, 100 min on trail, Zone 1"
        },
        {
          day: "Sunday",
          activity: "Rest"
        }
      ]
    },
    {
      weekNumber: 2,
      days: [
        {
          day: "Monday",
          activity: "45 min easy trail run, Zone 1"
        },
        {
          day: "Tuesday",
          activity: "Intervals on flat terrain, 8 x 600m in Zone 4, 2 min rest between sets"
        },
        {
          day: "Wednesday",
          activity: "55 min moderate trail run, Zone 2"
        },
        {
          day: "Thursday",
          activity: "Tempo run, 30 min on trail, Zone 3"
        },
        {
          day: "Friday",
          activity: "Rest or active recovery"
        },
        {
          day: "Saturday",
          activity: "Long run, 110 min on trail, Zone 1"
        },
        {
          day: "Sunday",
          activity: "Rest"
        }
      ]
    },
    {
      weekNumber: 3,
      days: [
        {
          day: "Monday",
          activity: "50 min easy trail run, Zone 1"
        },
        {
          day: "Tuesday",
          activity: "Intervals on flat terrain, 5 x 1000m in Zone 4, 2.5 min rest between sets"
        },
        {
          day: "Wednesday",
          activity: "60 min moderate trail run, Zone 2"
        },
        {
          day: "Thursday",
          activity: "Tempo run, 35 min on trail, Zone 3"
        },
        {
          day: "Friday",
          activity: "Rest or active recovery"
        },
        {
          day: "Saturday",
          activity: "Long run, 120 min on trail, Zone 1"
        },
        {
          day: "Sunday",
          activity: "Rest"
        }
      ]
    },
    {
      weekNumber: 4,
      days: [
        {
          day: "Monday",
          activity: "55 min easy trail run, Zone 1"
        },
        {
          day: "Tuesday",
          activity: "Intervals, 6 x 800m in Zone 4, 3 min rest between sets"
        },
        {
          day: "Wednesday",
          activity: "65 min moderate trail run, Zone 2"
        },
        {
          day: "Thursday",
          activity: "Tempo run, 40 min on trail, Zone 3"
        },
        {
          day: "Friday",
          activity: "Rest or light cross-training"
        },
        {
          day: "Saturday",
          activity: "Long run, 90 min on trail, Zone 1"
        },
        {
          day: "Sunday",
          activity: "Rest"
        }
      ]
    },
    {
      weekNumber: 5,
      days: [
        {
          day: "Monday",
          activity: "40 min easy trail run, Zone 1"
        },
        {
          day: "Tuesday",
          activity: "Intervals on flat terrain, 6 x 400m in Zone 5, full recovery between reps"
        },
        {
          day: "Wednesday",
          activity: "40 min moderate trail run, Zone 2"
        },
        {
          day: "Thursday",
          activity: "20 min easy jog with some strides, focus on mobility"
        },
        {
          day: "Friday",
          activity: "Race Day - 10km, aim for Zone 4 to Zone 5 pacing as per race strategy"
        },
        {
          day: "Saturday",
          activity: "Optional light walk or rest"
        },
        {
          day: "Sunday",
          activity: "Rest and recovery"
        }
      ]
    }
  ]

  const runningPlanProps: RunningPlanProps = {
    heading: <>10km Race on June 21, 2024 at 19:00</>,
    motivation: <>Let&apos;s conquer this 10km race with energy and precision!</>,
    prePrePlan: <>This isn&apos;t just a run; it&apos;s a testament to your hard work and dedication.</>,
    prePlan: (
      <>
        <p className="max-w-3xl mx-auto my-8 text-gray-500 md:text-xl/relaxed dark:text-gray-400">
          When designing a training program for a 10km race, it&apos;s crucial to leverage the principles of Dr. Jack Daniels&apos; &quot;Running Formula.&quot; Known for his scientific approach to distance running, Daniels emphasizes the importance of controlled intensity to maximize training benefits while avoiding overtraining. His philosophy is summarized in several key principles: tailored pacing based on current fitness levels, a balanced mix of intensities as suggested by the VDOT tables, and the crucial role of recovery.
        </p>

        <p className="max-w-3xl mx-auto my-8 text-gray-500 md:text-xl/relaxed dark:text-gray-400">
          To adapt these principles to your goal of finishing the 10km race within 40 to 45 minutes, the focus is on three main areas: 1) Aerobic endurance through moderate runs and recovery jogs, 2) Running economy and speed development through interval training, and 3) Optimal recovery to support intense training days and prevent injuries.
        </p>

        <p className="max-w-3xl mx-auto my-8 text-gray-500 md:text-xl/relaxed dark:text-gray-400">
          Aerobic endurance is critical for the 10km distance. Moderate runs should be at a pace that feels challenging yet sustainable, aimed at building the stamina needed for race day. Emphasis on consistent effort over speed will help prepare your muscles, tendons, and joints for the demands of the race.
        </p>

        <p className="max-w-3xl mx-auto my-8 text-gray-500 md:text-xl/relaxed dark:text-gray-400">
          Running economy and speed development are advanced through interval training. By integrating intervals in Zones 4-5, as recommended by Dr. Daniels&apos; VDOT tables based on your personal records, you will enhance your running stride and breathing efficiency. It&apos;s important to follow these intense sessions with recovery jogs or rest days to allow your body to recuperate and grow stronger.
        </p>

        <p className="max-w-3xl mx-auto my-8 text-gray-500 md:text-xl/relaxed dark:text-gray-400">
          Optimal recovery is not merely about taking days off; it is an integral part of your training regimen. These days ensure your body repairs from the micro-damages incurred during intense sessions, helping to build a stronger, more resilient runner. Active recovery methods, such as light cycling or swimming, can also be beneficial in promoting recovery without adding running-related strain.
        </p>
      </>
    ),

    postPlan: (
      <div className="max-w-3xl mx-auto my-8 text-gray-500 md:text-xl/relaxed dark:text-gray-400">
        <p className="max-w-3xl mx-auto my-8 text-gray-500 md:text-xl/relaxed dark:text-gray-400">
          In this tailored training plan, based on Dr. Daniels&apos; methods, we have ensured a gradual increase in both volume and intensity over the next five weeks, with a special focus on interval sessions that build to peak just before a carefully timed taper. The goal of the taper is to reach the start line fresh, rested, and eager to run.
        </p>
        <p className="max-w-3xl mx-auto my-8 text-gray-500 md:text-xl/relaxed dark:text-gray-400">
          Throughout the training period, remember to listen to your body and adjust the training intensity and volume as needed. Hydration, nutrition, and good sleep are also critical components of your preparation. By following these principles, you position yourself for success on race day and set the stage for a rewarding and enjoyable 10km experience.
        </p>
        <p className="max-w-3xl mx-auto my-8 text-gray-500 md:text-3xl/relaxed font-bold dark:text-gray-400">
          VDOT Zones
        </p>
        <p className="max-w-3xl mx-auto my-8 text-gray-500 md:text-xl/relaxed dark:text-gray-400">
          With a personal best of 43 minutes on a 10km, we can use Jack Daniels&apos; VDOT tables to estimate your running zones. These zones are based on his VDOT score, which is a measure of your running capacity or fitness. The tables assign a VDOT number based on race times, which in turn are used to calculate training intensities for different types of workouts. For a 10km time of 43 minutes, your VDOT score would approximately be in the range of 48-49. Let&apos;s use a VDOT score of 48 to estimate your running zones:
        </p>
        <ul className="list-disc list-inside">
          <li className="mb-2">
            Zone 1 (Easy/Light running): This is your recovery and long-run zone. The pace here should feel easy and sustainable over a long period. For VDOT 48, this would be approximately 5:50 to 6:10 per km.
          </li>
          <li className="mb-2">
            Zone 2 (Moderate): Used for slightly longer runs where you can still carry on a conversation. For a VDOT of 48, this is about 5:30 to 5:50 per km.
          </li>
          <li className="mb-2">
            Zone 3 (Tempo): This zone is for training at threshold pace, where you can talk in short sentences. For a VDOT of 48, this would be around 5:00 to 5:20 per km.
          </li>
          <li className="mb-2">
            Zone 4 (Interval training): This zone is for harder work that improves VO2 max and running economy. Typically, this would be about 4:30 to 4:50 per km for VDOT 48.
          </li>
          <li className="mb-2">
            Zone 5 (Racing/Speedwork): This zone is divided into several sub-zones (5a, 5b, 5c) representing everything from near threshold pace to above VO2 max pace. For VDOT 48, this can vary from 4:10 per km to 4:30 per km for shorter repetitive efforts.
          </li>
        </ul>
        <p className="max-w-3xl mx-auto my-8 text-gray-500 md:text-xl/relaxed dark:text-gray-400">
          It is important to note that these estimates are approximate and can vary based on individual differences, daily form, weather conditions, and other factors. Daniels&apos; formula assumes optimal running conditions and can be adjusted slightly based on your specific training situation and goals.
        </p>
      </div>
    ),

    table: (
      <>
        <table className="min-w-full text-left divide-y divide-gray-200 text-sm dark:divide-gray-800">
          <thead className="text-xs font-semibold tracking-wide text-gray-500 uppercase dark:text-gray-400">
            <tr className="divide-x divide-gray-200 dark:divide-gray-800">
              <th className="px-6 py-3">Week</th>
              <th className="px-6 py-3">Day 1</th>
              <th className="px-6 py-3">Day 2</th>
              <th className="px-6 py-3">Day 3</th>
              <th className="px-6 py-3">Day 4</th>
              <th className="px-6 py-3">Day 5</th>
              <th className="px-6 py-3">Day 6</th>
              <th className="px-6 py-3">Day 7</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
            {trainingPlan.map((week) => (
              <tr key={week.weekNumber} className="divide-x divide-gray-200 dark:divide-gray-800">
                <td className="px-6 py-3">{week.weekNumber}</td>
                {week.days.map((day, index) => (
                  // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                  <td key={index} className="px-6 py-3">{day.activity}</td>
                ))}
                {[...Array(7 - week.days.length)].map((e, i) => (
                  // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                  <td key={i} className="px-6 py-3">Rest</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </>
    ),
  };
  return (
    <>
      <RunningPlan {...runningPlanProps} />
    </>
  );
}
