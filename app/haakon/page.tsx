import { RunningPlan, type RunningPlanProps } from "@/components/running-plan";

export default function Home() {
  const runningPlanProps: RunningPlanProps = {
    heading: <>Maraton 4. Mai kl 11</>,
    motivation: <>Få løpt den derre maratonen, da!</>,
    prePrePlan: <>Det skal ikke være lett</>,
    prePlan: (
      <>
        <p className="max-w-3xl mx-auto my-8 text-gray-500 md:text-xl/relaxed dark:text-gray-400">
          Når man utarbeider et treningsprogram med mål om å fullføre en
          maraton, er det essensielt å bygge på prinsippene til Dr. Jack Daniels
          og hans velprøvde &quot;Running Formula.&quot; Daniels, en anerkjent ekspert
          innen løpevitenskap, understreker betydningen av presis
          intensitetskontroll for å maksimere treningsfordelene uten å
          overbelaste kroppen. Hans filosofi kan oppsummeres i noen
          nøkkelprinsipper: individualisert tempo basert på nåværende
          kondisjonsnivå, en balansert blanding av intensitetene VDOT-tabellene
          foreslår, og viktigheten av restitusjon.
        </p>

        <p className="max-w-3xl mx-auto my-8 text-gray-500 md:text-xl/relaxed dark:text-gray-400">
          For å tilpasse denne tilnærmingen til ditt mål om å fullføre en
          maraton på 3 timer og 52 minutter, er fokus på tre hovedområder: 1)
          Aerob utholdenhet gjennom langturer og lett jogging, 2) Løpeøkonomi og
          hastighetsutvikling gjennom intervalltrening, og 3) Optimal
          restitusjon for å støtte hardere treningsdager og forhindre skader.
        </p>

        <p className="max-w-3xl mx-auto my-8 text-gray-500 md:text-xl/relaxed dark:text-gray-400">
          Aerob utholdenhet Langturene er kritiske for å bygge opp den aerobe
          utholdenheten som er nødvendig for maraton. Disse øktene bør utføres i
          et tempo som føles moderat utfordrende, men likevel bærekraftig over
          tid. Fokuset her er på tid tilbragt på føttene fremfor distanse, noe
          som forbereder muskler, sener, og ledd på belastningen av løpsdagen.
        </p>

        <p className="max-w-3xl mx-auto my-8 text-gray-500 md:text-xl/relaxed dark:text-gray-400">
          Løpeøkonomi og hastighetsutvikling Intervalltreningen er nøkkelen til
          å forbedre løpeøkonomien din og øke hastigheten. Ved å innarbeide
          intervaller i sone 4-5, som Dr. Daniels&apos VDOT-tabeller vil tilrå
          basert på dine personlige rekorder, stimuleres effektiviteten i
          løpesteg og pusteteknikk. Det er viktig å følge opp disse hardere
          øktene med lett jogging eller hvile, for å tillate kroppen å
          restituere og bygge seg sterkere.
        </p>

        <p className="max-w-3xl mx-auto my-8 text-gray-500 md:text-xl/relaxed dark:text-gray-400">
          Optimal restitusjon Hviledager og lette joggedager er ikke bare
          &quot;fridager&quot;; de er en integrert del av treningsplanen. Disse dagene
          sikrer at kroppen heler fra mikroskadene som oppstår under de hardere
          treningsøktene, og de bidrar til å bygge en sterkere, mer utholdende
          løper. Aktiv restitusjon, som lett sykling eller svømming, kan også
          være verdifulle verktøy for å fremme restitusjonen uten å legge til
          løpsrelatert belastning.
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
                <td className="px-6 py-3 bg-gradient-to-br from-green-600 to-transparent">Rolig langtur, 70 min i sone 2</td>
                <td className="px-6 py-3">Lett jogg, 40 min i sone 1</td>
                <td className="px-6 py-3 bg-gradient-radial from-violet-950 to-transparent">
                  <p className="px-2 border border-red-400">Intervall</p>
                  <p className="px-2 border border-red-100">10 min oppv</p>
                  <p className="px-2 border border-red-900">5x4 min sone 4</p>
                  <p className="px-2 border border-red-100">10 min nedjogg</p>
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
                <td className="px-6 py-3 bg-gradient-radial from-violet-900 to-transparent">
                  <p className="px-2 border border-red-400">Intervall</p>
                  <p className="px-2 border border-red-100">15 min oppv</p>
                  <p className="px-2 border border-red-900">4x5 min sone 4</p>
                  <p className="px-2 border border-red-100">10 min nedjogg</p>
                </td>
                <td className="px-6 py-3">Lett jogg, 60 min i sone 1-2</td>
                <td className="px-6 py-3">Hviledag/aktiv restitusjon</td>
                <td className="px-6 py-3">Langtur, 2 timer i sone 2-3</td>
                <td className="px-6 py-3">Lett jogg, 75 min i sone 1</td>
              </tr>
              <tr className="divide-x divide-gray-200 dark:divide-gray-500">
                <td className="px-6 py-3">3</td>
                <td className="px-6 py-3">Rolig langtur, 90 min i sone 2</td>
                <td className="px-6 py-3">Lett jogg, 50 min i sone 1</td>
                <td className="px-6 py-3 bg-gradient-radial from-violet-800 to-transparent">
                  <p className="px-2 border border-red-400">Intervall</p>
                  <p className="px-2 border border-red-100">15 min oppv</p>
                  <p className="px-2 border border-red-900">5x4 min sone 4-5</p>
                  <p className="px-2 border border-red-100">15 min nedjogg</p>
                </td>
                <td className="px-6 py-3">Lett jogg, 65 min i sone 1-2</td>
                <td className="px-6 py-3">Hviledag/aktiv restitusjon</td>
                <td className="px-6 py-3">Langtur, 2t 15 min i sone 2</td>
                <td className="px-6 py-3">Lett jogg, 80 min i sone 1</td>
              </tr>
              <tr className="divide-x divide-gray-200 dark:divide-gray-600">
                <td className="px-6 py-3">4</td>
                <td className="px-6 py-3">Rolig langtur, 1t 30 min i sone 2</td>
                <td className="px-6 py-3">Lett jogg, 55 min i sone 1</td>
                <td className="px-6 py-3 bg-gradient-radial from-violet-700 to-transparent">
                  <p className="px-2 border border-red-400">Intervall</p>
                  <p className="px-2 border border-red-100">20 min oppv</p>
                  <p className="px-2 border border-red-900">6x4 min sone 4-5</p>
                  <p className="px-2 border border-red-100">15 min nedjogg</p>
                </td>
                <td className="px-6 py-3">Lett jogg, 70 min i sone 1-2</td>
                <td className="px-6 py-3">Hviledag/aktiv restitusjon</td>
                <td className="px-6 py-3">Langtur, 3 timer i sone 2</td>
                <td className="px-6 py-3">Lett jogg, 90 min i sone 1</td>
              </tr>
              <tr className="divide-x divide-gray-200 dark:divide-gray-700">
                <td className="px-6 py-3">5</td>
                <td className="px-6 py-3">Rolig langtur, 60 min i sone 2</td>
                <td className="px-6 py-3">Lett jogg, 30 min i sone 1</td>
                <td className="px-6 py-3 bg-gradient-radial from-violet-600 to-transparent">
                  <p className="px-2 border border-red-400">Intervall</p>
                  <p className="px-2 border border-red-100">10 min oppv</p>
                  <p className="px-2 border border-red-900">4x2 min sone 3</p>
                  <p className="px-2 border border-red-100">10 min nedjogg</p>
                </td>
                <td className="px-6 py-3">Hviledag</td>
                <td className="px-6 py-3">Lett jogg, 30 min i sone 1</td>
                <td className="px-6 py-3">Hviledag</td>
                <td className="px-6 py-3 bg-gradient-to-br from-transparent to-blue-500">Maraton</td>
              </tr>
            </tbody>
          </table>
      </>
    ),
    postPlan: (
      <div className="max-w-3xl mx-auto my-8 text-gray-500 md:text-xl/relaxed dark:text-gray-400">
        <p className="max-w-3xl mx-auto my-8 text-gray-500 md:text-xl/relaxed dark:text-gray-400">
          I denne tilpassede treningsplanen, basert på Dr. Daniels&apos; metoder, har
          vi sørget for gradvis økning av både volum og intensitet over fem
          uker, med et spesielt fokus på en langtur som bygger opp til 3 timer i
          uke 4. Dette sikrer at du når toppen av din aerobe kapasitet og
          løpeøkonomi rett før en nøye timet nedtrapping. Målet med
          nedtrappingen er å komme til startstreken frisk, hvilt, og med en
          følelse av å være &quot;sulten&quot; etter å løpe.
        </p>
        <p className="max-w-3xl mx-auto my-8 text-gray-500 md:text-xl/relaxed dark:text-gray-400">
          Gjennom hele treningsperioden, husk å lytte til kroppen din og justere
          treningsintensiteten og -volumet etter behov. Hydrering, ernæring, og
          god søvn er også avgjørende komponenter i din forberedelse. Ved å
          følge disse prinsippene, posisjonerer du deg selv for suksess på
          løpsdagen og setter scenen for en både givende og hyggelig
          maratonopplevelse.
        </p>
        <p className="max-w-3xl mx-auto my-8 text-gray-500 md:text-3xl/relaxed font-bold dark:text-gray-400">
          VDOT soner
        </p>
        <p className="max-w-3xl mx-auto my-8 text-gray-500 md:text-xl/relaxed dark:text-gray-400">
          Med en personlig rekord på 10 km på 43 minutter, kan vi bruke Jack
          Daniels&apos; VDOT-tabeller for å estimere dine løpesoner. Disse sonene er
          basert på hans VDOT-score, som er et mål på din løpekapasitet eller
          kondisjon. Tabellene tilordner et VDOT-nummer basert på løpstider, som
          igjen brukes til å beregne treningsintensiteter for ulike typer
          trening. For en 10 km tid på 43 minutter, vil din VDOT-score være
          omtrentlig i området 48-49. La oss bruke en VDOT-score på 48 til å
          estimere dine løpesoner:
        </p>
        <ul className="list-disc list-inside">
          <li className="mb-2">
            Sone 1 (Enkel/Lett løping): Dette er din restitusjons- og
            langtursone. Hastigheten her skal føles lett og være bærekraftig
            over lang tid. For VDOT 48, vil dette være ca. 5:50 til 6:10 per km.
          </li>
          <li className="mb-2">
            Sone 2 (Moderat): Brukes for litt lengre løpeturer hvor du fremdeles
            kan føre en samtale. For en VDOT på 48, er dette omtrent 5:30 til
            5:50 per km.
          </li>
          <li className="mb-2">
            Sone 3 (Tempo): Denne sonen er for trening ved terskelfarten, hvor
            du kan snakke i korte setninger. For en VDOT på 48, vil dette være
            rundt 5:00 til 5:20 per km.
          </li>
          <li className="mb-2">
            Sone 4 (Intervalltrening): Denne sonen er for hardere arbeid som
            forbedrer VO2 maks og løpeøkonomi. Typisk vil dette være omtrent
            4:30 til 4:50 per km for VDOT 48.
          </li>
          <li className="mb-2">
            Sone 5 (Racing/Speedwork): Denne sonen er delt inn i flere subsoner
            (5a, 5b, 5c) som representerer alt fra nær terskelfart til fart over
            VO2 maks. For VDOT 48 kan dette variere fra 4:10 per km til 4:30 per
            km for kortere repeterende innsatser.
          </li>
        </ul>
        Det er viktig å merke seg at disse estimatene er omtrentlige og kan
        variere basert på individuelle forskjeller, dagens form, værforhold, og
        andre faktorer. Daniels&apos; formel antar optimal løpeforhold og kan
        justeres noe basert på din spesifikke treningssituasjon og mål.
        <h4 className="text-xl font-bold mt-4">Kort</h4>
        <ul className="list-disc list-inside">
          <li className="mb-2">
            Sone 1 (Enkel/Lett løping): Ca. 5:50 til 6:10 per km.
          </li>
          <li className="mb-2">Sone 2 (Moderat): Ca. 5:30 til 5:50 per km.</li>
          <li className="mb-2">Sone 3 (Tempo): Ca. 5:00 til 5:20 per km.</li>
          <li className="mb-2">
            Sone 4 (Intervalltrening): Ca. 4:30 til 4:50 per km.
          </li>
          <li className="mb-2">
            Sone 5 (Racing/Speedwork): Ca. 4:10 per km til 4:30 per km for
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
