import { useId } from "react";
import { useTranslation } from "react-i18next";

const primaryStack = ["React", "TypeScript", "Node.js", "APIs", "PostgreSQL"];

export function IdentityBrief() {
  const { t } = useTranslation();
  const nameId = useId();

  return (
    <section aria-labelledby={nameId} className="identity-brief">
      <span className="identity-brief__eyebrow">
        {t("shell.operativeRecord")}
      </span>
      <h1 className="identity-brief__name" id={nameId}>
        <span>JOSIANE</span>{" "}
        <span>GONÇALVES</span>
      </h1>
      <p className="identity-brief__role">{t("profile.role")}</p>

      <p
        aria-label={t("shell.coreStack")}
        className="identity-brief__stack"
      >
        {primaryStack.map((technology, index) => (
          <span key={technology}>
            {index > 0 && <span aria-hidden="true"> • </span>}
            {technology}
          </span>
        ))}
      </p>

      <span className="identity-brief__signature">
        {t("shell.identitySignature")}
      </span>
    </section>
  );
}
