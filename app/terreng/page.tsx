import { RunningPlan, type RunningPlanProps } from "@/components/running-plan";

export default function Home() {
  const runningPlanProps: RunningPlanProps = {
    heading: <>Løpeplan for Forbedring av Terskelfart og Terrengløping</>,
    motivation: (
      <>
        Velkommen til din skreddersydde løpeplan for å forbedre terskelfarten og 
        forberede deg for terrengløp! Denne planen er designet for å systematisk 
        senke din terskelfart (som målt på Coros-klokken) samtidig som den bygger 
        spesifikk styrke og utholdenhet for terrengløping. Med en balansert 
        kombinasjon av strukturerte intervalløkter, progressive langturer og 
        kvalitetsøkter i variert terreng, vil denne planen hjelpe deg å utvikle 
        både fart og tekniske ferdigheter. La oss ta din løping til neste nivå – 
        både på asfalt og i terrenget.
      </>
    ),
    prePrePlan: <></>,
    prePlan: (
      <>
        <p className="max-w-3xl mx-auto my-8 text-gray-500 md:text-xl/relaxed dark:text-gray-400">
          Denne løpeplanen er strukturert for å systematisk forbedre din terskelfart 
          og bygge spesifikk styrke for terrengløping. Basert på vitenskapelige 
          treningsprinsipper, inkluderer programmet en nøye balanse mellom høy- og 
          lavintensitetstrening, med særlig fokus på terskelfart og terrengspesifikke 
          ferdigheter.
        </p>

        <p className="max-w-3xl mx-auto my-8 text-gray-500 md:text-xl/relaxed dark:text-gray-400">
          Programmet veksler mellom ulike typer intervalltrening på onsdager, med 
          fokus på både klassiske intervaller og bakkeintervaller for å utvikle 
          både aerob kapasitet og spesifikk styrke. Langturer på søndager øker 
          gradvis, men ikke-lineært, for å tillate restitusjon mellom mer krevende 
          økter. En kombinasjon av løping på sti og asfalt sikrer allsidig utvikling 
          og spesifikk forberedelse for terrengløp.
        </p>
      </>
    ),
    table: (
      <>
        <table className="min-w-full text-left divide-y divide-gray-200 text-sm dark:divide-gray-800">
          <thead className="text-xs font-semibold tracking-wide text-gray-500 uppercase dark:text-gray-400">
            <tr className="divide-x divide-gray-200 dark:divide-gray-800">
              <th className="px-6 py-3">Uke</th>
              <th className="px-6 py-3">Mandag</th>
              <th className="px-6 py-3">Tirsdag</th>
              <th className="px-6 py-3">Onsdag</th>
              <th className="px-6 py-3">Torsdag</th>
              <th className="px-6 py-3">Fredag</th>
              <th className="px-6 py-3">Lørdag</th>
              <th className="px-6 py-3">Søndag</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
            <tr className="divide-x divide-gray-200 dark:divide-gray-800">
              <td className="px-6 py-3">1</td>
              <td className="px-6 py-3">Hviledag</td>
              <td className="px-6 py-3">Lett løping på asfalt: 40 min, sone 1</td>
              <td className="px-6 py-3">
                Klassiske intervaller: 15 min oppvarming, 6x1000m i sone 4 med 2 min aktiv pause, 10 min nedjogging
              </td>
              <td className="px-6 py-3">Hviledag</td>
              <td className="px-6 py-3">Lett løping med stride: 45 min sone 1 + 6x30s stride</td>
              <td className="px-6 py-3">Hviledag eller lett aktivitet</td>
              <td className="px-6 py-3">Langtur på sti: 15 km, sone 1-2</td>
            </tr>
            <tr className="divide-x divide-gray-200 dark:divide-gray-800">
              <td className="px-6 py-3">2</td>
              <td className="px-6 py-3">Hviledag</td>
              <td className="px-6 py-3">Progressiv løping: 50 min, sone 1 økende til sone 2 siste 15 min</td>
              <td className="px-6 py-3">
                Bakkeintervaller: 15 min oppvarming, 8x1 min bratte bakker i sone
                4-5 med jogg ned som pause, 10 min nedjogging
              </td>
              <td className="px-6 py-3">Hviledag</td>
              <td className="px-6 py-3">Teknisk løping på sti: 40 min sone 1, fokus på tekniske partier</td>
              <td className="px-6 py-3">Lett løping: 30 min, sone 1</td>
              <td className="px-6 py-3">Langtur på asfalt: 14 km, sone 1-2</td>
            </tr>
            <tr className="divide-x divide-gray-200 dark:divide-gray-800">
              <td className="px-6 py-3">3</td>
              <td className="px-6 py-3">Hviledag</td>
              <td className="px-6 py-3">Lett løping med "lette" intervaller: 40 min sone 1 + 5x1 min sone 2</td>
              <td className="px-6 py-3">
                Terskelintervaller: 15 min oppvarming, 4x8 min i sone 3 med 2 min pause, 10 min nedjogging
              </td>
              <td className="px-6 py-3">Hviledag</td>
              <td className="px-6 py-3">Lett løping: 45 min, sone 1</td>
              <td className="px-6 py-3">Hviledag eller lett aktivitet</td>
              <td className="px-6 py-3">Langtur på blandet underlag: 17 km, sone 1-2</td>
            </tr>
            <tr className="divide-x divide-gray-200 dark:divide-gray-800">
              <td className="px-6 py-3">4</td>
              <td className="px-6 py-3">Hviledag</td>
              <td className="px-6 py-3">Lett løping på sti: 45 min, sone 1</td>
              <td className="px-6 py-3">
                Korte intervaller: 15 min oppvarming, 10x45 sek sone 4 med 15 sek pause, 10 min nedjogging
              </td>
              <td className="px-6 py-3">Hviledag</td>
              <td className="px-6 py-3">Lett løping med "lette" intervaller: 40 min sone 1 + 5x2 min sone 2</td>
              <td className="px-6 py-3">Lett løping: 35 min, sone 1</td>
              <td className="px-6 py-3">Lett langtur: 13 km, sone 1 (restitusjonsuke)</td>
            </tr>
            <tr className="divide-x divide-gray-200 dark:divide-gray-800">
              <td className="px-6 py-3">5</td>
              <td className="px-6 py-3">Hviledag</td>
              <td className="px-6 py-3">Progressiv løping: 50 min, sone 1 økende til sone 2 siste 20 min</td>
              <td className="px-6 py-3">
                Bakkeintervaller: 15 min oppvarming, 2x(4x2 min) bratte
                bakker i sone 4 med 1 min pause og 3 min pause mellom serier, 10
                min nedjogging
              </td>
              <td className="px-6 py-3">Hviledag</td>
              <td className="px-6 py-3">Løping med teknikk-fokus: 45 min sone 1 + 10 min spesifikke teknikkøvelser</td>
              <td className="px-6 py-3">Hviledag eller lett aktivitet</td>
              <td className="px-6 py-3">Langtur på sti: 16 km, sone 1-2</td>
            </tr>
            <tr className="divide-x divide-gray-200 dark:divide-gray-800">
              <td className="px-6 py-3">6</td>
              <td className="px-6 py-3">Hviledag</td>
              <td className="px-6 py-3">Lett løping: 40 min, sone 1</td>
              <td className="px-6 py-3">
                Progressiv intervall: 15 min oppvarming, 3x2000m i økende
                tempo (sone 3, 3-4, 4) med 3 min aktiv pause, 10 min nedjogging
              </td>
              <td className="px-6 py-3">Hviledag</td>
              <td className="px-6 py-3">Lett løping med stride: 45 min sone 1 + 8x20s stride</td>
              <td className="px-6 py-3">Lett løping: 30 min, sone 1</td>
              <td className="px-6 py-3">Langtur med avsluttende tempo: 18 km, sone 1-2 + siste 3 km i sone 3</td>
            </tr>
            <tr className="divide-x divide-gray-200 dark:divide-gray-800">
              <td className="px-6 py-3">7</td>
              <td className="px-6 py-3">Hviledag</td>
              <td className="px-6 py-3">Lett løping med "lette" intervaller: 40 min sone 1 + 6x2 min sone 2</td>
              <td className="px-6 py-3">
                Fartslek på sti: 15 min oppvarming, 30 min variert tempo
                basert på terreng (sone 2-4), 10 min nedjogging
              </td>
              <td className="px-6 py-3">Hviledag</td>
              <td className="px-6 py-3">Lett løping: 45 min, sone 1</td>
              <td className="px-6 py-3">Hviledag eller lett aktivitet</td>
              <td className="px-6 py-3">Langtur på teknisk sti: 15 km, sone 1-2 (moderate restitusjonsuke)</td>
            </tr>
            <tr className="divide-x divide-gray-200 dark:divide-gray-800">
              <td className="px-6 py-3">8</td>
              <td className="px-6 py-3">Hviledag</td>
              <td className="px-6 py-3">Lett løping på asfalt: 45 min, sone 1</td>
              <td className="px-6 py-3">
                Terskelintervaller: 15 min oppvarming, 5x5 min i sone 3 med 2 min pause, 10 min nedjogging
              </td>
              <td className="px-6 py-3">Hviledag</td>
              <td className="px-6 py-3">Lett løping med stride: 40 min sone 1 + 6x30s stride</td>
              <td className="px-6 py-3">Lett løping: 35 min, sone 1</td>
              <td className="px-6 py-3">Langtur på blandet underlag: 20 km, sone 1-2</td>
            </tr>
          </tbody>
        </table>
      </>
    ),
    postPlan: (
      <div className="max-w-3xl mx-auto my-8 text-gray-500 md:text-xl/relaxed dark:text-gray-400">
        <p className="max-w-3xl mx-auto my-8 text-gray-500 md:text-xl/relaxed dark:text-gray-400">
          Dette løpeprogrammet er designet for å systematisk forbedre din terskelfart 
          og bygge spesifikk styrke for terrengløping over en 8-ukers periode. Her er 
          nøkkelkomponentene i programmet:
        </p>
        <ul className="list-disc list-inside">
          <li className="mb-2">
            <strong>Intervalltrening (onsdager):</strong> Veksler mellom forskjellige 
            typer intervaller for å stimulere ulike fysiologiske tilpasninger. 
            Bakkeintervaller utvikler spesifikk styrke for terrengløping, mens 
            klassiske intervaller forbedrer løpsøkonomi og terskelfart.
          </li>
          <li className="mb-2">
            <strong>Langturer (søndager):</strong> Følger et ikke-lineært 
            progresjonsmønster fra 15 km til 20 km, med strategiske restitusjonsuke i 
            uke 4 og 7. Veksler mellom sti, asfalt og blandet underlag for å utvikle 
            allsidige ferdigheter.
          </li>
          <li className="mb-2">
            <strong>Lette løpeturer med kvalitet:</strong> Inkluderer "lette" 
            intervaller i sone 2 og stride for å forbedre løpsøkonomi uten å tære på 
            restitusjonskapasiteten.
          </li>
          <li className="mb-2">
            <strong>Teknikkfokus:</strong> Dedikerte økter for å forbedre tekniske 
            ferdigheter i terreng, som vil forbedre både effektivitet og sikkerhet i 
            terrengløp.
          </li>
          <li className="mb-2">
            <strong>Restitusjon:</strong> Strategisk planlagte hviledager og lettere 
            uker sikrer tilstrekkelig restitusjon for å maksimere treningseffekten og 
            forhindre overtrening.
          </li>
        </ul>
        <p className="max-w-3xl mx-auto my-8 text-gray-500 md:text-xl/relaxed dark:text-gray-400">
          For å få maksimalt utbytte av dette programmet, anbefales det å følge 
          intensitetssonene nøye og lytte til kroppens signaler. Juster volum eller 
          intensitet ved behov, spesielt hvis du merker tegn på overtrening eller 
          ufullstendig restitusjon. Husk at konsistens over tid er nøkkelen til 
          forbedring - det er bedre å fullføre litt mindre med god kvalitet enn å 
          presse kroppen for hardt og risikere skade eller utbrenthet.
        </p>

        <h4 className="text-xl font-bold mt-4">Intensitetssoner</h4>
        <ul className="list-disc list-inside">
          <li className="mb-2">
            Sone 1 (Lett løping): 65-75% av maksimal hjertefrekvens. Konversasjonstempo.
          </li>
          <li className="mb-2">
            Sone 2 (Moderat): 75-80% av maksimal hjertefrekvens. Komfortabelt men målrettet tempo.
          </li>
          <li className="mb-2">
            Sone 3 (Terskel): 80-87% av maksimal hjertefrekvens. Utfordrende tempo som kan opprettholdes i ca. 1 time.
          </li>
          <li className="mb-2">
            Sone 4 (Intervall): 87-92% av maksimal hjertefrekvens. Hardt tempo som kan opprettholdes i kortere perioder.
          </li>
          <li className="mb-2">
            Sone 5 (Maksimal): 92-100% av maksimal hjertefrekvens. Svært høy intensitet for korte spurter.
          </li>
        </ul>
        
        <h4 className="text-xl font-bold mt-4">Justeringer</h4>
        <p className="max-w-3xl mx-auto my-8 text-gray-500 md:text-xl/relaxed dark:text-gray-400">
          Dette programmet kan justeres basert på individuelle behov og omstendigheter:
        </p>
        <ul className="list-disc list-inside">
          <li className="mb-2">
            Hvis du føler deg utmattet, vurder å erstatte en intervalltrening med en lett løpetur eller en hviledag.
          </li>
          <li className="mb-2">
            For de som ønsker ekstra utfordring, kan lørdagens lette løpeturer utvides med ytterligere 10-15 minutter.
          </li>
          <li className="mb-2">
            Ved spesifikke terrengløp som målsetting, vurder å gjøre flere av langturer på lignende terreng som løpet.
          </li>
          <li className="mb-2">
            Følg med på terskelfarten på Coros-klokken for å spore fremgang og justere intensiteten i terskeløktene deretter.
          </li>
        </ul>

        <h4 className="text-xl font-bold mt-4">Treningsformer og Begreper</h4>
        <p className="max-w-3xl mx-auto my-8 text-gray-500 md:text-xl/relaxed dark:text-gray-400">
          Her er en forklaring på de ulike treningsformene og begrepene som brukes i programmet:
        </p>
        <ul className="list-disc list-inside">
          <li className="mb-4">
            <strong>Stride/Strides:</strong> Korte, kontrollerte akselerasjoner på 20-30 sekunder hvor du gradvis øker farten 
            til ca. 85-90% av maksimal innsats, holder den i noen sekunder, og deretter gradvis senker farten. Strides utføres 
            på flat eller lett hellende underlag med full restitusjon mellom hver repetisjon (typisk 45-60 sekunder med rolig 
            gange eller jogg). Formålet er å forbedre løpeteknikk, nevromuskulær koordinasjon og løpsøkonomi uten 
            å akkumulere betydelig tretthet.
          </li>
          <li className="mb-4">
            <strong>Fartslek:</strong> Fra svensk "fart" (fart) og "lek" (lek), er en ustrukturert form for intervalltrening 
            hvor du veksler mellom ulike intensiteter basert på følelse eller terreng. I programmet vårt brukes fartslek på 
            sti hvor intensiteten varierer naturlig med terrengets utfordringer: raskere på flate partier, hardere innsats i 
            oppoverbakker, og kontrollert, teknisk løping i nedoverbakker. Det er en leken, intuitiv tilnærming til 
            intervalltrening som er spesielt nyttig for terrengløpere.
          </li>
          <li className="mb-4">
            <strong>Bakkeintervaller:</strong> Intensive løpeintervaller utført i oppoverbakke. Disse styrker spesifikke 
            muskelgrupper som er avgjørende for terrengløping, forbedrer kraft og effektivitet i oppoverbakker, og reduserer 
            belastningen på leddene sammenlignet med intervaller på flat grunn. Jogg rolig ned bakken som restitusjon 
            mellom repetisjonene. Velg bakker med 4-8% stigning for optimal treningseffekt.
          </li>
          <li className="mb-4">
            <strong>Terskelintervaller:</strong> Intervaller løpt i sone 3 (ca. 80-87% av maksimal hjertefrekvens), 
            som tilsvarer den høyeste intensiteten du kan opprettholde over lengre tid (ca. 1 time). Disse intervallene 
            er avgjørende for å forbedre terskelfarten og gjøre kroppen mer effektiv til å håndtere og fjerne laktat. 
            Typiske formater er 4-6 repetisjoner på 5-8 minutter med korte pauser (1-2 minutter).
          </li>
          <li className="mb-4">
            <strong>Klassiske intervaller:</strong> Tradisjonelle intervaller med spesifikke distanser (f.eks. 1000m) løpt 
            i sone 4 (87-92% av maksimal hjertefrekvens). Disse intervallene forbedrer VO2max (maksimalt oksygenopptak) 
            og anaerob kapasitet. De kjøres typisk på bane eller flat vei med kontrollerte pauser for å sikre konsistent 
            innsats gjennom økten.
          </li>
          <li className="mb-4">
            <strong>Progressiv løping/intervall:</strong> Økter hvor intensiteten øker gradvis, enten gjennom hele økten 
            (progressiv løping) eller for hver repetisjon (progressive intervaller). Denne tilnærmingen lærer kroppen å 
            håndtere økende belastning og forbereder deg på konkurransesituasjoner hvor farten typisk øker mot slutten.
          </li>
          <li className="mb-4">
            <strong>"Lette" intervaller:</strong> Korte intervaller i sone 2 som legges inn i ellers rolige løpeturer. 
            Disse gir en viss treningsstimulus uten å påvirke restitusjonen betydelig. De fungerer som en "melkesyre-vaksine" 
            og hjelper med å opprettholde en viss intensitetstoleranse selv på restitusjonsdager.
          </li>
          <li className="mb-4">
            <strong>Teknisk løping:</strong> Økter med spesifikt fokus på tekniske aspekter ved terrengløping, 
            som fotplassering, balanse, og effektiv navigering av ujevnt underlag. Disse øktene er generelt lavintensive 
            (sone 1) for å tillate bevisst fokus på teknikk, men inkluderer ofte teknisk utfordrende partier som krever 
            konsentrasjon og spesifikke ferdigheter.
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