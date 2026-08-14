import { useTranslation } from "react-i18next";

import { HudPanel } from "../../components/HudPanel";
import { StatusBadge } from "../../components/StatusBadge";
import { coreTechnologies, engineeringTracks } from "../../data/engineering";

export function EngineeringMatrix() {
  const { t } = useTranslation();

  return (
    <HudPanel
      className="h-full"
      title={t("engineering.title")}
      variant="system"
    >
      <h3 className="font-terminal text-xs uppercase tracking-[.16em] text-[var(--color-text-muted)]">
        {t("engineering.coreTechnologies")}
      </h3>
      <ul className="mt-3 flex flex-wrap gap-2">
        {coreTechnologies.map((technology) => (
          <li
            className="border border-system-lime/35 bg-system-lime/5 px-3 py-2 font-terminal text-xs text-[var(--color-system-bright)]"
            key={technology}
          >
            {technology}
          </li>
        ))}
      </ul>

      <h3 className="mt-7 font-terminal text-xs uppercase tracking-[.16em] text-[var(--color-text-muted)]">
        {t("engineering.coverage")}
      </h3>
      <ul className="mt-3 grid grid-cols-2 gap-2 max-[540px]:grid-cols-1">
        {engineeringTracks.map(({ id, status, translationKey }) => (
          <li className="border border-[var(--color-border-muted)] bg-[var(--color-surface-elevated)] p-3" key={id}>
            <span className="block font-terminal text-xs uppercase tracking-[.08em] text-[var(--color-text)]">
              {t(`engineering.tracks.${translationKey}`)}
            </span>
            <StatusBadge className="mt-3" status="mapping">
              {t(`engineering.status.${status}`)}
            </StatusBadge>
          </li>
        ))}
      </ul>
    </HudPanel>
  );
}
