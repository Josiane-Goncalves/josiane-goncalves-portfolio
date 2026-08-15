import { useTranslation } from "react-i18next";

import { HudPanel } from "../../components/HudPanel";
import { StatusBadge } from "../../components/StatusBadge";
import { credentials, education } from "../../data/professional";

export function CertificationsPanel() {
  const { t } = useTranslation();
  const certifications = credentials.filter(
    ({ type }) => type === "certification",
  );
  const training = credentials.filter(({ type }) => type === "training");

  return (
    <HudPanel
      bodyClassName="certifications-panel__body"
      className="certifications-panel"
      headerAccessory={
        <div className="certifications-panel__header-meta">
          <StatusBadge status="documenting">
            {t("certifications.recordsConfirmed")}
          </StatusBadge>
        </div>
      }
      title={t("certifications.title")}
      variant="credential"
    >
      <div className="certifications-panel__records">
        <div
          aria-label={t("certifications.education")}
          className="certifications-panel__education"
          role="group"
        >
          <h3>{t("certifications.education")}</h3>
          <ul className="certifications-panel__education-list">
            {education.map(
              ({ id, institution, primary, translationKey }) => (
                <li data-primary={primary ? "" : undefined} key={id}>
                  <strong>
                    {t(`professional.education.${translationKey}.course`)}
                  </strong>
                  <span>{institution}</span>
                  <small>
                    {t(`professional.education.${translationKey}.status`)}
                  </small>
                </li>
              ),
            )}
          </ul>
        </div>

        <div
          aria-label={t("certifications.certification")}
          className="certifications-panel__primary"
          role="group"
        >
          <h3>{t("certifications.certification")}</h3>
          <ul className="certifications-panel__primary-list">
            {certifications.map(({ id, issuer, name }) => (
              <li key={id}>
                <strong>{name}</strong>
                {issuer ? <span>{issuer}</span> : null}
              </li>
            ))}
          </ul>
        </div>

        <div
          aria-label={t("certifications.training")}
          className="certifications-panel__training"
          role="group"
        >
          <h3>{t("certifications.training")}</h3>
          <ul className="certifications-panel__training-list">
            {training.map(({ id, issuer, name }) => (
              <li key={id}>
                <strong>{name}</strong>
                {issuer ? <span>{issuer}</span> : null}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </HudPanel>
  );
}
