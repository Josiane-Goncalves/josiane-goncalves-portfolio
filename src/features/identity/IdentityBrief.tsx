import { useId } from "react";
import { useTranslation } from "react-i18next";

import { professionalProfile } from "../../data/professional";

export function IdentityBrief() {
  const { t } = useTranslation();
  const nameId = useId();
  const [givenName, ...familyName] = professionalProfile.fullName.split(" ");

  return (
    <section aria-labelledby={nameId} className="identity-brief">
      <span className="identity-brief__eyebrow">
        {t("shell.operativeRecord")}
      </span>
      <h1 className="identity-brief__name" id={nameId}>
        <span>{givenName}</span>{" "}
        <span>{familyName.join(" ")}</span>
      </h1>
      <p className="identity-brief__role">{t("profile.role")}</p>

      <p aria-label={t("shell.coreStack")} className="identity-brief__stack">
        {professionalProfile.primaryStack.map((technology, index) => (
          <span key={technology}>
            {index > 0 && <span aria-hidden="true"> • </span>}
            {technology}
          </span>
        ))}
      </p>

      <p className="identity-brief__summary">{t("profile.description")}</p>

      <dl className="identity-brief__meta">
        <div>
          <dt>{t("profile.locationLabel")}</dt>
          <dd>{professionalProfile.location}</dd>
        </div>
        <div>
          <dt>{t("profile.focusLabel")}</dt>
          <dd>{t("profile.focus")}</dd>
        </div>
        <div>
          <dt>{t("profile.statusLabel")}</dt>
          <dd>{t("profile.availability")}</dd>
        </div>
      </dl>

      <span className="identity-brief__signature">
        {t("shell.identitySignature")}
      </span>
    </section>
  );
}
