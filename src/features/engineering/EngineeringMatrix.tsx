import { useTranslation } from "react-i18next";

import { HudPanel } from "../../components/HudPanel";
import { SignalBars } from "../../components/SignalBars";
import { engineeringAreas } from "../../data/engineering";

export function EngineeringMatrix() {
  const { t } = useTranslation();

  return (
    <HudPanel
      className="engineering-matrix"
      title={t("engineering.title")}
      variant="system"
    >
      <div className="engineering-matrix__areas">
        {engineeringAreas.map(
          ({ id, translationKey, technologies, capabilities }, index) => (
            <section
              className="engineering-matrix__area"
              key={id}
            >
              <div className="engineering-matrix__area-header">
                <h3>{t(`engineering.areas.${translationKey}`)}</h3>
                <SignalBars pattern={index} size="wide" />
              </div>
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
