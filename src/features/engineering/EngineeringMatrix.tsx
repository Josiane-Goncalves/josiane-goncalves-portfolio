import { useTranslation } from "react-i18next";

import { HudPanel } from "../../components/HudPanel";
import { coreTechnologies, engineeringAreas } from "../../data/engineering";

export function EngineeringMatrix() {
  const { t } = useTranslation();

  return (
    <HudPanel className="h-full" title={t("engineering.title")} variant="system">
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

      <div className="mt-7 grid gap-3">
        {engineeringAreas.map(
          ({ id, translationKey, technologies, capabilities }) => (
            <section
              className="border border-[var(--color-border-muted)] bg-[var(--color-surface-elevated)] p-4"
              key={id}
            >
              <h3 className="font-terminal text-xs uppercase tracking-[.14em] text-[var(--color-system-bright)]">
                {t(`engineering.areas.${translationKey}`)}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {technologies.map((technology) => (
                  <li
                    className="border border-system-lime/25 px-2 py-1 font-terminal text-xs text-[var(--color-text)]"
                    key={technology}
                  >
                    {technology}
                  </li>
                ))}
                {capabilities.map((capability) => (
                  <li
                    className="border border-[var(--color-border-muted)] px-2 py-1 font-terminal text-xs text-[var(--color-text-muted)]"
                    key={capability}
                  >
                    {t(`engineering.capabilities.${capability}`)}
                  </li>
                ))}
              </ul>
            </section>
          ),
        )}
      </div>
    </HudPanel>
  );
}
