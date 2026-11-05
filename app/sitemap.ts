import type { MetadataRoute } from "next";
import { PLANS } from "@/content";
import { routing } from "@/i18n/routing";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    ...Object.keys(PLANS).map((slug) => `/${slug}`),
    "/personvern",
  ];
  return paths.flatMap((path) =>
    routing.locales.map((locale) => ({
      url: `${SITE_URL}/${locale}${path}`,
      alternates: {
        languages: {
          no: `${SITE_URL}/no${path}`,
          en: `${SITE_URL}/en${path}`,
        },
      },
    })),
  );
}
