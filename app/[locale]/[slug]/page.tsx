import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { RunningPlan } from "@/components/running-plan";
import { PLANS } from "@/content";
import { routing } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string; slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    Object.keys(PLANS).map((slug) => ({ locale, slug })),
  );
}

function resolve(locale: string, slug: string) {
  if (!hasLocale(routing.locales, locale)) return null;
  return PLANS[slug]?.[locale] ?? null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const plan = resolve(locale, slug);
  return plan ? { title: plan.metaTitle } : {};
}

export default async function PlanPage({ params }: Props) {
  const { locale, slug } = await params;
  const plan = resolve(locale, slug);
  if (!plan) notFound();
  setRequestLocale(locale);
  return <RunningPlan {...plan} />;
}
