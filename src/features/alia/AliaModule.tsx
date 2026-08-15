import { useTranslation } from "react-i18next";

import { HudPanel } from "../../components/HudPanel";
import { StatusBadge } from "../../components/StatusBadge";
import { aliaWorkflows } from "../../data/engineering";

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

      <div className="alia-module__guardrails">
        <p>
          {t("alia.humanReview")} // {t("alia.humanValidation")} //{" "}
          {t("alia.humanDecision")}
        </p>
        <p>{t("alia.noAutonomy")}</p>
      </div>
    </HudPanel>
  );
}
