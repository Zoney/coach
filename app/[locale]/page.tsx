import { hasLocale, useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { use } from "react";
import { CATALOG, type CatalogEntry } from "@/content";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { ACCENT, type Locale } from "@/lib/plans";
import { cn } from "@/lib/utils";

function Arrow() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      className="size-4 transition-transform group-hover:translate-x-0.5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
      />
    </svg>
  );
}

function PlanCard({ entry, locale }: { entry: CatalogEntry; locale: Locale }) {
  const t = useTranslations("home");
  const a = ACCENT[entry.accent];
  const copy = entry.copy[locale];
  const base =
    "group relative flex flex-col rounded-2xl border border-line bg-card p-6 shadow-sm transition";
  const inner = (
    <>
      <div className={cn("h-1 w-12 rounded-full bg-linear-to-r", a.bar)} />
      <div className="mt-5 flex items-start justify-between gap-3">
        <h3 className="text-xl font-semibold tracking-tight">{copy.title}</h3>
        <span className="shrink-0 rounded-full border border-line px-2 py-0.5 text-[11px] text-muted">
          {copy.tag ?? t("comingSoon")}
        </span>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-muted">{copy.blurb}</p>
      <div className="mt-auto flex items-end justify-between pt-8">
        <p className="text-2xl font-semibold tracking-tight">
          {entry.price}
          <span className="text-sm font-normal text-muted">
            {t("perMonth")}
          </span>
        </p>
        {entry.slug && (
          <span className="inline-flex items-center gap-1 text-sm font-medium">
            {t("readMore")} <Arrow />
          </span>
        )}
      </div>
    </>
  );
  return entry.slug ? (
    <Link
      href={`/${entry.slug}`}
      className={cn(base, "hover:-translate-y-0.5 hover:shadow-md", a.hover)}
    >
      {inner}
    </Link>
  ) : (
    <div className={cn(base, "opacity-70")}>{inner}</div>
  );
}

export default function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  const t = useTranslations("home");

  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pb-14 pt-16 md:pt-28">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          {t("eyebrow")}
        </p>
        <h1 className="mt-4 max-w-3xl text-balance text-5xl font-semibold tracking-tight md:text-7xl">
          {t("title")} <span className="text-muted">{t("titleTail")}</span>
        </h1>
        <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted">
          {t("lede")}
        </p>
        <div className="mt-8">
          <a
            href="#plans"
            className="inline-flex items-center gap-2 rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg transition hover:opacity-90"
          >
            {t("cta")}
          </a>
        </div>
      </section>

      <section id="plans" className="mx-auto max-w-6xl scroll-mt-20 px-5 pb-24">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CATALOG.map((entry) => (
            <PlanCard
              key={entry.slug ?? entry.copy.en.title}
              entry={entry}
              locale={locale}
            />
          ))}
        </div>
      </section>
    </>
  );
}
