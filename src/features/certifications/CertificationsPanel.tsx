import { useId } from "react";
import { useTranslation } from "react-i18next";

import { certifications } from "../../data/engineering";

export function CertificationsPanel() {
  const { t } = useTranslation();
  const titleId = useId();

  return (
    <section
      aria-labelledby={titleId}
      className="h-full border border-mission-amber/30 bg-[rgba(3,6,4,.94)] p-5"
    >
      <h2
        className="font-heading text-xl font-semibold uppercase tracking-[.14em] text-mission-amber"
        id={titleId}
      >
        {t("certifications.title")}
      </h2>

      {certifications.length === 0 ? (
        <div className="mt-6 border border-dashed border-[var(--hud-border)] p-5">
          <span className="text-[9px] uppercase tracking-[.18em] text-mission-amber">
            {t("certifications.verificationPending")}
          </span>
          <p className="mt-3 text-sm leading-6 text-[var(--hud-text-muted)]">
            {t("certifications.empty")}
          </p>
        </div>
      ) : (
        <ul className="mt-6 grid gap-3">
          {certifications.map(({ id, translationKey }) => (
            <li className="border border-[var(--hud-border)] p-4" key={id}>
              {t(`certifications.items.${translationKey}`)}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
