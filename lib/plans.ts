import type { ReactNode } from "react";

export type Locale = "no" | "en";
export const LOCALES: Locale[] = ["no", "en"];

export type Kind =
  "off" | "rest" | "easy" | "long" | "tempo" | "interval" | "test" | "race";

export type Week = { week: number; days: string[] };
export type Zone = { zone: number; name: string; pace: string };

export type PlanContent = {
  /** Plain-text title used for <title>. */
  metaTitle: string;
  accent: Accent;
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  tagline?: ReactNode;
  meta?: { label: string; value: string }[];
  dayLabels: string[];
  weeks: Week[];
  zones?: Zone[];
  intro?: ReactNode;
  outro?: ReactNode;
};

export const ACCENT = {
  violet: {
    text: "text-violet-600 dark:text-violet-400",
    bar: "from-violet-500 to-fuchsia-500",
    hover: "hover:border-violet-500/50",
  },
  amber: {
    text: "text-amber-600 dark:text-amber-400",
    bar: "from-amber-500 to-orange-500",
    hover: "hover:border-amber-500/50",
  },
  sky: {
    text: "text-sky-600 dark:text-sky-400",
    bar: "from-sky-500 to-cyan-500",
    hover: "hover:border-sky-500/50",
  },
  teal: {
    text: "text-teal-600 dark:text-teal-400",
    bar: "from-teal-500 to-emerald-500",
    hover: "hover:border-teal-500/50",
  },
  rose: {
    text: "text-rose-600 dark:text-rose-400",
    bar: "from-rose-500 to-pink-500",
    hover: "hover:border-rose-500/50",
  },
  emerald: {
    text: "text-emerald-600 dark:text-emerald-400",
    bar: "from-emerald-500 to-lime-500",
    hover: "hover:border-emerald-500/50",
  },
  indigo: {
    text: "text-indigo-600 dark:text-indigo-400",
    bar: "from-indigo-500 to-blue-500",
    hover: "hover:border-indigo-500/50",
  },
} as const;

export type Accent = keyof typeof ACCENT;

/** Rough heuristic that turns a free-text session into a colour-coded kind. */
export function classify(text: string): Kind {
  const s = text.trim().toLowerCase();
  if (!s || s === "n/a") return "off";
  if (/^(halv|half )?marath?on|\brace\b|^(mål|goal)/.test(s)) return "race";
  if (/fitness test/.test(s)) return "test";
  if (/^(hvile|rest)/.test(s)) return "rest";
  if (/langtur|long run/.test(s)) return "long";
  if (/stride/.test(s) && !/intervall|pyramide/.test(s)) return "easy";
  if (/intervall|interval|farts?lek|bakkedrag|pyramide|\d\s*x\s*\d/.test(s))
    return "interval";
  if (/tempo|terskel|threshold/.test(s)) return "tempo";
  const km = s.match(/(\d{2,})\s*km/);
  if (km && Number(km[1]) >= 12) return "long";
  return "easy";
}
