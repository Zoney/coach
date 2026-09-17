import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { ACCENT, classify, type Kind, type PlanContent } from "@/lib/plans";
import { cn } from "@/lib/utils";

const KIND_STYLE: Record<Kind, { dot: string; cell: string }> = {
  off: { dot: "bg-transparent", cell: "text-muted/40" },
  rest: { dot: "bg-zinc-400", cell: "text-muted" },
  easy: { dot: "bg-emerald-500", cell: "" },
  long: { dot: "bg-sky-500", cell: "bg-sky-500/6 dark:bg-sky-400/10" },
  tempo: { dot: "bg-amber-500", cell: "bg-amber-500/8 dark:bg-amber-400/10" },
  interval: { dot: "bg-rose-500", cell: "bg-rose-500/6 dark:bg-rose-400/10" },
  test: { dot: "bg-violet-500", cell: "bg-violet-500/8 dark:bg-violet-400/12" },
  race: {
    dot: "bg-fuchsia-500",
    cell: "bg-linear-to-br from-fuchsia-500/15 to-violet-500/15 font-semibold text-fg",
  },
};

const LEGEND_ORDER: Exclude<Kind, "off">[] = [
  "easy",
  "long",
  "tempo",
  "interval",
  "test",
  "race",
  "rest",
];

const ZONE_COLOR = [
  "bg-emerald-500",
  "bg-lime-500",
  "bg-amber-500",
  "bg-orange-500",
  "bg-rose-500",
];

export type RunningPlanProps = PlanContent;

function inline(text: string) {
  return text.split("**").map((part, i) =>
    i % 2 ? (
      <strong key={i} className="font-semibold text-fg">
        {part}
      </strong>
    ) : (
      part
    ),
  );
}

function Activity({ text }: { text: string }) {
  if (classify(text) === "off") return <span aria-hidden>—</span>;
  const lines = text.split(" · ");
  if (lines.length === 1) return <>{inline(text)}</>;
  return (
    <span className="block space-y-1">
      {lines.map((line, i) => {
        const summary = /^(kort|in short):/i.test(line);
        return (
          <span
            key={i}
            className={cn(
              "block",
              i === 0 && "font-medium text-fg",
              i > 0 && !summary && "text-[13px] leading-snug",
              summary && "pt-0.5 text-xs text-muted",
            )}
          >
            {inline(line)}
          </span>
        );
      })}
    </span>
  );
}

function Dot({ kind, className }: { kind: Kind; className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "inline-block size-2 rounded-full",
        KIND_STYLE[kind].dot,
        className,
      )}
    />
  );
}

