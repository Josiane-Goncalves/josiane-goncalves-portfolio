import { useTranslation } from "react-i18next";

import { navigationItems } from "./items";

export function SideNavigation() {
  const { t } = useTranslation();

  return (
    <aside className="max-[980px]:hidden">
      <nav
        aria-label={t("shell.primaryNavigation")}
        className="sticky top-4 border border-[var(--color-border-muted)] bg-[var(--color-surface-translucent)] p-3 shadow-[var(--shadow-elevated)]"
      >
        <div className="mb-4 border-b border-system-lime/20 pb-3">
          <span className="block font-terminal text-xs tracking-[.16em] text-[var(--color-text-muted)]">
            {t("shell.commandIndex")}
          </span>
          <strong className="mt-1 block font-terminal text-sm tracking-[.14em] text-[var(--color-system-bright)]">
            JG // 01
          </strong>
        </div>

        <ul className="grid gap-2">
          {navigationItems.map(({ code, href, labelKey }) => (
            <li key={href}>
              <a
                className="group grid min-h-11 grid-cols-[28px_1fr] items-center border border-transparent px-2 text-xs uppercase tracking-[.1em] text-[var(--color-text-muted)] no-underline transition hover:border-system-lime/30 hover:bg-system-lime/5 hover:text-[var(--color-system-bright)]"
                href={href}
              >
                <span className="font-terminal text-xs text-[var(--color-mission-bright)]">{code}</span>
                <span>{t(labelKey)}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-5 border-t border-system-lime/20 pt-3 font-terminal text-xs tracking-[.1em] text-[var(--color-text-muted)]">
          <span aria-hidden="true" className="mr-2 inline-block h-2 w-2 bg-system-lime" />
          {t("shell.systemOnline")}
        </div>
      </nav>
    </aside>
  );
}
