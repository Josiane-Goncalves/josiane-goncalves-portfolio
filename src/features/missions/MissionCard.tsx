import type { Ref } from "react";
import { useTranslation } from "react-i18next";

import type { Mission } from "../../data/missions";

type MissionCardProps = {
  active: boolean;
  buttonRef?: Ref<HTMLButtonElement>;
  detailId: string;
  mission: Mission;
  onSelect: (missionId: string) => void;
};

export function MissionCard({
  active,
  buttonRef,
  detailId,
  mission,
  onSelect,
}: MissionCardProps) {
  const { t } = useTranslation();
  const translationPath = `missions.items.${mission.translationKey}`;
  const title = t(`${translationPath}.title`);

  return (
    <button
      aria-controls={detailId}
      aria-expanded={active}
      aria-label={t("missions.openFile", { title })}
      className="mission-card"
      data-active={active || undefined}
      onClick={() => onSelect(mission.id)}
      ref={buttonRef}
      type="button"
    >
      <span className="mission-card__topline">
        <span className="mission-card__code">{mission.code}</span>
        <span className="mission-card__status">
          <span aria-hidden="true">◐</span>
          {t(`missions.status.${mission.status}`)}
        </span>
      </span>

      <strong className="mission-card__title">{title}</strong>
      <span className="mission-card__summary">
        {t(`${translationPath}.summary`)}
      </span>

      {mission.technologies.length > 0 ? (
        <span className="mission-card__technologies">
          {mission.technologies.join(" // ")}
        </span>
      ) : null}

      <span aria-hidden="true" className="mission-card__action">
        {t("missions.openFileAction")} <span>→</span>
      </span>
    </button>
  );
}