export function RunningPlan({
  accent,
  eyebrow,
  title,
  lede,
  tagline,
  meta = [],
  dayLabels,
  weeks,
  intro,
  outro,
  zones,
}: RunningPlanProps) {
  const t = useTranslations("plan");
  const present = new Set<Kind>(weeks.flatMap((w) => w.days.map(classify)));
  const legend = LEGEND_ORDER.filter((k) => present.has(k));
  const chips = [
    { label: "", value: t("weeks", { count: weeks.length }) },
    ...meta,
  ];

  return (
    <article className="mx-auto max-w-6xl px-5 pb-24 pt-8 md:pt-12">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-muted transition hover:text-fg"
      >
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          className="size-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
          />
        </svg>
        {t("back")}
      </Link>

      <header className="mx-auto mt-10 max-w-3xl text-center md:mt-14">
        {eyebrow && (
          <p
            className={cn(
              "text-xs font-semibold uppercase tracking-[0.2em]",
              ACCENT[accent].text,
            )}
          >
            {eyebrow}
          </p>
        )}
        <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {lede && (
          <p className="mt-5 text-pretty text-lg leading-relaxed text-muted">
            {lede}
          </p>
        )}
        {tagline && (
          <p className="mt-4 text-sm italic text-muted/70">{tagline}</p>
        )}
        <ul className="mt-7 flex flex-wrap justify-center gap-2 text-xs">
          {chips.map((c) => (
            <li
              key={c.label + c.value}
              className="rounded-full border border-line bg-card px-3 py-1 text-muted"
            >
              {c.label && <span className="text-muted/70">{c.label} </span>}
              <span className="font-medium text-fg">{c.value}</span>
            </li>
          ))}
        </ul>
      </header>

      {intro && <div className="prose mt-14">{intro}</div>}

      <section className="mt-16">
        <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
          <h2 className="text-2xl font-semibold tracking-tight">
            {t("schedule")}
          </h2>
          <ul className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted">
            {legend.map((k) => (
              <li key={k} className="flex items-center gap-1.5">
                <Dot kind={k} />
                {t(`kinds.${k}`)}
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop: full week grid */}
        <div className="hidden overflow-x-auto rounded-2xl border border-line bg-card shadow-sm md:block">
          <table className="w-full min-w-5xl border-collapse text-sm">
            <thead>
              <tr className="border-b border-line text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                <th className="sticky left-0 z-10 bg-card px-4 py-3">
                  {t("week")}
                </th>
                {dayLabels.map((label) => (
                  <th key={label} className="px-4 py-3">
                    {label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {weeks.map((w) => (
                <tr key={w.week} className="align-top">
                  <th
                    scope="row"
                    className="sticky left-0 z-10 bg-card px-4 py-3 text-left font-semibold tabular-nums"
                  >
                    {w.week}
                  </th>
                  {w.days.map((d, i) => {
                    const kind = classify(d);
                    return (
                      <td
                        key={i}
                        className={cn(
                          "px-4 py-3 leading-snug",
                          KIND_STYLE[kind].cell,
                        )}
                      >
                        <Activity text={d} />
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile: one card per week */}
        <ol className="space-y-4 md:hidden">
          {weeks.map((w) => {
            const days = w.days
              .map((d, i) => ({
                text: d,
                label: dayLabels[i],
                kind: classify(d),
              }))
              .filter((d) => d.kind !== "off");
            const sessions = days.filter((d) => d.kind !== "rest").length;
            return (
              <li
                key={w.week}
                className="rounded-2xl border border-line bg-card p-4 shadow-sm"
              >
                <div className="flex items-baseline justify-between">
                  <h3 className="font-semibold">
                    {t("week")} {w.week}
                  </h3>
                  <span className="text-xs text-muted">
                    {t("sessions", { count: sessions })}
                  </span>
                </div>
                <ul className="mt-3 divide-y divide-line">
                  {days.map((d) => (
                    <li
                      key={d.label}
                      className="grid grid-cols-[4.25rem_1fr] gap-3 py-2.5 text-sm"
                    >
                      <span className="pt-0.5 text-xs uppercase tracking-wide text-muted">
                        {d.label}
                      </span>
                      <span className="flex gap-2">
                        <Dot kind={d.kind} className="mt-1.5 shrink-0" />
                        <span
                          className={cn(
                            "leading-snug",
                            d.kind === "rest" && "text-muted",
                          )}
                        >
                          <Activity text={d.text} />
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ol>
      </section>

      {zones && zones.length > 0 && (
        <section className="mt-16">
          <h2 className="text-2xl font-semibold tracking-tight">
            {t("zones")}
          </h2>
          <ol className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {zones.map((z, i) => (
              <li
                key={z.zone}
                className="rounded-2xl border border-line bg-card p-4 shadow-sm"
              >
                <div className="flex items-center gap-2 text-[11px] uppercase tracking-wider text-muted">
                  <span
                    aria-hidden
                    className={cn(
                      "size-2 rounded-full",
                      ZONE_COLOR[i % ZONE_COLOR.length],
                    )}
                  />
                  {t("zone")} {z.zone}
                </div>
                <div className="mt-2 font-semibold">{z.name}</div>
                <div className="mt-1 font-mono text-sm tabular-nums text-muted">
                  {z.pace}
                </div>
              </li>
            ))}
          </ol>
        </section>
      )}

      {outro && <div className="prose mt-16">{outro}</div>}
    </article>
  );
}
