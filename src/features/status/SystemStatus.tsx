import { useTranslation } from "react-i18next";

import { HudPanel } from "../../components/HudPanel";
import { systemOverview } from "../../data/engineering";

const visibleOverviewIds = new Set(["languages", "missions", "engineering"]);

export function SystemStatus() {
  const { t } = useTranslation();

  return (
    <HudPanel
      bodyClassName="hud-panel__body--flush"
      title={t("systemStatus.title")}
      variant="system"
    >
      <ul className="grid gap-px bg-[var(--color-border-muted)]">
        {systemOverview
          .filter(({ id }) => visibleOverviewIds.has(id))
          .map(({ id, translationKey, valueKey }) => (
            <li
              className="flex min-h-14 items-center justify-between gap-4 bg-[var(--color-surface)] px-4 py-3"
              key={id}
            >
              <span className="font-terminal text-xs uppercase tracking-[.1em] text-[var(--color-text)]">
                {t(`systemStatus.items.${translationKey}`)}
              </span>
              <span className="system-overview__value">
                <span aria-hidden="true">◆</span>
                {t(`systemStatus.values.${valueKey}`)}
              </span>
            </li>
          ))}
      </ul>
    </HudPanel>
  );
}
