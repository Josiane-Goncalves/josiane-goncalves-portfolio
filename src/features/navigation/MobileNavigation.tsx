import { useTranslation } from "react-i18next";

import { navigationItems } from "./items";

export function MobileNavigation() {
  const { t } = useTranslation();

  return (
    <nav
      aria-label={t("shell.mobileNavigation")}
      className="mb-3 hidden overflow-x-auto border border-[var(--color-border-muted)] bg-[var(--color-surface-translucent)] p-2 max-[980px]:block"
    >
      <ul className="flex min-w-max gap-2">
        {navigationItems.map(({ code, href, labelKey }) => (
          <li key={href}>
            <a
              className="flex min-h-11 items-center gap-2 border border-system-lime/15 px-3 font-terminal text-xs uppercase tracking-[.1em] text-[var(--color-text-muted)] no-underline hover:border-system-lime/40 hover:text-[var(--color-system-bright)]"
              href={href}
            >
              <span className="text-[var(--color-mission-bright)]">{code}</span>
              {t(labelKey)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
