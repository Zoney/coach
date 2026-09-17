import createIntlMiddleware from "next-intl/middleware";
import { NextResponse, type NextRequest } from "next/server";
import { routing } from "./i18n/routing";

const intl = createIntlMiddleware(routing);

/**
 * Locale resolution, in priority order:
 *   1. An explicit /no or /en prefix in the URL.
 *   2. The NEXT_LOCALE cookie (set by next-intl when the visitor switches language).
 *   3. Norwegian IP (Vercel's x-vercel-ip-country header) or a Norwegian Accept-Language → /no.
 *   4. next-intl's own Accept-Language matching, falling back to the default locale (en).
 */
export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasPrefix = routing.locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );

  if (!hasPrefix && !request.cookies.get("NEXT_LOCALE")) {
    const country = request.headers.get("x-vercel-ip-country");
    const acceptLanguage = request.headers.get("accept-language") ?? "";
    const prefersNorwegian =
      country === "NO" || /(^|[\s,])(nb|nn|no)(-|;|,|$)/i.test(acceptLanguage);

    if (prefersNorwegian) {
      const url = request.nextUrl.clone();
      url.pathname = `/no${pathname === "/" ? "" : pathname}`;
      return NextResponse.redirect(url);
    }
  }

  return intl(request);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
