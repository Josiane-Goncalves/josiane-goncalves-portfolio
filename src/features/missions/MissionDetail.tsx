import { useId } from "react";
import { useTranslation } from "react-i18next";

import { StatusBadge, type StatusTone } from "../../components/StatusBadge";
import type { Mission, MissionStatus } from "../../data/missions";

type MissionDetailProps = {
  detailId: string;
  mission: Mission;
  onClose: () => void;
};

const statusTones: Record<MissionStatus, StatusTone> = {
  documenting: "documenting",
  inDevelopment: "operational",
  operational: "operational",
  paused: "pending",
  caseStudy: "mapping",
  planned: "pending",
};

export function MissionDetail({
  detailId,
  mission,
  onClose,
}: MissionDetailProps) {
  const { t } = useTranslation();
  const headingId = useId();
  const translationPath = `missions.items.${mission.translationKey}`;
  const title = t(`${translationPath}.title`);

  return (
    <article
      aria-label={t("missions.detailLabel", { title })}
      aria-live="polite"
      className="mission-detail"
      id={detailId}
      role="region"
    >
      <div aria-hidden="true" className="mission-detail__scan" />

      <header className="mission-detail__header">
        <div>
          <span className="mission-detail__code">
            {mission.code} // {t("missions.selectedMission")}
          </span>
          <h3 className="mission-detail__title" id={headingId}>
            {title}
          </h3>
        </div>

        <button
          aria-label={t("missions.closeFile", { title })}
          className="mission-detail__close"
          onClick={onClose}
          type="button"
        >
          <span aria-hidden="true">×</span>
          {t("missions.close")}
        </button>
      </header>

      <div className="mission-detail__meta">
        <span>{t("missions.recordStatus")}</span>
        <StatusBadge status={statusTones[mission.status]}>
          {t(`missions.status.${mission.status}`)}
        </StatusBadge>
      </div>

      <p className="mission-detail__summary">
        {t(`${translationPath}.summary`)}
      </p>

      <div className="mission-detail__sections">
        {mission.sections.map((section) => (
          <section className="mission-detail__section" key={section}>
            <h4>{t(`missions.sections.${section}`)}</h4>
            <p>{t(`${translationPath}.sections.${section}`)}</p>
          </section>
        ))}
      </div>

      {mission.technologies.length > 0 ? (
        <section className="mission-detail__section mission-detail__technology-section">
          <h4>{t("missions.technologies")}</h4>
          <ul className="mission-detail__technologies">
            {mission.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        </section>
      ) : null}

      {mission.repositoryUrl || mission.liveUrl ? (
        <div className="mission-detail__links">
          {mission.repositoryUrl ? (
            <a href={mission.repositoryUrl} rel="noreferrer" target="_blank">
              {t("missions.viewRepository")}
            </a>
          ) : null}
          {mission.liveUrl ? (
            <a href={mission.liveUrl} rel="noreferrer" target="_blank">
              {t("missions.openSystem")}
            </a>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}
