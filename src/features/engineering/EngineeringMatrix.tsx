import { useId } from "react";
import { useTranslation } from "react-i18next";

import { coreTechnologies, engineeringTracks } from "../../data/engineering";

export function EngineeringMatrix() {
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
        {t("engineering.title")}
      </h2>

      <h3 className="mt-6 text-[10px] uppercase tracking-[.18em] text-[var(--hud-text-muted)]">
        {t("engineering.coreTechnologies")}
      </h3>
      <ul className="mt-3 flex flex-wrap gap-2">
        {coreTechnologies.map((technology) => (
          <li
            className="border border-system-lime/30 px-3 py-2 text-xs text-system-lime"
            key={technology}
          >
            {technology}
          </li>
        ))}
      </ul>

      <h3 className="mt-7 text-[10px] uppercase tracking-[.18em] text-[var(--hud-text-muted)]">
        {t("engineering.coverage")}
      </h3>
      <ul className="mt-3 grid grid-cols-2 gap-2 max-[540px]:grid-cols-1">
        {engineeringTracks.map(({ id, status, translationKey }) => (
          <li className="border border-[var(--hud-border)] p-3" key={id}>
            <span className="block text-xs uppercase tracking-[.1em] text-[var(--hud-text)]">
              {t(`engineering.tracks.${translationKey}`)}
            </span>
            <span className="mt-2 block text-[9px] uppercase tracking-[.12em] text-[var(--hud-text-muted)]">
              {t(`engineering.status.${status}`)}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
