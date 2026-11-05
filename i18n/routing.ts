import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["no", "en"],
  defaultLocale: "en",
  localePrefix: "always",
  // The language lives in the URL only. No cookie: an ordinary visit must not
  // set any (a rule on the app server, checked every hour on the front page).
  localeCookie: false,
  // proxy.ts picks the language for unprefixed paths itself.
  localeDetection: false,
});
