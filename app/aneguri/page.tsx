import { RunningPlan, type RunningPlanProps } from "@/components/running-plan";

export default function Home() {
  const runningPlanProps: RunningPlanProps = {
    heading: <>Tilpasset Løpeplan for Optimal Restitusjon og Ytelse</>,
    motivation: (
      <>
        Velkommen til din skreddersydde løpeplan! Enten du er en erfaren løper
        som navigerer gjennom restitusjon etter en skade, eller en nybegynner
        med et ønske om å starte din løpekarriere på en sunn og sikker måte, er
        denne planen designet med nettopp deg i tankene. Inspirert av Jack
        Daniels&apos; anerkjente løpeformel, er vårt mål å støtte deg gjennom hvert
        steg mot full restitusjon og forbedret løpeytelse, selv mens du
        forbereder deg til en skulderoperasjon. La oss gjøre denne reisen sammen
        – steg for steg, dag for dag.
      </>
    ),
    prePrePlan: <></>,
    prePlan: (
      <>
        <p className="max-w-3xl mx-auto my-8 text-gray-500 md:text-xl/relaxed dark:text-gray-400">
          Denne løpeplanen er nøye tilpasset for å møte behovene til løpere som
          står overfor fysiske utfordringer, spesielt de med skader som krever
          operasjon. Basert på Jack Daniels&apos; løpeformel, fokuserer planen på å
          bygge et solid aerobt grunnlag, forbedre løpeøkonomien, og fremme
          skadeforebygging gjennom et balansert forhold mellom trening og hvile.
        </p>

        <p className="max-w-3xl mx-auto my-8 text-gray-500 md:text-xl/relaxed dark:text-gray-400">
          Ved å integrere lavintensitetstrening, som lett jogg og spinning, med
          nøye utvalgte intervalløkter, sikter vi mot å maksimere din aerobe
          kapasitet uten å legge unødvendig stress på skulderen din. Videre er
          programmet utformet med en progressiv økning i treningsvolum og
          intensitet, tilpasset individets nåværende helsetilstand og fremtidige
          mål.
        </p>
      </>
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
            <tr className="divide-x divide-gray-200 dark:divide-gray-800">
              <td className="px-6 py-3">1</td>
              <td className="px-6 py-3">Lett jogg: 40 min, sone 1</td>
              <td className="px-6 py-3">Spinning: 45 min moderat</td>
              <td className="px-6 py-3">
                Intervaller: 10 min oppvarming, 4x4 min sone 4, 10 min
                nedtrapping
              </td>
              <td className="px-6 py-3">Spinning: 30 min lett</td>
              <td className="px-6 py-3">Hviledag</td>
              <td className="px-6 py-3">Langtur: 60 min, sone 1 til 2</td>
              <td className="px-6 py-3">Hviledag eller lett aktivitet</td>
            </tr>
            <tr className="divide-x divide-gray-200 dark:divide-gray-800">
              <td className="px-6 py-3">2</td>
              <td className="px-6 py-3">Lett jogg: 45 min, sone 1</td>
              <td className="px-6 py-3">Spinning: 50 min variert</td>
              <td className="px-6 py-3">Fartslek: 20 min, sone 2-3</td>
              <td className="px-6 py-3">Hviledag</td>
              <td className="px-6 py-3">
                Intervaller: 5x3 min sone 4, 10 min nedtrapping
              </td>
              <td className="px-6 py-3">Lett jogg: 40 min, sone 1</td>
              <td className="px-6 py-3">Hviledag eller lett aktivitet</td>
            </tr>
            <tr className="divide-x divide-gray-200 dark:divide-gray-800">
              <td className="px-6 py-3">3</td>
              <td className="px-6 py-3">
                Lett jogg: 50 min i variert terreng, sone 1
              </td>
              <td className="px-6 py-3">
                Spinning: 45 min, inkluderer 5 min høyintensitetsspurter
              </td>
              <td className="px-6 py-3">
                Intervaller: 5x4 min i sone 4, med 3 min rolig jogg som pause
              </td>
              <td className="px-6 py-3">
                Kombinasjonstrening: 15 min spinning + 15 min lett jogg
              </td>
              <td className="px-6 py-3">Hviledag</td>
              <td className="px-6 py-3">
                Progressiv langtur: 70 min, sone 1 økende til sone 2 i de siste
                20 min
              </td>
              <td className="px-6 py-3">
                Aktiv restitusjon: Yoga eller lett svømming, 30 min
              </td>
            </tr>
            <tr className="divide-x divide-gray-200 dark:divide-gray-800">
              <td className="px-6 py-3">4</td>
              <td className="px-6 py-3">
                Fjelljogg: 55 min i lett terreng, fokus på teknikk, sone 1
              </td>
              <td className="px-6 py-3">
                Spinning: 45 min med 10 minutter i sone 3, resten i sone 2
              </td>
              <td className="px-6 py-3">
                Tempoløp: 20 min i sone 3, med 10 min oppvarming og nedtrapping
              </td>
              <td className="px-6 py-3">
                Kombinasjonstrening: 20 min rolig sykling + 20 min
                core-styrkeøvelser
              </td>
              <td className="px-6 py-3">Hviledag</td>
              <td className="px-6 py-3">
                Langtur med bakkeintervaller: 75 min, inkluder 5x2 min harde
                bakkespurter
              </td>
              <td className="px-6 py-3">Hviledag eller lett pilates, 45 min</td>
            </tr>
            <tr className="divide-x divide-gray-200 dark:divide-gray-800">
              <td className="px-6 py-3">5</td>
              <td className="px-6 py-3">
                Sti-løping: 60 min, sone 1, utforsk nye stier
              </td>
              <td className="px-6 py-3">
                Spinning: 50 min med siste 15 min i sone 4
              </td>
              <td className="px-6 py-3">
                Intervaller: 6x3 min i sone 4, med 2 min rolig jogg som pause
              </td>
              <td className="px-6 py-3">
                Rolig jogg eller spinning: Velger selv, 35 min i sone 1
              </td>
              <td className="px-6 py-3">Hviledag</td>
              <td className="px-6 py-3">
                Langtur med fartsendringer: 80 min, inkluder 10 minutter hver av
                sone 1, sone 2 og sone 3
              </td>
              <td className="px-6 py-3">
                Aktiv restitusjon: Rolig sykling eller vandring i naturen, 40
                min
              </td>
            </tr>
          </tbody>
        </table>
      </>
    ),
    postPlan: (
      <div className="max-w-3xl mx-auto my-8 text-gray-500 md:text-xl/relaxed dark:text-gray-400">
        <p className="max-w-3xl mx-auto my-8 text-gray-500 md:text-xl/relaxed dark:text-gray-400">
          Etter din skulderoperasjon, er det viktig å ta hensyn til kroppens
          signaler og tillate tilstrekkelig tid for heling før du gjenopptar
          full treningsbelastning. Nøkkelen til en vellykket restitusjon ligger
          i gradvis progresjon og modifikasjon av treningsrutinene for å
          tilpasse seg kroppens nye grenser. Fokus vil ligge på:
        </p>
        <ul className="list-disc list-inside">
          <li className="mb-2">
            Forsiktig Gjenopptakelse: Start sakte med lavintensitetsaktiviteter
            som gange eller lett jogg, basert på råd fra ditt medisinske team.
          </li>
          <li className="mb-2">
            Styrke og Fleksibilitet: Implementer øvelser spesifikt utformet for
            å styrke skulderområdet og forbedre fleksibiliteten, uten å belaste
            den opererte skulderen.
          </li>
          <li className="mb-2">
            Tett Oppfølging: Hold regelmessig kontakt med ditt medisinske team
            og en kvalifisert løpetrener for å sikre at treningen tilpasses din
            helingsprosess.
          </li>
          <li className="mb-2">
            Lytt til Kroppen: Juster treningsintensiteten og -volumet basert på
            hvordan kroppen føles. Restitusjon etter operasjonen er like viktig
            som selve treningen.
          </li>
        </ul>
        <p className="max-w-3xl mx-auto my-8 text-gray-500 md:text-xl/relaxed dark:text-gray-400">
          Ved å følge disse retningslinjene, sikter vi mot en smidig overgang
          tilbake til din optimale løpeform, samtidig som vi ivaretar din
          langvarige helse og velvære. Vår tilpassede løpeplan er mer enn bare
          en treningsrutine; det er en vei mot helhetlig restitusjon og fornyet
          styrke.
        </p>

        <h4 className="text-xl font-bold mt-4">Soner</h4>
        <ul className="list-disc list-inside">
          <li className="mb-2">
            Sone 1 (Enkel/Lett løping): Ca. 6:10 til 6:55 per km.
          </li>
          <li className="mb-2">Sone 2 (Moderat): Ca. 5:45-6:00 per km.</li>
          <li className="mb-2">Sone 3 (Tempo): Ca. 5:20-5:40 per km.</li>
          <li className="mb-2">
            Sone 4 (Intervalltrening): Ca. 4:55-5:10 per km.
          </li>
          <li className="mb-2">
            Sone 5 (Racing/Speedwork): Ca. 4:30 per km til 4:50 per km for
            kortere repeterende innsatser.
          </li>
        </ul>
      </div>
    ),
  };
  return (
    <>
      <RunningPlan {...runningPlanProps} />
    </>
  );
}
