import { RunningPlan, type RunningPlanProps } from "@/components/running-plan";

export default function Home() {
  const runningPlanProps: RunningPlanProps = {
    heading: <>Tilpasset Løpeplan for Road to half!</>,
    motivation: (
      <>
        Litt etter litt..
      </>
    ),
    prePrePlan: <></>,
    prePlan: (
      <>

      </>
    ),
    table: (
      <>
        <div className="max-w-3xl mx-auto my-8 text-gray-500 md:text-xl/relaxed dark:text-gray-400">
          <p className="max-w-3xl mx-auto my-8 text-gray-500 md:text-xl/relaxed dark:text-gray-400">
            Denne løpeplanen er designet for å hjelpe deg med å øke din ukentlige løpedistanse fra 40 km til 50 km, og samtidig forberede deg på å løpe en god tid på halvmaraton. Planen inneholder en variert blanding av rolige løpeturer, tempoøkter, intervalltrening og langkjøringer.
          </p>
          <h4 className="text-xl font-bold mt-4">Soner</h4>
          <ul className="list-disc list-inside">
            <li className="mb-2">Sone 1 (Enkel/Lett løping): Ca. 6:10 til 6:55 per km.</li>
            <li className="mb-2">Sone 2 (Moderat): Ca. 5:45-6:00 per km.</li>
            <li className="mb-2">Sone 3 (Tempo): Ca. 5:20-5:40 per km.</li>
            <li className="mb-2">Sone 4 (Intervalltrening): Ca. 4:55-5:10 per km.</li>
            <li className="mb-2">Sone 5 (Racing/Speedwork): Ca. 4:30 per km til 4:50 per km for kortere repeterende innsatser.</li>
          </ul>
          <h4 className="text-xl font-bold mt-4">Hvordan utføre øktene</h4>
          <ul className="list-disc list-inside">
            <li className="mb-2">Fartslek: Veksle mellom rask og rolig løping, for eksempel 1 minutt raskt (Sone 5) etterfulgt av 2 minutter rolig (Sone 1).</li>
            <li className="mb-2">Intervaller: Løp en bestemt distanse eller tid (f.eks. 800m eller 4 minutter) i høy intensitet (Sone 4), med rolig jogg eller gåpause mellom.</li>
            <li className="mb-2">Langkjøring: En lengre tur i rolig tempo (Sone 1) for å bygge utholdenhet.</li>
            <li className="mb-2">Tempoløp: Løp i et moderat til raskt tempo (Sone 3) som du kan holde over en lengre periode.</li>
          </ul>
        </div>

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
              <td className="px-6 py-3">Hvile</td>
              <td className="px-6 py-3">8 km Sone 1</td>
              <td className="px-6 py-3">6 km Sone 2</td>
              <td className="px-6 py-3">8 km Sone 1</td>
              <td className="px-6 py-3">Hvile</td>
              <td className="px-6 py-3">5 x 800m Sone 4, med 400m jogg mellom</td>
              <td className="px-6 py-3">12 km Sone 1</td>
            </tr>
            <tr className="divide-x divide-gray-200 dark:divide-gray-800">
              <td className="px-6 py-3">2</td>
              <td className="px-6 py-3">Hvile</td>
              <td className="px-6 py-3">8 km Sone 1</td>
              <td className="px-6 py-3">6 km Sone 3</td>
              <td className="px-6 py-3">8 km Sone 1</td>
              <td className="px-6 py-3">Hvile</td>
              <td className="px-6 py-3">Fartslek: 8 km med 1 min Sone 5 / 2 min Sone 1</td>
              <td className="px-6 py-3">14 km Sone 1</td>
            </tr>
            <tr className="divide-x divide-gray-200 dark:divide-gray-800">
              <td className="px-6 py-3">3</td>
              <td className="px-6 py-3">Hvile</td>
              <td className="px-6 py-3">10 km Sone 1</td>
              <td className="px-6 py-3">7 km Sone 2</td>
              <td className="px-6 py-3">10 km Sone 1</td>
              <td className="px-6 py-3">Hvile</td>
              <td className="px-6 py-3">6 x 600m Sone 4, med 300m jogg mellom</td>
              <td className="px-6 py-3">15 km Sone 1</td>
            </tr>
            <tr className="divide-x divide-gray-200 dark:divide-gray-800">
              <td className="px-6 py-3">4</td>
              <td className="px-6 py-3">Hvile</td>
              <td className="px-6 py-3">8 km Sone 1</td>
              <td className="px-6 py-3">8 km Sone 3</td>
              <td className="px-6 py-3">8 km Sone 1</td>
              <td className="px-6 py-3">Hvile</td>
              <td className="px-6 py-3">Fartslek: 10 km med 1 min Sone 5 / 2 min Sone 1</td>
              <td className="px-6 py-3">16 km Sone 1</td>
            </tr>
            <tr className="divide-x divide-gray-200 dark:divide-gray-800">
              <td className="px-6 py-3">5</td>
              <td className="px-6 py-3">Hvile</td>
              <td className="px-6 py-3">10 km Sone 1</td>
              <td className="px-6 py-3">8 km Sone 2</td>
              <td className="px-6 py-3">10 km Sone 1</td>
              <td className="px-6 py-3">Hvile</td>
              <td className="px-6 py-3">8 x 400m Sone 4, med 200m jogg mellom</td>
              <td className="px-6 py-3">17 km Sone 1</td>
            </tr>
            <tr className="divide-x divide-gray-200 dark:divide-gray-800">
              <td className="px-6 py-3">6</td>
              <td className="px-6 py-3">Hvile</td>
              <td className="px-6 py-3">10 km Sone 1</td>
              <td className="px-6 py-3">8 km Sone 3</td>
              <td className="px-6 py-3">10 km Sone 1</td>
              <td className="px-6 py-3">Hvile</td>
              <td className="px-6 py-3">Fartslek: 12 km med 1 min Sone 5 / 2 min Sone 1</td>
              <td className="px-6 py-3">18 km Sone 1</td>
            </tr>
            <tr className="divide-x divide-gray-200 dark:divide-gray-800">
              <td className="px-6 py-3">7</td>
              <td className="px-6 py-3">Hvile</td>
              <td className="px-6 py-3">12 km Sone 1</td>
              <td className="px-6 py-3">9 km Sone 2</td>
              <td className="px-6 py-3">12 km Sone 1</td>
              <td className="px-6 py-3">Hvile</td>
              <td className="px-6 py-3">10 x 300m Sone 4, med 100m jogg mellom</td>
              <td className="px-6 py-3">19 km Sone 1</td>
            </tr>
            <tr className="divide-x divide-gray-200 dark:divide-gray-800">
              <td className="px-6 py-3">8</td>
              <td className="px-6 py-3">Hvile</td>
              <td className="px-6 py-3">10 km Sone 1</td>
              <td className="px-6 py-3">9 km Sone 3</td>
              <td className="px-6 py-3">10 km Sone 1</td>
              <td className="px-6 py-3">Hvile</td>
              <td className="px-6 py-3">Fartslek: 14 km med 1 min Sone 5 / 2 min Sone 1</td>
              <td className="px-6 py-3">20 km Sone 1</td>
            </tr>
            <tr className="divide-x divide-gray-200 dark:divide-gray-800">
              <td className="px-6 py-3">9</td>
              <td className="px-6 py-3">Hvile</td>
              <td className="px-6 py-3">12 km Sone 1</td>
              <td className="px-6 py-3">10 km Sone 2</td>
              <td className="px-6 py-3">12 km Sone 1</td>
              <td className="px-6 py-3">Hvile</td>
              <td className="px-6 py-3">12 x 200m Sone 4, med 100m jogg mellom</td>
              <td className="px-6 py-3">21 km Sone 1</td>
            </tr>
            <tr className="divide-x divide-gray-200 dark:divide-gray-800">
              <td className="px-6 py-3">10</td>
              <td className="px-6 py-3">Hvile</td>
              <td className="px-6 py-3">12 km Sone 1</td>
              <td className="px-6 py-3">10 km Sone 3</td>
              <td className="px-6 py-3">12 km Sone 1</td>
              <td className="px-6 py-3">Hvile</td>
              <td className="px-6 py-3">Fartslek: 14 km med 1 min Sone 5 / 2 min Sone 1</td>
              <td className="px-6 py-3">22 km Sone 1</td>
            </tr>
            <tr className="divide-x divide-gray-200 dark:divide-gray-800">
              <td className="px-6 py-3">11</td>
              <td className="px-6 py-3">Hvile</td>
              <td className="px-6 py-3">10 km Sone 1</td>
              <td className="px-6 py-3">10 km Sone 2</td>
              <td className="px-6 py-3">10 km Sone 1</td>
              <td className="px-6 py-3">Hvile</td>
              <td className="px-6 py-3">10 x 400m Sone 4, med 200m jogg mellom</td>
              <td className="px-6 py-3">16 km Sone 1</td>
            </tr>
            <tr className="divide-x divide-gray-200 dark:divide-gray-800">
              <td className="px-6 py-3">12</td>
              <td className="px-6 py-3">Hvile</td>
              <td className="px-6 py-3">8 km Sone 1</td>
              <td className="px-6 py-3">8 km Sone 2</td>
              <td className="px-6 py-3">6 km Sone 1</td>
              <td className="px-6 py-3">Hvile</td>
              <td className="px-6 py-3">6 km Sone 1 med 3 x 100m strides</td>
              <td className="px-6 py-3">Halvmaratonløp</td>
            </tr>
          </tbody>
        </table>

      </>
    ),
    postPlan: (
      <></>
    ),
  };
  return (
    <>
      <RunningPlan {...runningPlanProps} />
    </>
  );
}
