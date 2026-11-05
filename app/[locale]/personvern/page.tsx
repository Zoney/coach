import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { alternates } from "@/lib/site";

// The privacy notice (GDPR art. 13). It must always match the code and the server
// setup: if what is stored, for how long, or who helps us changes, change this page
// at the same time. The basis (the agreement with Hetzner, the measures on the
// server) lives in husken: workshop/apper/personvern/.

const UPDATED = { no: "5. november 2026", en: "5 November 2026" };

const TEXT = {
  no: {
    title: "Personvern",
    lede: "Denne sida har ingen innlogging, ingen skjema og ingen informasjonskapsler. Det eneste som lagres når du besøker den, er serverens logg, som slettes etter 30 dager.",
    responsible: "Hvem som er ansvarlig",
    responsibleText:
      "Øyvinds Coaching drives av Øyvind Sandåker, som er behandlingsansvarlig for personopplysningene. Spørsmål om personvern sender du til",
    visit: "Når du besøker sida",
    visitItems: [
      "Ingen informasjonskapsler, ingenting lagret i nettleseren din, ingen analyseverktøy fra andre og ingen sporing. Språket står i adressen (/no eller /en).",
      "Ingen skjema og ingen innlogging: sida tar ikke imot noe fra deg.",
      "Serveren logger alt som kommer inn til sida (tidspunkt, IP-adressen din, hvilken side du ba om, nettleseren og hvilket nettsted du kom fra) for å beskytte tjenesten mot angrep og rette feil. Loggen ligger kryptert hos oss, bare den som drifter tjenesten ser den, og den slettes etter 30 dager. Det som blir igjen etterpå, er bare antall per dag (for eksempel hvor mange som så en side, eller brukte mobil), og det kan ikke knyttes til noen.",
    ],
    basis:
      "Grunnlaget for loggen er vår berettigede interesse i å drive sida trygt (GDPR artikkel 6 nr. 1 f). Den selges ikke, deles ikke og brukes aldri til reklame eller AI.",
    where: "Hvor dataene ligger, og hvem som hjelper oss",
    whereText:
      "Sida kjører på én server vi leier av Hetzner Online GmbH (Tyskland), i datasenteret deres i Tuusula ved Helsingfors i Finland. Ingenting lagres eller behandles utenfor EU/EØS.",
    whereItems: [
      "Vi har en databehandleravtale med Hetzner etter GDPR artikkel 28, inngått 1. november 2026.",
      "Hetzner er sertifisert etter ISO/IEC 27001 og BSI C5 Type 2. TÜV Rheinland kontrollerte sikkerhetstiltakene i datasenteret i Finland 19. februar 2026 og fant ingen avvik.",
      "Hetzner leier ut maskinen, men har ikke tilgang til dataene: disken er kryptert, og nøkkelen lagres ikke hos dem.",
    ],
    others:
      "Vi bruker ingen andre tjenester som får personopplysninger: ingen analyse, ingen innholdsnettverk og ingen eksterne skrifttyper (skriften ligger på vår egen server). Let's Encrypt lager sertifikatet for den sikre forbindelsen og får bare vite domenenavnet.",
    protect: "Slik beskytter vi dataene",
    protectItems: [
      "All trafikk går kryptert (HTTPS).",
      "Hele disken på serveren er kryptert.",
      "Sida kjører avskjermet, uten tilgang til nettet og uten tilgang til andre apper på serveren.",
      "Serveren får sikkerhetsoppdateringer automatisk hver natt.",
    ],
    retention: "Hvor lenge vi tar vare på det",
    retentionText:
      "Loggen på serveren: 30 dager. Sida har ingen database, og ingenting annet lagres.",
    rights: "Rettighetene dine",
    rightsText:
      "Du har rett til innsyn i det vi har lagret om deg, til å få rettet feil, til å få det slettet, til å få det utlevert og til å protestere mot behandlingen. Skriv til oyvind@zoney.no, så svarer vi innen en måned. Mener du at vi behandler personopplysninger i strid med reglene, kan du klage til Datatilsynet.",
    updated: "Sist endret",
  },
  en: {
    title: "Privacy",
    lede: "This site has no sign-in, no forms and no cookies. The only thing stored when you visit is the server log, which is deleted after 30 days.",
    responsible: "Who is responsible",
    responsibleText:
      "Øyvinds Coaching is run by Øyvind Sandåker, who is the controller of the personal data. Send questions about privacy to",
    visit: "When you visit the site",
    visitItems: [
      "No cookies, nothing stored in your browser, no third-party analytics and no tracking. The language is in the address (/no or /en).",
      "No forms and no sign-in: the site does not receive anything from you.",
      "The server logs every request to the site (time, your IP address, which page you asked for, your browser and which site you came from) to protect the service against attacks and to fix errors. The log is kept encrypted by us, only the person running the service can see it, and it is deleted after 30 days. What remains afterwards is only counts per day (for example how many people viewed a page, or used a phone), which cannot be linked to anyone.",
    ],
    basis:
      "The legal basis for the log is our legitimate interest in running the site securely (GDPR Article 6(1)(f)). It is never sold, shared or used for advertising or AI.",
    where: "Where the data is, and who helps us",
    whereText:
      "The site runs on a single server we rent from Hetzner Online GmbH (Germany), in their data centre in Tuusula near Helsinki, Finland. Nothing is stored or processed outside the EU/EEA.",
    whereItems: [
      "We have a data processing agreement with Hetzner under GDPR Article 28, entered into on 1 November 2026.",
      "Hetzner is certified to ISO/IEC 27001 and BSI C5 Type 2. TÜV Rheinland audited the security measures in the Finnish data centre on 19 February 2026 and found no deviations.",
      "Hetzner rents out the machine but has no access to the data: the disk is encrypted, and the key is not stored with them.",
    ],
    others:
      "We use no other services that receive personal data: no analytics, no content delivery network and no external fonts (the typeface is served from our own server). Let's Encrypt issues the certificate for the secure connection and only learns the domain name.",
    protect: "How we protect the data",
    protectItems: [
      "All traffic is encrypted (HTTPS).",
      "The whole disk on the server is encrypted.",
      "The site runs isolated, without network access and without access to the other apps on the server.",
      "The server installs security updates automatically every night.",
    ],
    retention: "How long we keep it",
    retentionText:
      "The server log: 30 days. The site has no database, and nothing else is stored.",
    rights: "Your rights",
    rightsText:
      "You have the right to access what we have stored about you, to have errors corrected, to have it deleted, to receive a copy and to object to the processing. Write to oyvind@zoney.no and we will answer within a month. If you believe we process personal data in breach of the rules, you can complain to the Norwegian Data Protection Authority (Datatilsynet).",
    updated: "Last updated",
  },
} as const;

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  return {
    title: TEXT[locale].title,
    alternates: alternates(locale, "/personvern"),
  };
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10">
      <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted">
        {children}
      </div>
    </section>
  );
}

function List({ items }: { items: readonly string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  const t = TEXT[locale];

  return (
    <article className="mx-auto max-w-2xl px-5 pb-24 pt-16 md:pt-24">
      <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
        {t.title}
      </h1>
      <p className="mt-6 text-pretty text-lg leading-relaxed text-muted">
        {t.lede}
      </p>

      <Section title={t.responsible}>
        <p>
          {t.responsibleText}{" "}
          <a
            className="text-fg underline underline-offset-4"
            href="mailto:oyvind@zoney.no"
          >
            oyvind@zoney.no
          </a>
          .
        </p>
      </Section>

      <Section title={t.visit}>
        <List items={t.visitItems} />
        <p>{t.basis}</p>
      </Section>

      <Section title={t.where}>
        <p>{t.whereText}</p>
        <List items={t.whereItems} />
        <p>{t.others}</p>
      </Section>

      <Section title={t.protect}>
        <List items={t.protectItems} />
      </Section>

      <Section title={t.retention}>
        <p>{t.retentionText}</p>
      </Section>

      <Section title={t.rights}>
        <p>{t.rightsText}</p>
      </Section>

      <p className="mt-12 text-xs text-muted">
        {t.updated} {UPDATED[locale]}.
      </p>
    </article>
  );
}
