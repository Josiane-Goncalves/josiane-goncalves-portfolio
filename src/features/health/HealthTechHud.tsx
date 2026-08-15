import { useTranslation } from "react-i18next";

import { HeartRateGraph } from "../../components/HeartRateGraph";
import { HudPanel } from "../../components/HudPanel";
import { StatusBadge } from "../../components/StatusBadge";

export function ConditionPanel() {
  const { t } = useTranslation();

  return (
    <HudPanel
      bodyClassName="condition-panel__body"
      className="condition-panel"
      title={t("healthTech.condition.title")}
      variant="system"
    >
      <StatusBadge status="operational">
        {t("healthTech.condition.status")}
      </StatusBadge>
      <p>{t("healthTech.condition.link")}</p>
    </HudPanel>
  );
}

export function ClinicalSignalPanel() {
  const { t } = useTranslation();

  return (
    <HudPanel
      bodyClassName="clinical-signal-panel__body"
      className="clinical-signal-panel"
      title={t("healthTech.clinicalSignal.signalLabel")}
      variant="system"
    >
      <HeartRateGraph />
      <div className="clinical-signal-panel__copy">
        <strong>{t("healthTech.clinicalSignal.signalState")}</strong>
        <p>{t("healthTech.clinicalSignal.signalCaption")}</p>
      </div>
    </HudPanel>
  );
}
