import { useTranslation } from "react-i18next";

import { HudPanel } from "../../components/HudPanel";
import { StatusBadge } from "../../components/StatusBadge";
import { aliaWorkflows } from "../../data/engineering";

export function AliaModule() {
  const { t } = useTranslation();

  return (
    <HudPanel
      className="h-full"
      eyebrow={t("alia.subsystem")}
      headerAccessory={
        <StatusBadge status="operational">{t("alia.supportMode")}</StatusBadge>
      }
      title={t("alia.title")}
      variant="ai"
    >
      <p className="max-w-2xl text-base leading-7 text-[var(--color-text-muted)]">
        {t("alia.description")}
      </p>

      <h3 className="mt-6 font-terminal text-xs uppercase tracking-[.16em] text-[var(--color-ai-bright)]">
        {t("alia.supportAreas")}
      </h3>
      <ul className="mt-3 grid grid-cols-2 gap-2 max-[540px]:grid-cols-1">
        {aliaWorkflows.map(({ id, translationKey }) => (
          <li
            className="border border-alia-violet/30 bg-alia-violet/5 px-3 py-3 font-terminal text-xs uppercase tracking-[.08em] text-[var(--color-text)]"
            key={id}
          >
            {t(`alia.workflows.${translationKey}`)}
          </li>
        ))}
      </ul>

      <div className="mt-6 border-l-2 border-alia-violet pl-4 text-sm leading-6 text-[var(--color-text-muted)]">
        <p>{t("alia.humanReview")}</p>
        <p>{t("alia.noAutonomy")}</p>
      </div>
    </HudPanel>
  );
}
