import type { PlanContent, Week } from "@/lib/plans";

const weeks: Week[] = [
  {
    week: 1,
    days: [
      "Hviledag",
      "Lett løping på asfalt: 40 min, sone 1",
      "Klassiske intervaller: 15 min oppvarming, 6x1000m i sone 4 med 2 min aktiv pause, 10 min nedjogging",
      "Lett løping med stride: 45 min sone 1 + 6x30s stride",
      "Hviledag",
      "Hviledag eller lett aktivitet",
      "Langtur på sti: 15 km, sone 1-2",
    ],
  },
  {
    week: 2,
    days: [
      "Hviledag",
      "Progressiv løping: 50 min, sone 1 økende til sone 2 siste 15 min",
      "Bakkeintervaller: 15 min oppvarming, 8x1 min bratte bakker i sone 4-5 med jogg ned som pause, 10 min nedjogging",
      "Teknisk løping på sti: 40 min sone 1, fokus på tekniske partier",
      "Hviledag",
      "Lett løping: 30 min, sone 1",
      "Langtur på asfalt: 14 km, sone 1-2",
    ],
  },
  {
    week: 3,
    days: [
      "Hviledag",
      'Lett løping med "lette" intervaller: 40 min sone 1 + 5x1 min sone 2',
      "Terskelintervaller: 15 min oppvarming, 4x8 min i sone 3 med 2 min pause, 10 min nedjogging",
      "Lett løping: 40 min, sone 1",
      "Hviledag",
      "**Running Fitness Test:** 15 min oppvarming, 25 min løping litt under terskel, 3 min hardere, 3 min enda hardere, 10 min nedjogging",
      "Langtur på blandet underlag: 17 km, sone 1-2",
    ],
  },
  {
    week: 4,
    days: [
      "Hviledag",
      "Lett løping på sti: 45 min, sone 1",
      "Korte intervaller: 15 min oppvarming, 10x45 sek sone 4 med 15 sek pause, 10 min nedjogging",
      'Lett løping med "lette" intervaller: 40 min sone 1 + 5x2 min sone 2',
      "Hviledag",
      "Lett løping: 35 min, sone 1",
      "Lett langtur: 13 km, sone 1 (restitusjonsuke)",
    ],
  },
  {
    week: 5,
    days: [
      "Hviledag",
      "Progressiv løping: 50 min, sone 1 økende til sone 2 siste 20 min",
      "Bakkeintervaller: 15 min oppvarming, 2x(4x2 min) bratte bakker i sone 4 med 1 min pause og 3 min pause mellom serier, 10 min nedjogging",
      "Løping med teknikk-fokus: 45 min sone 1 + 10 min spesifikke teknikkøvelser",
      "Hviledag",
      "Hviledag eller lett aktivitet",
      "Langtur på sti: 16 km, sone 1-2",
    ],
  },
  {
    week: 6,
    days: [
      "Hviledag",
      "Lett løping: 40 min, sone 1",
      "Progressiv intervall: 15 min oppvarming, 3x2000m i økende tempo (sone 3, 3-4, 4) med 3 min aktiv pause, 10 min nedjogging",
      "Lett løping: 40 min, sone 1",
      "Hviledag",
      "**Running Fitness Test:** 15 min oppvarming, 25 min løping litt under terskel, 3 min hardere, 3 min enda hardere, 10 min nedjogging",
      "Langtur med avsluttende tempo: 18 km, sone 1-2 + siste 3 km i sone 3",
    ],
  },
  {
    week: 7,
    days: [
      "Hviledag",
      'Lett løping med "lette" intervaller: 40 min sone 1 + 6x2 min sone 2',
      "Fartslek på sti: 15 min oppvarming, 30 min variert tempo basert på terreng (sone 2-4), 10 min nedjogging",
      "Lett løping: 45 min, sone 1",
      "Hviledag",
      "Hviledag eller lett aktivitet",
      "Langtur på teknisk sti: 15 km, sone 1-2 (moderate restitusjonsuke)",
    ],
  },
  {
    week: 8,
    days: [
      "Hviledag",
      "Lett løping på asfalt: 45 min, sone 1",
      "Terskelintervaller: 15 min oppvarming, 5x5 min i sone 3 med 2 min pause, 10 min nedjogging",
      "Lett løping: 40 min, sone 1",
      "Hviledag",
      "**Running Fitness Test:** 15 min oppvarming, 25 min løping litt under terskel, 3 min hardere, 3 min enda hardere, 10 min nedjogging",
      "Langtur på blandet underlag: 20 km, sone 1-2",
    ],
  },
  {
    week: 9,
    days: [
      "Hviledag",
      "Lett løping med stride: 45 min sone 1 + 8x30s stride",
      "Pyramideintervaller: 15 min oppvarming, 1-2-3-4-3-2-1 min i sone 4 med 1 min aktiv pause, 10 min nedjogging",
      "Teknisk løping på ujevnt underlag: 50 min sone 1",
      "Hviledag",
      "Lett løping: 40 min, sone 1",
      "Langtur med bakkedrag: 18 km, sone 1-2 inkludert 6x30 sek bakkedrag",
    ],
  },
  {
    week: 10,
    days: [
      "Hviledag",
      "Progressiv løping: 55 min, sone 1 økende til sone 2 siste 20 min",
      "Lange bakkeintervaller: 15 min oppvarming, 5x3 min bratte bakker i sone 4 med jogg ned som pause, 10 min nedjogging",
      "Lett løping: 40 min, sone 1",
      "Hviledag",
      "**Running Fitness Test:** 15 min oppvarming, 25 min løping litt under terskel, 3 min hardere, 3 min enda hardere, 10 min nedjogging",
      "Langtur på teknisk sti: 22 km, sone 1-2",
    ],
  },
  {
    week: 11,
    days: [
      "Hviledag",
      "Lett løping: 45 min, sone 1",
      "Terskelløp: 15 min oppvarming, 30 min sammenhengende løp i sone 3, 10 min nedjogging",
      'Lett løping med "lette" intervaller: 45 min sone 1 + 6x90 sek sone 2',
      "Hviledag",
      "Lett løping: 30 min, sone 1",
      "Lett langtur: 15 km, sone 1 (restitusjonsuke)",
    ],
  },
  {
    week: 12,
    days: [
      "Hviledag",
      "Progressiv løping med bakker: 60 min, sone 1-2 på kupert terreng",
      "Korte intervaller: 15 min oppvarming, 16x30 sek sone 4-5 med 30 sek pause, 10 min nedjogging",
      "Løping med teknikk-fokus: 50 min sone 1 + 10 min spesifikke teknikkøvelser",
      "Hviledag",
      "**Running Fitness Test:** 15 min oppvarming, 25 min løping litt under terskel, 3 min hardere, 3 min enda hardere, 10 min nedjogging",
      "Langtur på blandet underlag: 20 km, sone 1-2",
    ],
  },
  {
    week: 13,
    days: [
      "Hviledag",
      "Lett løping på asfalt: 45 min, sone 1",
      "Fartslek med spesifikke segmenter: 15 min oppvarming, 40 min variert tempo med 8x2 min hardt, 10 min nedjogging",
      "Lett løping med stride: 50 min sone 1 + 6x30s stride",
      "Hviledag",
      "Hviledag eller lett aktivitet",
      "Langtur på blandet underlag: 24 km, sone 1-2",
    ],
  },
  {
    week: 14,
    days: [
      "Hviledag",
      'Lett løping med "lette" intervaller: 45 min sone 1 + 8x1 min sone 2',
      "Klassiske intervaller: 15 min oppvarming, 5x1200m i sone 4 med 2 min aktiv pause, 10 min nedjogging",
      "Teknisk løping på sti: 45 min sone 1, fokus på nedoverbakker",
      "Hviledag",
      "**Running Fitness Test:** 15 min oppvarming, 25 min løping litt under terskel, 3 min hardere, 3 min enda hardere, 10 min nedjogging",
      "Langtur på variert terreng: 20 km, sone 1-2",
    ],
  },
  {
    week: 15,
    days: [
      "Hviledag",
      "Progressiv løping: 60 min, sone 1 økende til sone 2 siste 20 min",
      "Terskelintervaller med progresjon: 15 min oppvarming, 2x12 min i sone 3 med 3 min pause, 10 min nedjogging",
      "Lett løping: 45 min, sone 1 + 4x30s stride",
      "Hviledag",
      "Lett løping: 30 min, sone 1",
      "Langtur på variert terreng: 20-25 km, sone 1-2 med noen bakkedrag",
    ],
  },
];

