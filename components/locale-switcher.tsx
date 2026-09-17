"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations("layout");

  return (
    <nav
      aria-label={t("language")}
      className="flex items-center gap-0.5 rounded-full border border-line bg-card p-0.5 text-[11px] font-medium"
    >
      {routing.locales.map((l) => (
        <Link
          key={l}
          href={pathname}
          locale={l}
          aria-current={l === locale ? "true" : undefined}
          className={cn(
            "rounded-full px-2 py-0.5 uppercase tracking-wide transition",
            l === locale ? "bg-fg text-bg" : "text-muted hover:text-fg",
          )}
        >
          {l}
        </Link>
      ))}
    </nav>
  );
}
