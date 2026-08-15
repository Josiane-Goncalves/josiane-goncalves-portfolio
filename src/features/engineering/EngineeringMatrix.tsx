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
              aria-labelledby={`engineering-area-${id}`}
              className="engineering-matrix__area"
              data-engineering-area={id}
              key={id}
            >
              <div className="engineering-matrix__area-header">
                <h3 id={`engineering-area-${id}`}>
                  <span aria-hidden="true">0{index + 1}</span>
                  {t(`engineering.areas.${translationKey}`)}
                </h3>
                <span aria-hidden="true" className="engineering-matrix__trace" />
              </div>
              <div className="engineering-matrix__area-body">
                <ul className="engineering-matrix__technologies">
                  {technologies.map((technology) => (
                    <li data-kind="technology" key={technology}>
                      {technology}
                    </li>
                  ))}
                  {capabilities.map((capability) => (
                    <li data-kind="capability" key={capability}>
                      {t(`engineering.capabilities.${capability}`)}
                    </li>
                  ))}
                </ul>
                <div className="engineering-matrix__activity">
                  <SignalBars pattern={index} size="wide" />
                </div>
              </div>
            </section>
          ),
        )}
      </div>
    </HudPanel>
  );
}
