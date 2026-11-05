/** The public address. The old host coach.oyvindbs.no sends here with the same path (308). */
export const SITE_URL = "https://coach.zoney.no";

/** Canonical URL and hreflang alternates for a path that exists in every locale ("" = front page). */
export function alternates(locale: string, path = "") {
  return {
    canonical: `${SITE_URL}/${locale}${path}`,
    languages: {
      no: `${SITE_URL}/no${path}`,
      en: `${SITE_URL}/en${path}`,
      "x-default": `${SITE_URL}/en${path}`,
    },
  };
}
