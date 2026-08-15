import { useTranslation } from "react-i18next";

import type { Mission } from "../../data/missions";

type MissionCardProps = {
  active: boolean;
  mission: Mission;
};

export function MissionCard({ active, mission }: MissionCardProps) {
  const { t } = useTranslation();
  const translationPath = `missions.items.${mission.translationKey}`;
  const title = t(`${translationPath}.title`);

  const content = (
    <>
      <span className="mission-card__topline">
        <span className="mission-card__code">{mission.code}</span>
        {mission.status ? (
          <span className="mission-card__status">
            <span aria-hidden="true">◐</span>
            {t(`missions.status.${mission.status}`)}
          </span>
        ) : null}
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
        {mission.repositoryUrl
          ? t("missions.repositoryAction")
          : t("missions.repositoryPending")}
        {mission.repositoryUrl ? <span>↗</span> : null}
      </span>
    </>
  );

  if (mission.repositoryUrl) {
    return (
      <a
        aria-current={active ? "true" : undefined}
        aria-label={t("missions.openRepositoryOnGithub", { title })}
        className="mission-card"
        data-active={active || undefined}
        href={mission.repositoryUrl}
        rel="noopener noreferrer"
        target="_blank"
      >
        {content}
      </a>
    );
  }

  return (
    <article
      aria-current={active ? "true" : undefined}
      aria-label={t("missions.repositoryUnavailable", { title })}
      className="mission-card"
      data-active={active || undefined}
    >
      {content}
    </article>
  );
}