export const plan: PlanContent = {
  metaTitle: "Terskelfart og terrengløping",
  accent: "teal",
  eyebrow: "Improved baseline",
  title: "Løpeplan for forbedring av terskelfart og terrengløping",
  lede: (
    <>
      Velkommen til din skreddersydde løpeplan for å forbedre terskelfarten og
      forberede deg for terrengløp! Planen er designet for å systematisk senke
      din terskelfart (som målt på Coros-klokken) samtidig som den bygger
      spesifikk styrke og utholdenhet for terrengløping. Over 15 uker kombinerer
      den strukturerte intervalløkter, progressive langturer og kvalitetsøkter i
      variert terreng – både på asfalt og i terrenget.
    </>
  ),
  meta: [
    { label: "Intervaller", value: "onsdager" },
    { label: "Langtur", value: "søndager" },
    { label: "Running Fitness Test", value: "hver 3. uke" },
  ],
  dayLabels: [
    "Mandag",
    "Tirsdag",
    "Onsdag",
    "Torsdag",
    "Fredag",
    "Lørdag",
    "Søndag",
  ],
  weeks: weeks,
  intro: (
    <>
      <p>
        Denne løpeplanen er strukturert for å systematisk forbedre din
        terskelfart og bygge spesifikk styrke for terrengløping over en 15-ukers
        periode. Basert på vitenskapelige treningsprinsipper, inkluderer
        programmet en nøye balanse mellom høy- og lavintensitetstrening, med
        særlig fokus på terskelfart og terrengspesifikke ferdigheter.
      </p>

      <p>
        Programmet veksler mellom ulike typer intervalltrening på onsdager, med
        fokus på både klassiske intervaller og bakkeintervaller for å utvikle
        både aerob kapasitet og spesifikk styrke. Langturer på søndager øker
        gradvis, men ikke-lineært, for å tillate restitusjon mellom mer krevende
        økter. Regelmessige Running Fitness tester omtrent hver tredje lørdag
        gir deg mulighet til å måle fremgangen i terskelfart gjennom hele
        treningsperioden.
      </p>
    </>
  ),
  outro: (
    <>
      <p>
        Dette løpeprogrammet er designet for å systematisk forbedre din
        terskelfart og bygge spesifikk styrke for terrengløping over en 15-ukers
        periode. Her er nøkkelkomponentene i programmet:
      </p>
      <ul>
        <li>
          <strong>Intervalltrening (onsdager):</strong> Veksler mellom
          forskjellige typer intervaller for å stimulere ulike fysiologiske
          tilpasninger. Bakkeintervaller utvikler spesifikk styrke for
          terrengløping, mens klassiske intervaller forbedrer løpsøkonomi og
          terskelfart.
        </li>
        <li>
          <strong>Running Fitness Test (omtrent hver 3. uke):</strong>{" "}
          Regelmessige tester for å måle fremgang i terskelfart og
          løpskapasitet. Disse testene følger Coros-formatet og gir konkrete
          data for å spore forbedringer over tid.
        </li>
        <li>
          <strong>Langturer (søndager):</strong> Følger et ikke-lineært
          progresjonsmønster fra 15 km opp til 24 km, med strategiske
          restitusjonsuker i uke 4, 7 og 11. Veksler mellom sti, asfalt og
          blandet underlag for å utvikle allsidige ferdigheter.
        </li>
        <li>
          <strong>Lette løpeturer med kvalitet:</strong> Inkluderer
          &quot;lette&quot; intervaller i sone 2 og stride for å forbedre
          løpsøkonomi uten å tære på restitusjonskapasiteten.
        </li>
        <li>
          <strong>Teknikkfokus:</strong> Dedikerte økter for å forbedre tekniske
          ferdigheter i terreng, som vil forbedre både effektivitet og sikkerhet
          i terrengløp.
        </li>
        <li>
          <strong>Periodisering:</strong> Programmet følger en periodisert
          tilnærming over de 15 ukene, med gradvise økninger i volum og
          intensitet, etterfulgt av strategiske restitusjonsuker for å sikre
          tilstrekkelig tid til adaptasjon og redusere risikoen for overtrening.
        </li>
        <li>
          <strong>Variasjon i intervalltyper:</strong> Etter hvert som
          programmet skrider frem, introduseres mer avanserte intervallformater
          som pyramideintervaller og lengre sammenhengende terskelløp for å
          fremme ytterligere fysiologiske tilpasninger og mentalt engasjement.
        </li>
      </ul>
      <p>
        For å få maksimalt utbytte av dette programmet, anbefales det å følge
        intensitetssonene nøye og lytte til kroppens signaler. Juster volum
        eller intensitet ved behov, spesielt hvis du merker tegn på overtrening
        eller ufullstendig restitusjon. Husk at konsistens over tid er nøkkelen
        til forbedring - det er bedre å fullføre litt mindre med god kvalitet
        enn å presse kroppen for hardt og risikere skade eller utbrenthet.
      </p>

      <h3>Intensitetssoner</h3>
      <ul>
        <li>
          Sone 1 (Lett løping): 65-75% av maksimal hjertefrekvens.
          Konversasjonstempo.
        </li>
        <li>
          Sone 2 (Moderat): 75-80% av maksimal hjertefrekvens. Komfortabelt men
          målrettet tempo.
        </li>
        <li>
          Sone 3 (Terskel): 80-87% av maksimal hjertefrekvens. Utfordrende tempo
          som kan opprettholdes i ca. 1 time.
        </li>
        <li>
          Sone 4 (Intervall): 87-92% av maksimal hjertefrekvens. Hardt tempo som
          kan opprettholdes i kortere perioder.
        </li>
        <li>
          Sone 5 (Maksimal): 92-100% av maksimal hjertefrekvens. Svært høy
          intensitet for korte spurter.
        </li>
      </ul>

      <h3>Justeringer</h3>
      <p>
        Dette programmet kan justeres basert på individuelle behov og
        omstendigheter:
      </p>
      <ul>
        <li>
          Hvis du føler deg utmattet, vurder å erstatte en intervalltrening med
          en lett løpetur eller en hviledag.
        </li>
        <li>
          For de som ønsker ekstra utfordring, kan lørdagens lette løpeturer
          utvides med ytterligere 10-15 minutter.
        </li>
        <li>
          Ved spesifikke terrengløp som målsetting, vurder å gjøre flere av
          langturer på lignende terreng som løpet.
        </li>
        <li>
          Følg med på terskelfarten på Coros-klokken for å spore fremgang og
          justere intensiteten i terskeløktene deretter.
        </li>
        <li>
          Bruk resultatene fra Running Fitness Test til å justere
          treningsintensitetene. Hvis terskelfarten forbedres, bør også
          intensiteten i intervalltreningen økes tilsvarende.
        </li>
        <li>
          For løpere med begrenset erfaring med høyt treningsvolum, vurder å
          redusere volumet på de lengste langturene (over 20 km) i uke 13 og 15.
        </li>
      </ul>

      <h3>Treningsformer og Begreper</h3>
      <p>
        Her er en forklaring på de ulike treningsformene og begrepene som brukes
        i programmet:
      </p>
      <ul>
        <li>
          <strong>Running Fitness Test:</strong> En standardisert test utviklet
          av Coros for å måle løpeform og terskelfart. Testen består av en
          oppvarmingsfase, etterfulgt av 25 minutter løping like under
          terskelintensitet, deretter 3 minutter med hardere løping, og
          avsluttes med 3 minutter med maksimal innsats. Basert på dataene som
          samles under testen (spesielt hjertefrekvens og hastighet), beregner
          Coros-klokken din terskelfart og andre viktige treningsmetrikker. Det
          anbefales å gjennomføre testen på flat, jevn overflate for mest mulig
          nøyaktige resultater. Gjennomfør testen med jevne mellomrom for å
          spore fremgang og justere treningsintensitetene deretter.
        </li>
        <li>
          <strong>Stride/Strides:</strong> Korte, kontrollerte akselerasjoner på
          20-30 sekunder hvor du gradvis øker farten til ca. 85-90% av maksimal
          innsats, holder den i noen sekunder, og deretter gradvis senker
          farten. Strides utføres på flat eller lett hellende underlag med full
          restitusjon mellom hver repetisjon (typisk 45-60 sekunder med rolig
          gange eller jogg). Formålet er å forbedre løpeteknikk, nevromuskulær
          koordinasjon og løpsøkonomi uten å akkumulere betydelig tretthet.
        </li>
        <li>
          <strong>Fartslek:</strong> Fra svensk &quot;fart&quot; (fart) og
          &quot;lek&quot; (lek), er en ustrukturert form for intervalltrening
          hvor du veksler mellom ulike intensiteter basert på følelse eller
          terreng. I programmet vårt brukes fartslek på sti hvor intensiteten
          varierer naturlig med terrengets utfordringer: raskere på flate
          partier, hardere innsats i oppoverbakker, og kontrollert, teknisk
          løping i nedoverbakker. Det er en leken, intuitiv tilnærming til
          intervalltrening som er spesielt nyttig for terrengløpere.
        </li>
        <li>
          <strong>Bakkeintervaller:</strong> Intensive løpeintervaller utført i
          oppoverbakke. Disse styrker spesifikke muskelgrupper som er avgjørende
          for terrengløping, forbedrer kraft og effektivitet i oppoverbakker, og
          reduserer belastningen på leddene sammenlignet med intervaller på flat
          grunn. Jogg rolig ned bakken som restitusjon mellom repetisjonene.
          Velg bakker med 4-8% stigning for optimal treningseffekt.
        </li>
        <li>
          <strong>Terskelintervaller:</strong> Intervaller løpt i sone 3 (ca.
          80-87% av maksimal hjertefrekvens), som tilsvarer den høyeste
          intensiteten du kan opprettholde over lengre tid (ca. 1 time). Disse
          intervallene er avgjørende for å forbedre terskelfarten og gjøre
          kroppen mer effektiv til å håndtere og fjerne laktat. Typiske formater
          er 4-6 repetisjoner på 5-8 minutter med korte pauser (1-2 minutter).
        </li>
        <li>
          <strong>Klassiske intervaller:</strong> Tradisjonelle intervaller med
          spesifikke distanser (f.eks. 1000m) løpt i sone 4 (87-92% av maksimal
          hjertefrekvens). Disse intervallene forbedrer VO2max (maksimalt
          oksygenopptak) og anaerob kapasitet. De kjøres typisk på bane eller
          flat vei med kontrollerte pauser for å sikre konsistent innsats
          gjennom økten.
        </li>
        <li>
          <strong>Progressiv løping/intervall:</strong> Økter hvor intensiteten
          øker gradvis, enten gjennom hele økten (progressiv løping) eller for
          hver repetisjon (progressive intervaller). Denne tilnærmingen lærer
          kroppen å håndtere økende belastning og forbereder deg på
          konkurransesituasjoner hvor farten typisk øker mot slutten.
        </li>
        <li>
          <strong>&quot;Lette&quot; intervaller:</strong> Korte intervaller i
          sone 2 som legges inn i ellers rolige løpeturer. Disse gir en viss
          treningsstimulus uten å påvirke restitusjonen betydelig. De fungerer
          som en &quot;melkesyre-vaksine&quot; og hjelper med å opprettholde en
          viss intensitetstoleranse selv på restitusjonsdager.
        </li>
        <li>
          <strong>Teknisk løping:</strong> Økter med spesifikt fokus på tekniske
          aspekter ved terrengløping, som fotplassering, balanse, og effektiv
          navigering av ujevnt underlag. Disse øktene er generelt lavintensive
          (sone 1) for å tillate bevisst fokus på teknikk, men inkluderer ofte
          teknisk utfordrende partier som krever konsentrasjon og spesifikke
          ferdigheter.
        </li>
        <li>
          <strong>Pyramideintervaller:</strong> En intervallstruktur hvor
          varigheten av arbeidsperiodene først øker gradvis og deretter avtar,
          ofte i et symmetrisk mønster (f.eks. 1-2-3-2-1 min). Denne variasjonen
          i arbeidsperiode stimulerer ulike energisystemer i en enkelt økt og
          gir både fysisk og mental variasjon.
        </li>
        <li>
          <strong>Bakkedrag:</strong> Korte, eksplosive akselerasjoner i
          oppoverbakke som varer i 20-30 sekunder. Disse utføres nær maksimal
          innsats (sone 4-5) og utvikler anaerob kapasitet, styrke og
          kraftutvikling. De er spesielt nyttige for terrengløpere som
          regelmessig møter bratte bakker.
        </li>
      </ul>
    </>
  ),
};
