import { useId } from "react";
import { useTranslation } from "react-i18next";

import { systemStatuses } from "../../data/engineering";

export function SystemStatus() {
  const { t } = useTranslation();
  const titleId = useId();

  return (
    <section
      aria-labelledby={titleId}
      className="border border-system-lime/30 bg-[rgba(3,6,4,.94)]"
    >
      <div className="border-b border-system-lime/20 px-4 py-3">
        <h2
          className="font-heading text-lg font-semibold uppercase tracking-[.14em] text-system-lime"
          id={titleId}
        >
          {t("systemStatus.title")}
        </h2>
      </div>

      <ul className="grid gap-px bg-[var(--hud-border)]">
        {systemStatuses.map(({ id, status, translationKey }) => (
          <li
            className="flex items-center justify-between gap-4 bg-[var(--hud-surface-panel)] px-4 py-3"
            key={id}
          >
            <span className="text-[10px] uppercase tracking-[.12em] text-[var(--hud-text)]">
              {t(`systemStatus.items.${translationKey}`)}
            </span>
            <span
              className={`text-[9px] uppercase tracking-[.12em] ${
                status === "operational"
                  ? "text-system-lime"
                  : status === "documenting"
                    ? "text-mission-amber"
                    : "text-[var(--hud-text-muted)]"
              }`}
            >
              {t(`systemStatus.status.${status}`)}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
