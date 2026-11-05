import createIntlMiddleware from "next-intl/middleware";
import { NextResponse, type NextRequest } from "next/server";
import { routing } from "./i18n/routing";

const intl = createIntlMiddleware(routing);

/** Norwegian (nb, nn, no) in Accept-Language → "no", otherwise the default locale. */
function preferredLocale(request: NextRequest) {
  const acceptLanguage = request.headers.get("accept-language") ?? "";
  return /(^|[\s,])(nb|nn|no)(-|;|,|$)/i.test(acceptLanguage)
    ? "no"
    : routing.defaultLocale;
}

/**
 * Every page lives under /no/… or /en/…. No cookies are ever set.
 *   - "/" is served directly (rewrite, 200) in the language from Accept-Language,
 *     so the health check and first visits get a page, not a redirect.
 *   - "/personvern" is served directly in Norwegian.
 *   - Any other path without a prefix (old links like /terreng) is redirected
 *     to the same path under /no or /en, chosen by Accept-Language.
 */
export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasPrefix = routing.locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (hasPrefix) return intl(request);

  if (pathname === "/" || pathname === "/personvern") {
    const locale = pathname === "/" ? preferredLocale(request) : "no";
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
    const response = NextResponse.rewrite(url);
    if (pathname === "/") response.headers.set("Vary", "Accept-Language");
    return response;
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${preferredLocale(request)}${pathname}`;
  const response = NextResponse.redirect(url);
  response.headers.set("Vary", "Accept-Language");
  return response;
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
