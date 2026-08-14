import { useId } from "react";
import { useTranslation } from "react-i18next";

import { engineeringLogEntries } from "../../data/engineering";

export function EngineeringLog() {
  const { t } = useTranslation();
  const titleId = useId();

  return (
    <section
      aria-labelledby={titleId}
      className="h-full border border-system-lime/30 bg-[rgba(3,6,4,.94)] p-5"
    >
      <h2
        className="font-heading text-xl font-semibold uppercase tracking-[.14em] text-system-lime"
        id={titleId}
      >
        {t("engineering.logTitle")}
      </h2>

      {engineeringLogEntries.length === 0 ? (
        <div className="mt-6 border border-dashed border-[var(--hud-border)] p-5">
          <span className="text-[9px] uppercase tracking-[.18em] text-mission-amber">
            {t("engineering.verificationPending")}
          </span>
          <p className="mt-3 max-w-xl text-sm leading-6 text-[var(--hud-text-muted)]">
            {t("engineering.logEmpty")}
          </p>
        </div>
      ) : (
        <ol className="mt-6 grid gap-3">
          {engineeringLogEntries.map(({ id, translationKey }) => (
            <li className="border border-[var(--hud-border)] p-4" key={id}>
              {t(`engineering.logEntries.${translationKey}`)}
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}
