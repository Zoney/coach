import type { Accent, Locale, PlanContent } from "@/lib/plans";
import { plan as haakon } from "./haakon";
import { plan as strollToStrong } from "./stroll-to-strong";
import { plan as tenK } from "./10km";
import { plan as terreng } from "./terreng";
import { plan as tilHalv } from "./til-halv";

/** Every plan that has its own page, keyed by URL slug. */
export const PLANS: Record<string, Record<Locale, PlanContent>> = {
  "stroll-to-strong": strollToStrong,
  "til-halv": tilHalv,
  "10km": tenK,
  haakon,
  terreng,
};

export type CatalogEntry = {
  /** Omitted for plans that have no page yet. */
  slug?: keyof typeof PLANS;
  accent: Accent;
  price: string;
  copy: Record<Locale, { title: string; blurb: string; tag?: string }>;
};

/** The cards on the front page, in display order. */
export const CATALOG: CatalogEntry[] = [
  {
    slug: "stroll-to-strong",
    accent: "rose",
    price: "$59",
    copy: {
      no: {
        title: "From Stroll to Strong",
        blurb:
          "Null press, jevn fremgang. Fra raske gåturer til 30 minutter sammenhengende løping, med rolige bakkedrag annenhver uke.",
        tag: "12 uker",
      },
      en: {
        title: "From Stroll to Strong",
        blurb:
          "Zero pressure, steady progress. From brisk walks to 30 minutes of continuous running, with gentle hill reps every other week.",
        tag: "12 weeks",
      },
    },
  },
  {
    slug: "til-halv",
    accent: "violet",
    price: "$75",
    copy: {
      no: {
        title: "Road to half",
        blurb: "Personlig treningsplan mot halvmaraton.",
        tag: "12 uker",
      },
      en: {
        title: "Road to half",
        blurb: "Personalized half marathon training plan.",
        tag: "12 weeks",
      },
    },
  },
  {
    slug: "10km",
    accent: "amber",
    price: "$69",
    copy: {
      no: {
        title: "10 km-løp",
        blurb: "Personlig treningsplan mot 10 km.",
        tag: "6 uker",
      },
      en: {
        title: "10 km race training",
        blurb: "Personalized 10 km training plan.",
        tag: "6 weeks",
      },
    },
  },
  {
    slug: "haakon",
    accent: "sky",
    price: "$99",
    copy: {
      no: {
        title: "Maraton",
        blurb: "Personlig maratonplan for dine maratonmål.",
        tag: "6 uker",
      },
      en: {
        title: "Marathon running",
        blurb: "Personalized marathon training plan for your marathon goals.",
        tag: "6 weeks",
      },
    },
  },
  {
    slug: "terreng",
    accent: "teal",
    price: "$89",
    copy: {
      no: {
        title: "Improved baseline",
        blurb:
          "Spesialisert trening for bedre terskelfart og sterkere terrengløping.",
        tag: "15 uker",
      },
      en: {
        title: "Improved baseline",
        blurb:
          "Specialized training to improve threshold pace and trail running performance.",
        tag: "15 weeks",
      },
    },
  },
  {
    accent: "emerald",
    price: "$79",
    copy: {
      no: {
        title: "Barfotgange og -løping",
        blurb: "Finn din indre ro med skreddersydde barfotforelesninger.",
      },
      en: {
        title: "Barefoot walking/running",
        blurb: "Find your inner peace with customized barefoot lectures.",
      },
    },
  },
  {
    accent: "indigo",
    price: "$149",
    copy: {
      no: {
        title: "Lederskap",
        blurb: "Ta lederferdighetene dine til neste nivå med ekspertcoaching.",
      },
      en: {
        title: "Leadership",
        blurb:
          "Take your leadership skills to the next level with expert coaching.",
      },
    },
  },
];
