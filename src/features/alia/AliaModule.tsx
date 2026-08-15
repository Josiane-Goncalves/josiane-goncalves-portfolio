import { useTranslation } from "react-i18next";

import { HudPanel } from "../../components/HudPanel";
import { StatusBadge } from "../../components/StatusBadge";

export function AliaModule() {
  const { t } = useTranslation();

  return (
    <HudPanel
      className="alia-module"
      eyebrow={t("alia.subsystem")}
      headerAccessory={
        <StatusBadge status="operational">{t("alia.supportMode")}</StatusBadge>
      }
      title={t("alia.title")}
      variant="ai"
    >
      <p className="font-terminal text-xs uppercase tracking-[.12em] text-[var(--color-ai-bright)]">
        {t("alia.fullName")}
      </p>
      <p className="max-w-2xl text-base leading-7 text-[var(--color-text-muted)]">
        {t("alia.description")}
      </p>
    </HudPanel>
  );
}
