import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: Omit<Props, "children">): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "layout" });
  return {
    title: { default: t("brand"), template: `%s · ${t("brand")}` },
    description: t("description"),
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  const t = await getTranslations("layout");

  return (
    <html lang={locale} className={`${geist.variable} ${geistMono.variable}`}>
      <body className="min-h-dvh bg-bg font-sans text-fg antialiased">
        <NextIntlClientProvider>
          <div
            aria-hidden
            className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-[44rem] bg-[radial-gradient(70rem_28rem_at_50%_-8rem,var(--glow),transparent_70%)]"
          />
          <header className="sticky top-0 z-40 border-b border-line/70 bg-bg/80 backdrop-blur-md">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
              <Link
                href="/"
                className="flex items-center gap-2 text-sm font-semibold tracking-tight"
              >
                <span className="grid size-6 place-items-center rounded-full bg-fg text-[11px] font-bold text-bg">
                  Ø
                </span>
                {t("brand")}
              </Link>
              <div className="flex items-center gap-3">
                <span className="hidden text-xs text-muted sm:inline">
                  {t("est")}
                </span>
                <LocaleSwitcher />
              </div>
            </div>
          </header>
          <main>{children}</main>
          <footer className="mx-auto max-w-6xl px-5 py-10 text-xs text-muted">
            {t("footer")}
          </footer>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
