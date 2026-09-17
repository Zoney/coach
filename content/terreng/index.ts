import type { Locale, PlanContent } from "@/lib/plans";
import { plan as en } from "./en";
import { plan as no } from "./no";

export const plan: Record<Locale, PlanContent> = { no, en };
