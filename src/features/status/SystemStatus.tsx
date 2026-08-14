import { useTranslation } from "react-i18next";

import { HudPanel } from "../../components/HudPanel";
import { StatusBadge, type StatusTone } from "../../components/StatusBadge";
import { systemStatuses } from "../../data/engineering";

export function SystemStatus() {
  const { t } = useTranslation();

  return (
    <HudPanel
      bodyClassName="hud-panel__body--flush"
      title={t("systemStatus.title")}
      variant="system"
    >
      <ul className="grid gap-px bg-[var(--color-border-muted)]">
        {systemStatuses.map(({ id, status, translationKey }) => (
          <li
            className="flex min-h-14 items-center justify-between gap-4 bg-[var(--color-surface)] px-4 py-3"
            key={id}
          >
            <span className="font-terminal text-xs uppercase tracking-[.1em] text-[var(--color-text)]">
              {t(`systemStatus.items.${translationKey}`)}
            </span>
            <StatusBadge status={status as StatusTone}>
              {t(`systemStatus.status.${status}`)}
            </StatusBadge>
          </li>
        ))}
      </ul>
    </HudPanel>
  );
}
