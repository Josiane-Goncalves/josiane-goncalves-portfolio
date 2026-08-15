import { useId } from "react";
import { useTranslation } from "react-i18next";

import { OpportunityRadar } from "../../components/OpportunityRadar";
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

      <div className="identity-brief__availability">
        <div>
          <span>{t("profile.statusLabel")}</span>
          <strong>{t("profile.availability")}</strong>
        </div>
        <OpportunityRadar />
      </div>

      <span className="identity-brief__signature">
        {t("shell.identitySignature")}
      </span>
    </section>
  );
}
