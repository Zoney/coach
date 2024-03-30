import type { ReactElement } from "react";

export type RunningPlanProps = {
  heading: ReactElement;
  motivation: ReactElement;
  prePlan: ReactElement;
  table: ReactElement;
  postPlan: ReactElement;
  prePrePlan: ReactElement;
};
export function RunningPlan({
  prePlan,
  prePrePlan,
  table,
  postPlan,
  motivation,
  heading,
}: RunningPlanProps) {
  return (
    <div className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              {heading}
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              {motivation}
            </p>
          </div>
          <p className="text-sm tracking-wide text-gray-500/60 dark:text-gray-400/60">
            {prePrePlan}
          </p>
        </div>
        <div className="flex flex-col items-center space-y-4">{prePlan}</div>
        <div className="w-full mt-8 overflow-auto rounded-lg border">
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
              <tr className="divide-x divide-gray-200 dark:divide-gray-800">
                <td className="px-6 py-3">1</td>
                <td className="px-6 py-3">Rolig langtur, 70 min i sone 2</td>
                <td className="px-6 py-3">Lett jogg, 40 min i sone 1</td>
                <td className="px-6 py-3">
                  Intervall: 10 min oppv, 5x4 min sone 4, 10 min nedjogg
                </td>
                <td className="px-6 py-3">Lett jogg, 50 min i sone 1-2</td>
                <td className="px-6 py-3">Hviledag/aktiv restitusjon</td>
                <td className="px-6 py-3">Progressiv langtur, 1t 45 min</td>
                <td className="px-6 py-3">Lett jogg, 70 min i sone 1</td>
              </tr>
              <tr className="divide-x divide-gray-200 dark:divide-gray-800">
                <td className="px-6 py-3">2</td>
                <td className="px-6 py-3">Rolig langtur, 80 min i sone 2</td>
                <td className="px-6 py-3">Lett jogg, 45 min i sone 1</td>
                <td className="px-6 py-3">
                  Intervall: 15 min oppv, 4x5 min sone 4, 10 min nedjogg
                </td>
                <td className="px-6 py-3">Lett jogg, 60 min i sone 1-2</td>
                <td className="px-6 py-3">Hviledag/aktiv restitusjon</td>
                <td className="px-6 py-3">Langtur, 2 timer i sone 2-3</td>
                <td className="px-6 py-3">Lett jogg, 75 min i sone 1</td>
              </tr>
              <tr className="divide-x divide-gray-200 dark:divide-gray-800">
                <td className="px-6 py-3">3</td>
                <td className="px-6 py-3">Rolig langtur, 90 min i sone 2</td>
                <td className="px-6 py-3">Lett jogg, 50 min i sone 1</td>
                <td className="px-6 py-3">
                  Intervall: 15 min oppv, 5x4 min sone 4-5, 15 min nedjogg
                </td>
                <td className="px-6 py-3">Lett jogg, 65 min i sone 1-2</td>
                <td className="px-6 py-3">Hviledag/aktiv restitusjon</td>
                <td className="px-6 py-3">Langtur, 2t 15 min i sone 2</td>
                <td className="px-6 py-3">Lett jogg, 80 min i sone 1</td>
              </tr>
              <tr className="divide-x divide-gray-200 dark:divide-gray-800">
                <td className="px-6 py-3">4</td>
                <td className="px-6 py-3">Rolig langtur, 1t 30 min i sone 2</td>
                <td className="px-6 py-3">Lett jogg, 55 min i sone 1</td>
                <td className="px-6 py-3">
                  Intervall: 20 min oppv, 6x4 min sone 4-5, 15 min nedjogg
                </td>
                <td className="px-6 py-3">Lett jogg, 70 min i sone 1-2</td>
                <td className="px-6 py-3">Hviledag/aktiv restitusjon</td>
                <td className="px-6 py-3">Langtur, 3 timer i sone 2</td>
                <td className="px-6 py-3">Lett jogg, 90 min i sone 1</td>
              </tr>
              <tr className="divide-x divide-gray-200 dark:divide-gray-800">
                <td className="px-6 py-3">5</td>
                <td className="px-6 py-3">Rolig langtur, 60 min i sone 2</td>
                <td className="px-6 py-3">Lett jogg, 30 min i sone 1</td>
                <td className="px-6 py-3">
                  Lett intervall: 10 min oppv, 4x2 min sone 3, 10 min nedjogg
                </td>
                <td className="px-6 py-3">Hviledag</td>
                <td className="px-6 py-3">Lett jogg, 30 min i sone 1</td>
                <td className="px-6 py-3">Hviledag</td>
                <td className="px-6 py-3">Maraton</td>
              </tr>
            </tbody>
          </table>
        </div>
        {postPlan}
      </div>
    </div>
  );
}
