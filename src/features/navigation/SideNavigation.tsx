import { useTranslation } from "react-i18next";

import { navigationItems } from "./items";

export function SideNavigation() {
  const { t } = useTranslation();

  return (
    <aside className="max-[980px]:hidden">
      <nav
        aria-label={t("shell.primaryNavigation")}
        className="sticky top-4 border border-[var(--hud-border)] bg-[rgba(3,6,4,.92)] p-3 shadow-[0_18px_50px_rgba(0,0,0,.38)]"
      >
        <div className="mb-4 border-b border-system-lime/20 pb-3">
          <span className="block text-[10px] tracking-[.24em] text-[var(--hud-text-muted)]">
            {t("shell.commandIndex")}
          </span>
          <strong className="mt-1 block text-sm tracking-[.16em] text-system-lime">
            JG // 01
          </strong>
        </div>

        <ul className="grid gap-2">
          {navigationItems.map(({ code, href, labelKey }) => (
            <li key={href}>
              <a
                className="group grid min-h-11 grid-cols-[28px_1fr] items-center border border-transparent px-2 text-xs uppercase tracking-[.12em] text-[var(--hud-text-muted)] no-underline transition hover:border-system-lime/30 hover:bg-system-lime/5 hover:text-system-lime"
                href={href}
              >
                <span className="text-[10px] text-mission-amber">{code}</span>
                <span>{t(labelKey)}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-5 border-t border-system-lime/20 pt-3 text-[10px] tracking-[.12em] text-[var(--hud-text-muted)]">
          <span className="mr-2 inline-block h-2 w-2 bg-system-lime shadow-[0_0_10px_var(--hud-system-lime)]" />
          {t("shell.systemOnline")}
        </div>
      </nav>
    </aside>
  );
}
