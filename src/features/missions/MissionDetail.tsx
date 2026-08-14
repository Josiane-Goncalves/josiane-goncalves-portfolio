import { useTranslation } from "react-i18next";

import type { Mission } from "../../data/missions";

type MissionDetailProps = {
  mission: Mission;
};

export function MissionDetail({ mission }: MissionDetailProps) {
  const { t } = useTranslation();
  const translationPath = `missions.items.${mission.translationKey}`;

  return (
    <article aria-live="polite" className="min-w-0 border border-mission-amber/25 bg-[#050806] p-5">
      <div className="flex items-start justify-between gap-5 border-b border-mission-amber/20 pb-4 max-[640px]:flex-col">
        <div>
          <span className="text-[10px] tracking-[.22em] text-mission-amber">
            {mission.code} // {t("missions.selectedMission")}
          </span>
          <h3 className="mt-2 font-heading text-[clamp(2rem,5vw,4rem)] font-bold uppercase leading-none tracking-[.03em] text-[var(--hud-text)]">
            {t(`${translationPath}.title`)}
          </h3>
        </div>
        <span className="border border-system-lime/25 px-3 py-2 text-[9px] uppercase tracking-[.16em] text-system-lime">
          {t(`missions.status.${mission.status}`)}
        </span>
      </div>

      <p className="max-w-3xl border-l-2 border-mission-amber pl-4 text-sm leading-6 text-[var(--hud-text-muted)]">
        {t(`${translationPath}.summary`)}
      </p>

      <div className="mt-7">
        <h4 className="text-xs uppercase tracking-[.18em] text-mission-amber">
          {t("missions.engineeringEvidence")}
        </h4>
        <ul className="mt-3 grid grid-cols-2 gap-2 max-[640px]:grid-cols-1">
          {mission.evidence.map(({ area, status }) => (
            <li
              className="flex min-h-12 items-center justify-between gap-3 border border-[var(--hud-border)] px-3 py-2"
              key={area}
            >
              <span className="text-[10px] uppercase tracking-[.12em] text-[var(--hud-text)]">
                {t(`missions.evidence.${area}`)}
              </span>
              <span className="text-[9px] uppercase tracking-[.1em] text-[var(--hud-text-muted)]">
                {t(`missions.status.${status}`)}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-7 border-t border-[var(--hud-border)] pt-4">
        <span className="text-[10px] uppercase tracking-[.16em] text-[var(--hud-text-muted)]">
          {t("missions.technologies")}
        </span>
        {mission.technologies.length > 0 ? (
          <ul className="mt-3 flex flex-wrap gap-2">
            {mission.technologies.map((technology) => (
              <li
                className="border border-system-lime/25 px-2 py-1 text-[10px] text-system-lime"
                key={technology}
              >
                {technology}
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-2 text-xs text-[var(--hud-text-muted)]">
            {t("missions.technologiesPending")}
          </p>
        )}
      </div>
    </article>
  );
}
