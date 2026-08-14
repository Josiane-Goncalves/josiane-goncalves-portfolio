import { useTranslation } from "react-i18next";

import { navigationItems } from "./items";

export function MobileNavigation() {
  const { t } = useTranslation();

  return (
    <nav
      aria-label={t("shell.mobileNavigation")}
      className="mb-3 hidden overflow-x-auto border border-[var(--hud-border)] bg-[rgba(3,6,4,.94)] p-2 max-[980px]:block"
    >
      <ul className="flex min-w-max gap-2">
        {navigationItems.map(({ code, href, labelKey }) => (
          <li key={href}>
            <a
              className="flex min-h-10 items-center gap-2 border border-system-lime/15 px-3 text-[10px] uppercase tracking-[.12em] text-[var(--hud-text-muted)] no-underline hover:border-system-lime/40 hover:text-system-lime"
              href={href}
            >
              <span className="text-mission-amber">{code}</span>
              {t(labelKey)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
